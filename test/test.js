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
            bruker['procs'] = fs.readFileSync('test/1D/pdata/1/procs', 'utf8');
            bruker['1r'] = new IOBuffer(fs.readFileSync('test/1D/pdata/1/1r'));
            bruker['1i'] = new IOBuffer(fs.readFileSync('test/1D/pdata/1/1i'));
            var result = convert(bruker, {xy:true, keepSpectra:true});

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

            var result = convert(bruker,{xy:true, keepSpectra:true});

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

            var result = convert(bruker,{xy:true, keepSpectra:true});

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
            var result = convertZIP(zip, {xy:true, keepSpectra:true, noContours:true});
            //console.log(result);
            //console.log(result[0].value.spectra[0].data[0].x[0]+" "+result[0].value.spectra[0].data[0].x[result[0].value.spectra[0].data[0].x.length-1]);
            result.length.should.equal(10);
        });

        it('Set of spectra 2', function () {
            var zip  = fs.readFileSync("test/zip/list.zip");
            var result = convertZIP(zip, {xy:true, keepSpectra:true});
            //console.log(result);
            //result.length.should.be.equal(5);
        });

        it('Single spectrum', function () {
            var zip  = fs.readFileSync("test/zip/single.zip");
            var result = convertZIP(zip, {xy:true, keepSpectra:true});
            result[0].value.spectra[0].dataType.should.equal("NMR FID");
            /*console.log(result[1].value.spectra.length);
            //console.log(result[1].value.spectra[0].data);
            var nbPoints = result[1].value.spectra[0].nbPoints;
            console.log(nbPoints);
            console.log(result[1].value.spectra[0].firstX);
            console.log(result[1].value.spectra[0].lastX);
            console.log(result[1].value.spectra[0].data[0].x[0]);
            //for(var i=0;i<10;i++){
            //    console.log(result[1].value.spectra[0].data[0].x[i]);
            //}
            console.log(result[1].value.spectra[0].data[0].x[nbPoints-1]);
            console.log(result[1].value.spectra[0].data[0].y[0]);
            console.log(result[1].value.spectra[0].data[0].y[nbPoints-1]);
            console.log(result[1].value.spectra[0].data[0].x.length);*/
            result[1].value.spectra[0].dataType.should.equal("NMR Spectrum");
        });
    });

    describe('Test with pseudo SER file', function() {
        var zip  = fs.readFileSync("test/zip/21-BOMA-new.zip");
        var result = convertZIP(zip, {xy: true, keepSpectra: true, noContours: true});
        console.log(result[0].value)
        it.only('StarX', function () {
            result.length.should.equal(2);
        });

        it('StopX', function () {
            var result = convertZIP(zip, {xy: true, keepSpectra: true});
        });

        it('Other parameters', function () {
            var result = convertZIP(zip, {xy: true, keepSpectra: true});
            result[0].value.spectra[0].dataType.should.equal("NMR FID");
            result[1].value.spectra[0].dataType.should.equal("NMR Spectrum");
        });
    });
});