"use strict";

var convert = require("..");
var fs = require('fs');

describe("Bruker converter test", function () {
    describe("Convert 1D", function() {
        var bruker = {};
        it("Main test", function () {
            bruker['procs'] = fs.readFileSync('/home/jefferson/WebstormProjects/brukerconverter/test/1D/procs', 'utf8');
            bruker['1r'] = fs.readFileSync('/home/jefferson/WebstormProjects/brukerconverter/test/1D/1r');
            bruker['1i'] = fs.readFileSync('/home/jefferson/WebstormProjects/brukerconverter/test/1D/1i');

            var result = convert(bruker);

            result['data1r'].length.should.be.equal(result['$SI']);
            result['data1i'].length.should.be.equal(result['$SI']);
            result.should.have.properties([
                'JCAMPDX',
                'TITLE',
                'NPOINTS',
                'ORIGIN',
                'OWNER'
            ]);
            result.JCAMPDX.should.be.equal('5.0');
        });

        it("FID spectra", function () {
            // TODO: check with FID spectra
        });
    });


    describe("Convert2D", function() {
        var bruker = {};
        it("Test with 2rr", function() {
            bruker['procs'] = fs.readFileSync('/home/jefferson/WebstormProjects/brukerconverter/test/2D/procs', 'utf8');
            bruker['proc2s'] = fs.readFileSync('/home/jefferson/WebstormProjects/brukerconverter/test/2D/proc2s', 'utf8');
            bruker['acqus'] = fs.readFileSync('/home/jefferson/WebstormProjects/brukerconverter/test/2D/acqus', 'utf8');
            bruker['acqu2s'] = fs.readFileSync('/home/jefferson/WebstormProjects/brukerconverter/test/2D/acqu2s', 'utf8');
            bruker['ser'] = fs.readFileSync('/home/jefferson/WebstormProjects/brukerconverter/test/2D/ser');
            bruker['2rr'] = fs.readFileSync('/home/jefferson/WebstormProjects/brukerconverter/test/2D/2rr');

            var result = convert(bruker);

            result['data2rr'].length.should.be.equal(result.nbSubSpectra);
            result['data2rr'][0].length.should.be.equal(result["$SI"]);
            result['data2rr'][1023][4].should.be.a.Number;

            result["OWNER"].should.be.equal("nmr");

            result.should.have.properties([
                'JCAMPDX',
                'TITLE',
                'NPOINTS',
                'ORIGIN',
                'OWNER'
            ]);
        });
    });
});