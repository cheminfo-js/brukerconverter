"use strict";

var Converter = require("jcampconverter");
var Buffer = require("iobuffer").InputBuffer;

module.exports = convert;

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
        // TODO: check update result
        result = parseData(files['pdata/1/procs']);
        result = parseData(files['acqus']);
        setFIDSpectrumData(files['fid'], result, true)
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

    result.nbSubSpectra = temp['$SI'] = parseInt(temp['$SI']);
    var SW_p = temp['$SWP'] = parseFloat(temp['$SWP']);
    var SF = temp['$SF'] = parseFloat(temp['$SF']);
    var offset = temp['$OFFSET'] = parseFloat(temp['$OFFSET']);

    result.firstY = offset;
    result.lastY = offset - SW_p / SF;
    result['$BF2'] = SF;
    result['$SF01'] = SF;

    if(files['2rr']) {
        setXYSpectrumData(files['2rr'], result, '2rr', true);
        result.setYUnits = 'PPM';
        result.dataType = 'TYPE_2DNMR_SPECTRUM';
    } else if(files['ser']) {
        setXYSpectrumData(files['ser'], result, 'ser', true);
        result.setYUnits = 'HZ';
        result.dataType = 'TYPE_2DNMR_FID';
    }

    // TODO: set active spectra?
    result['2D_Y_NUCLEUS'] = temp['$AXNUC'];
    result['2D_X_NUCLEUS'] = result['$AXNUC'];
    result['2D_Y_FRECUENCY'] = SF;
    result['2D_Y_OFFSET'] = offset;
    result['2D_X_FRECUENCY'] = result['$SF'];
    result['2D_X_OFFSET'] = result['$OFFSET'];

    return result;
}

function setXYSpectrumData(file, spectra, store, real) {
    var td = spectra['$SI'] = parseInt(spectra['$SI']);

    spectra.dataType = "TYPE_NMR_SPECTRUM";
    spectra.dataClass = "DATACLASS_XY";

    var SW_p = parseFloat(file["$SWp"]);
    var SF = parseFloat(file["$SF"]);
    var BF = parseFloat(file["$BF1"]);
    var offset = parseFloat(file["$OFFSET"]);

    spectra.firstX = offset;
    spectra.lastX = offset - SW_p / SF;

    spectra["observeFrequency"] = SF;
    spectra["$BF1"] = BF;
    spectra["$SF01"] = SF;
    spectra.brukerReference = BF;

    var endian = parseInt(spectra["$BYTORDP"]);
    endian = endian ? 0 : 1;
    spectra.XUnits = "PPM";
    spectra.YUnits = "Arbitrary";

    // number of spectras
    var nbSubSpectra = spectra.nbSubSpectra ? spectra.nbSubSpectra : 1;

    if(endian)
        file.setLittleEndian();
    else
        file.setBigEndian();

    spectra["data" + store] = new Array(nbSubSpectra);
    for(var i = 0; i < nbSubSpectra; ++i) {
        var currentSpectra = i * td;
        var limit = currentSpectra + td - 1;
        spectra["data" + store][i] = new Array(td);
        if(real) {
            for(var j = currentSpectra, k = 0; j < limit; ++j, ++k) {
                spectra["data" + store][i][k] = file.readInt32();
            }
        } else {
            for(j = limit, k = 0; j > currentSpectra; --j, ++k) {
                spectra["data" + store][i][k] = file.readInt32();
            }
        }
    }

    if(nbSubSpectra === 1) {
        spectra["data" + store] = spectra["data" + store][0];
    }
}

function parseData(file) {
    return Converter.convert(file, {
        keepRecordsRegExp:/.*/
    }).info;
}

function setFIDSpectrumData(file, spectra, real) {
    var td = spectra['$TD'] = parseInt(spectra['$TD']);
    var SW_p = spectra['$SWP'] = parseFloat(spectra['$SWP']);
    if(SW_p !== 0) {
        spectra['$SWH'] = SW_p;
    }
    var SW_h = spectra['$SWH'] = parseFloat(spectra['$SWH']);

    var SF = spectra['$SF01'] = parseFloat(spectra['$SF01']);
    var BF = spectra['$BF1'] = parseFloat(spectra['$BF1']);

    spectra['$SF'] = parseFloat(spectra['$SF']);
    if(spectra['$SF'] !== 0) {
        BF = spectra['$SF'];
    }

    var DW = 1 / (2 * SW_h);
    var AQ = td * DW;

    var endian = parseInt(spectra["$BYTORDP"]);
    endian = endian ? 0 : 1;

    // TODO: which two spectras I have to read?
}