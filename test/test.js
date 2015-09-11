"use strict";

var convert = require("..");
var fs = require('fs');

describe("Bruker converter test", function () {
    it("Convert1D", function () {
        var bruker = {};
        bruker['procs'] = fs.readFileSync('/home/jefferson/WebstormProjects/brukerconverter/test/procs', 'utf8');
        bruker['1r'] = fs.readFileSync('/home/jefferson/WebstormProjects/brukerconverter/test/1r');
        bruker['1i'] = fs.readFileSync('/home/jefferson/WebstormProjects/brukerconverter/test/1i');

        var result = convert(bruker);

        //fs.closeSync(bruker['procs']);
        //fs.closeSync(bruker['1r']);
        //fs.closeSync(bruker['1i']);

        result['1r'].length.should.be.equal(result['$SI']);
        result['1i'].length.should.be.equal(result['$SI']);
        result.should.have.properties([
            'JCAMPDX',
            'TITLE',
            'NPOINTS',
            'ORIGIN',
            'OWNER'
        ]);
        result.JCAMPDX.should.be.equal('5.0');
    });
});