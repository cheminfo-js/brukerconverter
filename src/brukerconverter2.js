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
        setXYSpectrumData(files['fid'], result, 'fid', true)
    }
    return result;
}

function convert2D(files) {

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
            return file.readInt32LE(index * 4, 4)
        };
    } else {
        read = function (index) {
            return file.readInt32BE(index * 4, 4)
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

