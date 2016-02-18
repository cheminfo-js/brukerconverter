"use strict";

var convert = require("..").test;
var fs = require('fs');
var Buffer = require("iobuffer").InputBuffer;
var JSZip = require("jszip");
var convertZIP = require("..");

describe("Bruker converter test", function () {
    describe("Convert 1D", function() {

        it("Main test", function () {
            var bruker = {};
            bruker['procs'] = fs.readFileSync('test/1D/procs', 'utf8');
            bruker['1r'] = new Buffer(fs.readFileSync('test/1D/1r'));
            bruker['1i'] = new Buffer(fs.readFileSync('test/1D/1i'));
            var result = convert(bruker);

            result.spectra[0].Y.length.should.be.equal(result.info['$SI']);
            result.spectra[1].Y.length.should.be.equal(result.info['$SI']);
            result.info.should.have.properties([
                'JCAMPDX',
                'ORIGIN',
                'OWNER'
            ]);
            result.info.JCAMPDX.should.be.equal('5.0');
            // TODO: check X values
        });

        it("FID spectra", function () {
            var bruker = {};
            bruker['procs'] = fs.readFileSync('test/1D/pdata/1/procs', 'utf8');
            bruker['acqus'] = fs.readFileSync('test/1D/acqus', 'utf8');
            bruker['fid'] = new Buffer(fs.readFileSync('test/1D/fid'));

            var result = convert(bruker);

            result.spectra.length.should.be.equal(2);
            result.info.should.have.properties([
                'JCAMPDX',
                'ORIGIN',
                'OWNER'
            ]);

            var len = result.spectra[0].NbPoints;

            result.spectra[0].Y[len - 1].should.be.a.NUMBER;
            result.spectra[1].Y[len - 1].should.be.a.NUMBER;
            result.spectra[0].should.have.properties([
                'DataType',
                'DataClass',
                'XUnits',
                'YUnits',
                'X',
                'Y',
                'NbPoints',
                'Nucleus',
                'FirstX',
                'LastX'
            ]);
        });
    });


    describe("Convert 2D", function() {
        var bruker = {};
        it("Test with 2rr", function() {
            bruker['procs'] = fs.readFileSync('test/2D/procs', 'utf8');
            bruker['proc2s'] = fs.readFileSync('test/2D/proc2s', 'utf8');
            bruker['acqus'] = fs.readFileSync('test/2D/acqus', 'utf8');
            bruker['acqu2s'] = fs.readFileSync('test/2D/acqu2s', 'utf8');
            bruker['ser'] = new Buffer(fs.readFileSync('test/2D/ser'));
            bruker['2rr'] = new Buffer(fs.readFileSync('test/2D/2rr'));

            var result = convert(bruker);

            result.spectra.length.should.be.equal(result.info.nbSubSpectra);
            result.spectra[1023].Y.length.should.be.equal(result.info["$SI"]);
            result.spectra[1023].Y[4].should.be.a.Number;

            result.info.should.have.properties([
                'JCAMPDX',
                'ORIGIN',
                'OWNER'
            ]);

            result.spectra[1023].should.have.properties([
                'DataType',
                'DataClass',
                'FirstX',
                'LastX',
                'XUnits',
                'YUnits',
                'X',
                'Y'
            ]);
        });
    });

    describe('Test with zip file', function() {
        it('Main test', function () {
            var zip  = fs.readFileSync("test/zip/hrva034.zip");
            var result = convertZIP(zip);
            result.length.should.be.equal(5);
        });
    });
});