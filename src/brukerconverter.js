"use strict";

var Converter = require("jcampconverter");
var Buffer = require("iobuffer").InputBuffer;
var JSZip = require("jszip");

// constants
var BINARY = 1;
var TEXT = 2;

module.exports =  {
    convert: readZIP,
    test: convert
};

function readZIP(zipFile, options) {
    var zip = new JSZip();
    zip.load(zipFile, options);

    var files = {
        'ser': BINARY,
        'fid': BINARY,
        'acqus': TEXT,
        'acqu2s': TEXT,
        'pdata/1/procs': TEXT,
        'pdata/1/proc2s': TEXT,
        'pdata/1/1r': BINARY,
        'pdata/1/1i': BINARY,
        'pdata/1/2rr': BINARY
    };

    var folders = zip.filter(function (relativePath, file) {
        if(/^\d+$/.test(relativePath.substr(0, relativePath.length - 1)))
            return true
    });

    var spectra = new Array(folders.length);

    for(var i = 0; i < folders.length; ++i) {
        var len = folders[i].name.length;
        var currFolder = zip.folder(folders[i].name.substr(0, len - 1));
        var currFiles = currFolder.filter(function (relativePath, file) {
            return files[relativePath] ? true : false;
        });

        var brukerFiles = {};

        for(var j = 0; j < currFiles.length; ++j) {
            var idx = currFiles[j].name.lastIndexOf('/');
            var name = currFiles[j].name.substr(idx + 1);
            if(files[name] === BINARY || files['pdata/1/' + name] === BINARY) {
                brukerFiles[name] = new Buffer(currFiles[j].asArrayBuffer());
            } else {
                brukerFiles[name] = currFiles[j].asText();
            }
        }

        spectra[i] = convert(brukerFiles);
    }

    return spectra;
}

function convert(brukerFiles) {
    if(brukerFiles['ser'] || brukerFiles['2rr']) {
        return convert2D(brukerFiles);
    } else if(brukerFiles['1r'] || brukerFiles['1i'] || brukerFiles['fid']) {
        return convert1D(brukerFiles);
    } else {
        throw new RangeError('The current files are invalid');
    }
}

function convert1D(files) {
    if(files['1r'] || files['1i']) {
        var result = parseData(files["procs"]);

        if(files['1r']) {
            setXYSpectrumData(files['1r'], result, '1r', true);
        }
        if(files['1i']) {
            setXYSpectrumData(files['1i'], result, '1i', false);
        }
    } else if(files['fid']) {
        result = parseData(files['procs']);
        var temp = parseData(files['acqus']);

        var keys = Object.keys(temp.info);
        for (var i = 0; i < keys.length; i++) {
            var currKey = keys[i];
            if(result.info[currKey] === undefined) {
                result.info[currKey] = temp.info[currKey];
            }
        }

        setFIDSpectrumData(files['fid'], result)
    }
    return result;
}

function convert2D(files) {
    if(files['2rr']) {
        var result = parseData(files['procs']);
        var temp = parseData(files['proc2s']);
    } else if(files['ser']) {
        result = parseData(files['acqus']);
        temp = parseData(files['acqu2s']);
    }

    result.info.nbSubSpectra = temp.info['$SI'] = parseInt(temp.info['$SI']);
    var SW_p = temp.info['$SWP'] = parseFloat(temp.info['$SWP']);
    var SF = temp.info['$SF'] = parseFloat(temp.info['$SF']);
    var offset = temp.info['$OFFSET'] = parseFloat(temp.info['$OFFSET']);

    result.info.firstY = offset;
    result.info.lastY = offset - SW_p / SF;
    result.info['$BF2'] = SF;
    result.info['$SF01'] = SF;

    if(files['2rr']) {
        setXYSpectrumData(files['2rr'], result, '2rr', true);
        result.spectra[0].setYUnits = 'PPM';
    } else if(files['ser']) {
        setXYSpectrumData(files['ser'], result, 'ser', true);
        result.spectra[0].setYUnits = 'HZ';
    }

    var dataType = files['ser'] ? 'TYPE_2DNMR_FID' : 'TYPE_2DNMR_SPECTRUM';
    for(var i = 0; i < result.spectra.length; ++i) {
        result.spectra[i].DataType = dataType;
    }

    result.info['2D_Y_NUCLEUS'] = temp.info['$AXNUC'];
    result.info['2D_X_NUCLEUS'] = result.info['$AXNUC'];
    result.info['2D_Y_FRECUENCY'] = SF;
    result.info['2D_Y_OFFSET'] = offset;
    result.info['2D_X_FRECUENCY'] = result.info['$SF'];
    result.info['2D_X_OFFSET'] = result.info['$OFFSET'];

    return result;
}

function setXYSpectrumData(file, spectra, store, real) {
    var td = spectra.info['$SI'] = parseInt(spectra.info['$SI']);

    var SW_p = parseFloat(spectra.info["$SWP"]);
    var SF = parseFloat(spectra.info["$SF"]);
    var BF = parseFloat(spectra.info["$BF1"]);
    var offset = spectra.shiftOffsetVal;//parseFloat(spectra.info["$OFFSET"]);

    spectra.info["observeFrequency"] = SF;
    spectra.info["$BF1"] = BF;
    spectra.info["$SF01"] = SF;
    spectra.info.brukerReference = BF;

    var endian = parseInt(spectra.info["$BYTORDP"]);
    endian = endian ? 0 : 1;

    // number of spectras
    var nbSubSpectra = spectra.info.nbSubSpectra ? spectra.info.nbSubSpectra : 1;

    //console.log(file);
    //console.log("");

    if(endian)
        file.setLittleEndian();
    else
        file.setBigEndian();

    //spectra.spectra = new Array(nbSubSpectra);
    for(var i = 0; i < nbSubSpectra; ++i) {
        var toSave = {
            DataType : "TYPE_NMR_SPECTRUM",
            DataClass : "DATACLASS_XY",
            FirstX : offset,
            LastX : offset - SW_p / SF,
            XUnits : "PPM",
            YUnits : "Arbitrary",
            X : new Array(td),
            Y : new Array(td)
        };

        var x = offset;
        if(real) {
            for(var k = 0; k < td - 1; ++k) {
                toSave.X[k] = x;
                toSave.Y[k] = file.readInt32();
                x += SF;
            }
        } else {
            for(k = td - 1; k > 0; --k) {
                toSave.X[k] = x;
                toSave.Y[k] = file.readInt32();
                x += SF;
            }
        }
        spectra.spectra.push(toSave);
    }
}

function parseData(file) {
    return Converter.convert(file, {
        keepRecordsRegExp:/.*/
    });
}

function setFIDSpectrumData(file, spectra) {
    var td = spectra.info['$TD'] = parseInt(spectra.info['$TD']);
    var SW_p = spectra.info['$SWP'] = parseFloat(spectra.info['$SWP']);
    if(SW_p !== 0) {
        spectra.info['$SWH'] = SW_p;
    }
    var SW_h = spectra.info['$SWH'] = parseFloat(spectra.info['$SWH']);

    var SF = spectra.info['$SF01'] = parseFloat(spectra.info['$SF01']);
    var BF = spectra.info['$BF1'] = parseFloat(spectra.info['$BF1']);

    spectra.info['$SF'] = parseFloat(spectra.info['$SF']);
    if(spectra.info['$SF'] !== 0) {
        BF = spectra.info['$SF'];
    }

    var DW = 1 / (2 * SW_h);
    var AQ = td * DW;

    var endian = parseInt(spectra.info["$BYTORDP"]);
    endian = endian ? 0 : 1;

    if(endian)
        file.setLittleEndian();
    else
        file.setBigEndian();

    for(var i = 0; i < 2; ++i) {
        var toSave = {
            DataType : "TYPE_NMR_FID",
            DataClass : "DATACLASS_XY",
            NbPoints : td,
            FirstX : 0,
            LastX : AQ,
            Nucleus : spectra.info["$NUC1"] ? spectra.info["$NUC1"] : undefined,
            XUnits : "Hz",
            YUnits : "Arbitrary",
            X : new Array(td),
            Y : new Array(td)
        };
        spectra.spectra.push(toSave);
    }

    var x = 0;

    for(i = 0; file.available(8); ++i, x += DW) {
        spectra.spectra[0].Y[i] = file.readInt32();
        spectra.spectra[0].X[i] = x;
        spectra.spectra[1].Y[i] = file.readInt32();
        spectra.spectra[1].X[i] = x;
    }

    for(; i < td; ++i, x += DW) {
        spectra.spectra[0].Y[i] = 0;
        spectra.spectra[0].X[i] = x;
        spectra.spectra[1].Y[i] = 0;
        spectra.spectra[1].X[i] = x;
    }
}