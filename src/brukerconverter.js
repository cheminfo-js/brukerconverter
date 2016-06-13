"use strict";

const Converter = require("jcampconverter");
const IOBuffer = require('iobuffer');
const JSZip = require("jszip");

// constants
var BINARY = 1;
var TEXT = 2;


function readZIP(zipFile, options) {
    options = options || {};

    var zip = new JSZip();
    zip.load(zipFile, options);

    var files = {
        'ser': BINARY,
        'fid': BINARY,
        'acqus': TEXT,
        'acqu2s': TEXT,
        'procs': TEXT,
        'proc2s': TEXT,
        '1r': BINARY,
        '1i': BINARY,
        '2rr': BINARY
    };
    var folders = zip.filter(function (relativePath, file) {
        if(relativePath.indexOf("ser")>=0||relativePath.indexOf("fid")>=0
            ||relativePath.indexOf("1r")>=0||relativePath.indexOf("2rr")>=0){
            return true;
        }

        return false;

    });

    var spectra = new Array(folders.length);

    for(var i = 0; i < folders.length; ++i) {
        var len = folders[i].name.length;
        var name = folders[i].name;
        name = name.substr(0,name.lastIndexOf("/")+1);
        var currFolder = zip.folder(name);
        var currFiles = currFolder.filter(function (relativePath, file) {
            return files[relativePath] ? true : false;
        });
        var brukerFiles = {};
        if(name.indexOf("pdata")>=0){
            brukerFiles['acqus'] = zip.file(name.replace(/pdata\/[0-9]\//,"acqus")).asText();
        }
        for(var j = 0; j < currFiles.length; ++j) {
            var idx = currFiles[j].name.lastIndexOf('/');
            var name = currFiles[j].name.substr(idx + 1);
            if(files[name] === BINARY) {
                brukerFiles[name] = new IOBuffer(currFiles[j].asArrayBuffer());
            } else {
                brukerFiles[name] = currFiles[j].asText();
            }
        }
        //console.log(folders[i].name);
        spectra[i] = {"filename":folders[i].name,value:convert(brukerFiles,options)};
    }

    return spectra;
}

function convert(brukerFiles, options) {
    options = options || {};
    var start = new Date();
    var result;
    if(brukerFiles['ser'] || brukerFiles['2rr']) {
        result =  convert2D(brukerFiles, options);
    } else if(brukerFiles['1r'] || brukerFiles['1i'] || brukerFiles['fid']) {
        result =   convert1D(brukerFiles, options);
    } else {
        throw new RangeError('The current files are invalid');
    }

    if (result.twoD && !options.noContours) {
        //console.log("Countours");
        add2D(result);
        if (result.profiling) result.profiling.push({
            action: 'Finished countour plot calculation',
            time: new Date() - start
        });
        if (!options.keepSpectra) {
            delete result.spectra;
        }
    }

    var spectra = result.spectra;
    if (options.xy) { // the spectraData should not be a oneD array but an object with x and y
        if (spectra.length > 0) {
            for (var i=0; i<spectra.length; i++) {
                var spectrum=spectra[i];
                if (spectrum.data.length>0) {
                    for (var j=0; j<spectrum.data.length; j++) {
                        var data=spectrum.data[j];
                        var newData={x: new Array(data.length/2), y:new Array(data.length/2)};
                        for (var k=0; k<data.length; k=k+2) {
                            newData.x[k/2]=data[k];
                            newData.y[k/2]=data[k+1];
                        }
                        spectrum.data[j]=newData;
                    }

                }
            }
        }
    }

    return result;
}

function convert1D(files, options) {
    var result = parseData(files["procs"], options);
    var temp = parseData(files['acqus'], options);

    var keys = Object.keys(temp.info);
    for (var i = 0; i < keys.length; i++) {
        var currKey = keys[i];
        if(result.info[currKey] === undefined) {
            result.info[currKey] = temp.info[currKey];
        }
    }

    if(files['1r'] || files['1i']) {
        if(files['1r']) {
            setXYSpectrumData(files['1r'], result, '1r', true);
        }
        if(files['1i']) {
            setXYSpectrumData(files['1i'], result, '1i', false);
        }
    } else if(files['fid']) {
        setFIDSpectrumData(files['fid'], result)
    }
    
    return result;
}

function convert2D(files, options) {
    var SF,SW_p,SW,offset;
    if(files['2rr']) {
        var result = parseData(files['procs'], options);
        var temp = parseData(files['acqus'], options);

        var keys = Object.keys(temp.info);
        for (var i = 0; i < keys.length; i++) {
            var currKey = keys[i];
            if(result.info[currKey] === undefined) {
                result.info[currKey] = temp.info[currKey];
            }
        }
        
        temp = parseData(files['proc2s'], options);
        result.info.nbSubSpectra = temp.info['$SI'] = parseInt(temp.info['$SI']);
        SF = temp.info['$SF'] = parseFloat(temp.info['$SF']);
        SW_p = temp.info['$SWP'] = parseFloat(temp.info['$SWP']);
        offset = temp.info['$OFFSET'] = parseFloat(temp.info['$OFFSET']);

    } else if(files['ser']) {
        result = parseData(files['acqus'], options);
        temp = parseData(files['acqu2s'], options);
        result.info.nbSubSpectra = temp.info['$SI'] = parseInt(temp.info['$TD']);
        result.info['$SI'] = parseInt(result.info['$TD']);
        //SW_p = temp.info['$SWH'] = parseFloat(temp.info['$SWH']);

        SW_p = temp.info["$SW"];

        result.info["$SWP"]=result.info["$SWH"];
        result.info["$SF"]=parseFloat(temp.info['$SFO1']);
        result.info['$OFFSET']=0;
        SF = temp.info['$SFO1'] = parseFloat(temp.info['$SFO1']);
        SF = 1;
        offset=0;
        result.info['$AXNUC']=result.info['$NUC1'];
        temp.info['$AXNUC']=temp.info['$NUC1'];
    }

    result.info.firstY = offset;
    result.info.lastY = offset - SW_p / SF;
    result.info['$BF2'] = SF;
    result.info['$SFO1'] = SF;

    var nbSubSpectra = result.info.nbSubSpectra;
    var pageValue = result.info.firstY;
    var deltaY = (result.info.lastY-result.info.firstY)/(nbSubSpectra-1);

    if(files['2rr']) {
        setXYSpectrumData(files['2rr'], result, '2rr', true);
    } else if(files['ser']) {
        setFIDSpectrumData(files['ser'], result, 'ser', true);
    }

    for(var i = 0; i < nbSubSpectra; i++) {
        pageValue+=deltaY;
        result.spectra[i].pageValue=pageValue;
    }

    var dataType = files['ser'] ? 'TYPE_2DNMR_FID' : 'TYPE_2DNMR_SPECTRUM';

    result.info['2D_Y_NUCLEUS'] = temp.info['$AXNUC'];
    result.info['2D_X_NUCLEUS'] = result.info['$AXNUC'];
    result.info['2D_Y_FRECUENCY'] = SF;
    result.info['2D_Y_OFFSET'] = offset;
    result.info['2D_X_FRECUENCY'] = result.info['$SF'];
    result.info['2D_X_OFFSET'] = result.info['$OFFSET'];

    result.twoD = true;

    return result;
}

function setXYSpectrumData(file, spectra, store, real) {
    var td = spectra.info['$SI'] = parseInt(spectra.info['$SI']);

    var SW_p = parseFloat(spectra.info["$SWP"]);
    var SF = parseFloat(spectra.info["$SF"]);
    var BF = SF;
    //var BF = parseFloat(spectra.info["$BF1"]);
    var offset = spectra.shiftOffsetVal;//parseFloat(spectra.info["$OFFSET"]);

    spectra.info["observeFrequency"] = SF;
    spectra.info["$BF1"] = BF;
    spectra.info["$SFO1"] = SF;
    spectra.info.brukerReference = BF;

    var endian = parseInt(spectra.info["$BYTORDP"]);
    endian = endian ? 0 : 1;

    // number of spectras
    var nbSubSpectra = spectra.info.nbSubSpectra ? spectra.info.nbSubSpectra : 1;

    if(endian)
        file.setLittleEndian();
    else
        file.setBigEndian();

    for(var i = 0; i < nbSubSpectra; i++) {
        var toSave = {
            dataType : "NMR Spectrum",
            dataTable : "(X++(R..R))",
            nbPoints : td,
            firstX : offset,
            lastX : offset - SW_p / SF,
            xUnit : "PPM",
            yUnit : "Arbitrary",
            data:[new Array(td*2)],//[{x:new Array(td),y:new Array(td)}],
            isXYdata:true,
            observeFrequency:SF,
            title:spectra.info['TITLE'],
            deltaX:-(SW_p / SF)/(td-1)

        };

        var x = offset;
        var deltaX = toSave.deltaX;
        if(real) {
            for(var k = 0; k < td; ++k) {
                toSave.data[0][2*k] = x;
                toSave.data[0][2*k+1] = file.readInt32();
                if(toSave.data[0][2*k+1]===null||isNaN(toSave.data[0][2*k+1])){
                    toSave.data[0][2*k+1] = 0;
                }
                x += deltaX;
            }
        } else {
            for(k = td - 1; k >= 0; --k) {
                toSave.data[0][2*k] = x;
                toSave.data[0][2*k+1] = file.readInt32();
                if(toSave.data[0][2*k+1]===null||isNaN(toSave.data[0][2*k+1])) {
                    toSave.data[0][2*k+1] = 0;
                }
                x += deltaX;
            }
        }

        spectra.spectra.push(toSave);
    }
}

function parseData(file, options) {
    var keepRecordsRegExp=/.*/;
    if (options.keepRecordsRegExp) keepRecordsRegExp=options.keepRecordsRegExp;
    return Converter.convert(file, {
        keepRecordsRegExp:keepRecordsRegExp
    });
}

function setFIDSpectrumData(file, spectra) {
    var td = spectra.info['$TD'] = parseInt(spectra.info['$TD']);

    var SW_h = spectra.info['$SWH'] = parseFloat(spectra.info['$SWH']);
    var SW = spectra.info['$SW'] = parseFloat(spectra.info['$SW']);

    var SF = spectra.info['$SFO1'] = parseFloat(spectra.info['$SFO1']);
    var BF =  parseFloat(spectra.info['$BF1']);
    spectra.info['$BF1'] = BF;

    //var DW = 1 / (2 * SW_h);
    //var AQ = td * DW;
    var AQ = SW;
    var DW = AQ/(td-1);

    //console.log(DW+" "+SW+" "+td);
    var endian = parseInt(spectra.info["$BYTORDP"]);
    endian = endian ? 0 : 1;

    if(endian)
        file.setLittleEndian();
    else
        file.setBigEndian();

    var nbSubSpectra = spectra.info.nbSubSpectra ? spectra.info.nbSubSpectra : 1;
    spectra.spectra = new Array(nbSubSpectra);
    
    for(var j = 0; j < nbSubSpectra/2; j++) {
        var toSave = {
            dataType : "NMR FID",
            dataTable : "(X++(R..R))",
            nbPoints : td,
            firstX : 0,
            lastX : AQ,
            nucleus : spectra.info["$NUC1"] ? spectra.info["$NUC1"] : undefined,
            xUnit : "Sec",
            yUnit : "Arbitrary",
            data:[new Array(2*td)],//[{x:new Array(td),y:new Array(td)}],
            isXYdata:true,
            observeFrequency:SF,
            title:spectra.info['TITLE'],
            deltaX:DW
        };
        spectra.spectra[j*2] = toSave;

        toSave = {
            dataType : "NMR FID",
            dataTable : "(X++(I..I))",
            nbPoints : td,
            firstX : 0,
            lastX : AQ,
            nucleus : spectra.info["$NUC1"] ? spectra.info["$NUC1"] : undefined,
            xUnit : "Sec",
            yUnit : "Arbitrary",
            data:[new Array(2*td)],//[{x:new Array(td),y:new Array(td)}],
            isXYdata:true,
            observeFrequency:SF,
            title:spectra.info['TITLE'],
            deltaX:DW
        };
        spectra.spectra[j*2+1] = toSave;
        
        var x = 0;
        var y;
        for(var i = 0; file.available(8)&&i<td; i++, x = i*DW) {
            y = file.readInt32();
            if(y===null || isNaN(y)){
                y=0;
            }
            spectra.spectra[j*2].data[0][2*i+1] = y;
            spectra.spectra[j*2].data[0][2*i] = x;
            y = file.readInt32();
            if(y===null || isNaN(y)){
                y=0;
            }
            spectra.spectra[j*2+1].data[0][2*i+1] = y;
            spectra.spectra[j*2+1].data[0][2*i] = x;

        }

        for(; i < td; i++, x = i*DW) {
            spectra.spectra[j*2].data[0][2*i+1] = 0;
            spectra.spectra[j*2].data[0][2*i] = x;
            spectra.spectra[j*2+1].data[0][2*i+1] = 0;
            spectra.spectra[j*2+1].data[0][2*i] = x;
        }
    }
}

/**
 * Those functions should disappear if add2D becomes accessible in jcampconvert
 * @param spectra
 * @returns {{z: Array, minX: *, maxX: *, minY: *, maxY: *, minZ: *, maxZ: *, noise: number}}
 */

function convertTo3DZ(spectra) {
    var noise = 0;
    var minZ = spectra[0].data[0][0];
    var maxZ = minZ;
    var ySize = spectra.length;
    var xSize = spectra[0].data[0].length / 2;
    var z = new Array(ySize);
    for (var i = 0; i < ySize; i++) {
        z[i] = new Array(xSize);
        for (var j = 0; j < xSize; j++) {
            z[i][j] = spectra[i].data[0][j * 2 + 1];
            if (z[i][j] < minZ) minZ = spectra[i].data[0][j * 2 + 1];
            if (z[i][j] > maxZ) maxZ = spectra[i].data[0][j * 2 + 1];
            if (i !== 0 && j !== 0) {
                noise += Math.abs(z[i][j] - z[i][j - 1]) + Math.abs(z[i][j] - z[i - 1][j]);
            }
        }
    }
    return {
        z: z,
        minX: spectra[0].data[0][0],
        maxX: spectra[0].data[0][spectra[0].data[0].length - 2],
        minY: spectra[0].pageValue,
        maxY: spectra[ySize - 1].pageValue,
        minZ: minZ,
        maxZ: maxZ,
        noise: noise / ((ySize - 1) * (xSize - 1) * 2)
    };

}

function add2D(result) {
    var zData = convertTo3DZ(result.spectra);
    result.contourLines = generateContourLines(zData);
    delete zData.z;
    result.minMax = zData;
}


function generateContourLines(zData, options) {
    //console.time('generateContourLines');
    var noise = zData.noise;
    var z = zData.z;
    var contourLevels = [];
    var nbLevels = 7;
    var povarHeight = new Float32Array(4);
    var isOver = [];
    var nbSubSpectra = z.length;
    var nbPovars = z[0].length;
    var pAx, pAy, pBx, pBy;

    var x0 = zData.minX;
    var xN = zData.maxX;
    var dx = (xN - x0) / (nbPovars - 1);
    var y0 = zData.minY;
    var yN = zData.maxY;
    var dy = (yN - y0) / (nbSubSpectra - 1);
    var minZ = zData.minZ;
    var maxZ = zData.maxZ;

    //System.out.prvarln('y0 '+y0+' yN '+yN);
    // -------------------------
    // Povars attribution
    //
    // 0----1
    // |  / |
    // | /  |
    // 2----3
    //
    // ---------------------d------

    var lineZValue;
    for (var level = 0; level < nbLevels * 2; level++) { // multiply by 2 for positif and negatif
        var contourLevel = {};
        contourLevels.push(contourLevel);
        var side = level % 2;
        if (side === 0) {
            lineZValue = (maxZ - 5 * noise) * Math.exp(level / 2 - nbLevels) + 5 * noise;
        } else {
            lineZValue = -(maxZ - 5 * noise) * Math.exp(level / 2 - nbLevels) - 5 * noise;
        }
        var lines = [];
        contourLevel.zValue = lineZValue;
        contourLevel.lines = lines;

        if (lineZValue <= minZ || lineZValue >= maxZ) continue;

        for (var iSubSpectra = 0; iSubSpectra < nbSubSpectra - 1; iSubSpectra++) {
            for (var povar = 0; povar < nbPovars - 1; povar++) {
                povarHeight[0] = z[iSubSpectra][povar];
                povarHeight[1] = z[iSubSpectra][povar + 1];
                povarHeight[2] = z[(iSubSpectra + 1)][povar];
                povarHeight[3] = z[(iSubSpectra + 1)][(povar + 1)];

                for (var i = 0; i < 4; i++) {
                    isOver[i] = (povarHeight[i] > lineZValue);
                }

                // Example povar0 is over the plane and povar1 and
                // povar2 are below, we find the varersections and add
                // the segment
                if (isOver[0] !== isOver[1] && isOver[0] !== isOver[2]) {
                    pAx = povar + (lineZValue - povarHeight[0]) / (povarHeight[1] - povarHeight[0]);
                    pAy = iSubSpectra;
                    pBx = povar;
                    pBy = iSubSpectra + (lineZValue - povarHeight[0]) / (povarHeight[2] - povarHeight[0]);
                    lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
                }
                if (isOver[3] !== isOver[1] && isOver[3] !== isOver[2]) {
                    pAx = povar + 1;
                    pAy = iSubSpectra + 1 - (lineZValue - povarHeight[3]) / (povarHeight[1] - povarHeight[3]);
                    pBx = povar + 1 - (lineZValue - povarHeight[3]) / (povarHeight[2] - povarHeight[3]);
                    pBy = iSubSpectra + 1;
                    lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
                }
                // test around the diagonal
                if (isOver[1] !== isOver[2]) {
                    pAx = povar + 1 - (lineZValue - povarHeight[1]) / (povarHeight[2] - povarHeight[1]);
                    pAy = iSubSpectra + (lineZValue - povarHeight[1]) / (povarHeight[2] - povarHeight[1]);
                    if (isOver[1] !== isOver[0]) {
                        pBx = povar + 1 - (lineZValue - povarHeight[1]) / (povarHeight[0] - povarHeight[1]);
                        pBy = iSubSpectra;
                        lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
                    }
                    if (isOver[2] !== isOver[0]) {
                        pBx = povar;
                        pBy = iSubSpectra + 1 - (lineZValue - povarHeight[2]) / (povarHeight[0] - povarHeight[2]);
                        lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
                    }
                    if (isOver[1] !== isOver[3]) {
                        pBx = povar + 1;
                        pBy = iSubSpectra + (lineZValue - povarHeight[1]) / (povarHeight[3] - povarHeight[1]);
                        lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
                    }
                    if (isOver[2] !== isOver[3]) {
                        pBx = povar + (lineZValue - povarHeight[2]) / (povarHeight[3] - povarHeight[2]);
                        pBy = iSubSpectra + 1;
                        lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
                    }
                }
            }
        }
    }
    // console.timeEnd('generateContourLines');
    return {
        minX: zData.minX,
        maxX: zData.maxX,
        minY: zData.minY,
        maxY: zData.maxY,
        segments: contourLevels
    };
    //return contourLevels;
}


module.exports =  {
    convertZip: readZIP,
    converFolder: convert
};