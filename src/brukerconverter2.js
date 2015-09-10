"use strict";

module.exports = {
    convert: convert,
    parseData: parseData
};

function convert(brukerFiles) {
    if(brukerFiles['ser'] || brukerFiles['2rr']) {
        return convert2D(brukerFiles);
    } else if(brukerFiles['1r'] || brukerFiles['1i'] || brukerFiles['fid']) {
        return convert1D(brukerFiles);
    } else {
        throw new RangeError('The current files are invalid');
    }
}

function parseData(file, options) {
    options = options || {};
    var start = new Date();

    var ntuples = {},
        ldr,
        dataLabel,
        dataValue,
        ldrs,
        i, ii, position, endLine, infos;

    var result = {};
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

    for (i = 0, ii = ldrs.length; i < ii; i++) {
        ldr = ldrs[i];
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

function convert2D(files) {

}

function convert1D(files) {
    var outSpectra
}