"use strict";

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
        var result = parseData(files['procs']);
        if(files['1r']) {
            setXYSpectrumData(files['1r'], result, '1r', true);
        }
        if(files['1r']) {
            setXYSpectrumData(files['1i'], result, '1i', false);
        }
    } else if(files['fid']) {
        result = parseData(files['pdata/1/procs']);
        parseData(files['acqus'], result);
        setFIDSpectrumData(files['fid'], result, true)
    }
    return result;
}

function convert2D(files) {
    var result = {};
    var temp = {};
    if(files['ser']) {
        parseData(files['ser'], result);
        parseData(files['acqu2s'], temp);
    } else if(files['2rr']) {
        parseData(files['2rr'], result);
        parseData(files['proc2s'], temp);
    }

    var nbSubSpectra = temp['$SI'] = parseInt(temp['$SI']);
    var SW_p = temp['$SWp'] = parseFloat(temp['$SWp']);
    var SF = temp['$SF'] = parseFloat(temp['$SF']);
    var offset = temp['$OFFSET'] = parseFloat(temp['$OFFSET']);

    result.firstY = offset;
    result.lastY = offset - SW_p/SF;
    result['$BF2'] = SF;
    result['$SF01'] = SF;

    if(files['ser']) {
        setXYSpectrumData(files['ser'], result, 'ser', true);
        result.setYUnits = 'HZ';
        result.dataType = 'TYPE_2DNMR_FID';
    } else if(files['2rr']) {
        setXYSpectrumData(files['2rr'], result, '2rr', true);
        result.setYUnits = 'PPM';
        result.dataType = 'TYPE_2DNMR_SPECTRUM';
    }

    for(var i = 0; i < nbSubSpectra; ++i) {
        // TODO: go through all 2xx spectra?
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
    spectra[store] = new Array(td);

    var read;
    if(endian) {
        read = function (index) {
            return file.readInt32LE(index * 4, 4);
        };
    } else {
        read = function (index) {
            return file.readInt32BE(index * 4, 4);
        };
    }

    if(real) {
        for(var i = 0; i < td - 1; ++i) {
            spectra[store][i] = read(i);
        }
    } else {
        for(i = td - 1; i > 0; --i) {
            spectra[store][i] = read(i);
        }
    }
}

function parseData(file, currentResult, options) {
    options = options || {};
    var start = new Date();

    var ntuples = {},
        ldr,
        dataLabel,
        dataValue,
        ldrs,
        i, ii, position, endLine, infos;

    var result = currentResult ? currentResult : {};
    result.profiling = [];
    result.logs = [];
    var spectra = [];
    result.spectra = spectra;
    result.info = {};
    var spectrum = {};

    if (!(typeof file == "string")) return result;
    // console.time("start");

    if (result.profiling) result.profiling.push({action: "Before split to LDRS", time: new Date() - start});

    ldrs = file.split(/[\r\n]+##/);

    if (result.profiling) result.profiling.push({action: "Split to LDRS", time: new Date() - start});

    if (ldrs[0]) ldrs[0] = ldrs[0].replace(/^[\r\n ]*##/, "");
    //console.log(ldrs);

    for (i = 0, ii = ldrs.length; i < ii; i++) {
        ldr = ldrs[i];
        if(ldr.substr(0, 2) === '$$') {
            continue;
        }
        // This is a new LDR
        position = ldr.indexOf("=");
        if (position > 0) {
            dataLabel = ldr.substring(0, position);
            dataValue = ldr.substring(position + 1).trim();
        } else {
            dataLabel = ldr;
            dataValue = "";
        }
        dataLabel = dataLabel.replace(/[_ -]/g, '').toUpperCase();
        result[dataLabel] = dataValue;
    }

    return result;
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

