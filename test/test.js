"use strict";

var convert = require("../src/brukerconverter").converFolder;
var fs = require('fs');
const IOBuffer = require('iobuffer');
var JSZip = require("jszip");
var convertZIP = require("../src/brukerconverter").convertZip;

describe("Bruker converter test", function () {
    describe("Convert 1D", function() {

        it("Main test", function () {
            var bruker = {};
            bruker['procs'] = fs.readFileSync('test/1D/procs', 'utf8');
            bruker['1r'] = new IOBuffer(fs.readFileSync('test/1D/1r'));
            bruker['1i'] = new IOBuffer(fs.readFileSync('test/1D/1i'));
            var result = convert(bruker);

            result.spectra[0].data[0].y.length.should.be.equal(result.info['$SI']);
            result.spectra[1].data[0].y.length.should.be.equal(result.info['$SI']);
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
            bruker['fid'] = new IOBuffer(fs.readFileSync('test/1D/fid'));

            var result = convert(bruker);

            result.spectra.length.should.be.equal(2);
            result.info.should.have.properties([
                'JCAMPDX',
                'ORIGIN',
                'OWNER'
            ]);

            var len = result.spectra[0].nbPoints;

            result.spectra[0].data[0].y[len - 1].should.be.a.NUMBER;
            result.spectra[1].data[0].y[len - 1].should.be.a.NUMBER;
            result.spectra[0].should.have.properties([
                'dataType',
                'dataTable',
                'xUnit',
                'yUnit',
                'data',
                'nbPoints',
                'nucleus',
                'firstX',
                'lastX'
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
            bruker['ser'] = new IOBuffer(fs.readFileSync('test/2D/ser'));
            bruker['2rr'] = new IOBuffer(fs.readFileSync('test/2D/2rr'));

            var result = convert(bruker);

            result.spectra.length.should.be.equal(result.info.nbSubSpectra);
            result.spectra[1023].data[0].y.length.should.be.equal(result.info["$SI"]);
            result.spectra[1023].data[0].y[4].should.be.a.Number;

            result.info.should.have.properties([
                'JCAMPDX',
                'ORIGIN',
                'OWNER'
            ]);

            result.spectra[1023].should.have.properties([
                'dataType',
                'dataTable',
                'firstX',
                'lastX',
                'xUnit',
                'yUnit',
                'data',
            ]);
        });
    });

    describe('Test with zip file', function() {
        it('Set of spectra 1', function () {
            var zip  = fs.readFileSync("test/zip/hrva034.zip");
            var result = convertZIP(zip);
            result.length.should.be.equal(5);
        });
    });

    describe('Test with zip file', function() {
        it('Set of spectra 2', function () {
            var zip  = fs.readFileSync("test/zip/setOfSpectra.zip");
            var result = convertZIP(zip);
            console.log(result);
            //result.length.should.be.equal(5);
        });
    });

    describe('Test with zip file', function() {
        it('Single spectrum', function () {
            var zip  = fs.readFileSync("test/zip/test.zip");
            var result = convertZIP(zip);
            console.log(zip);
        });
    });
});