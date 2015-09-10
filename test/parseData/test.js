"use strict";

var parseData = require("../../src/brukerconverter2").parseData;
var fs = require('fs');

describe("Test for parse a entire jcamp file", function () {
    it("main test", function () {
        fs.readFile('/home/jefferson/WebstormProjects/brukerconverter/test/parseData/acqu', 'utf8', function (err,data) {
            var result = parseData(data);
            result.should.have.properties([
                'JCAMPDX',
                'TITLE',
                'DATATYPE'
            ]);

            result['NPOINTS'].should.be.equal('9');
        });
    });
});