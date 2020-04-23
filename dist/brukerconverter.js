/**
 * brukerconverter - Parse and convert Bruker raw data
 * @version v2.0.0
 * @link https://github.com/cheminfo-js/brukerconverter
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BrukerConverter"] = factory();
	else
		root["BrukerConverter"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const toString = Object.prototype.toString;

function isAnyArray(object) {
  return toString.call(object).endsWith('Array]');
}

module.exports = isAnyArray;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  function a(d) {
    for (var e = 0, f = d.length - 1, g = void 0, h = void 0, i = void 0, j = c(e, f); !0;) {
      if (f <= e) return d[j];
      if (f == e + 1) return d[e] > d[f] && b(d, e, f), d[j];

      for (g = c(e, f), d[g] > d[f] && b(d, g, f), d[e] > d[f] && b(d, e, f), d[g] > d[e] && b(d, g, e), b(d, g, e + 1), h = e + 1, i = f; !0;) {
        do h++; while (d[e] > d[h]);

        do i--; while (d[i] > d[e]);

        if (i < h) break;
        b(d, h, i);
      }

      b(d, e, i), i <= j && (e = h), i >= j && (f = i - 1);
    }
  }

  var b = function b(d, e, f) {
    var _ref;

    return _ref = [d[f], d[e]], d[e] = _ref[0], d[f] = _ref[1], _ref;
  },
      c = function c(d, e) {
    return ~~((d + e) / 2);
  };

   true && module.exports ? module.exports = a : window.median = a;
})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Converter = __webpack_require__(13);

const {
  IOBuffer
} = __webpack_require__(14);

const JSZip = __webpack_require__(5);

const BINARY = 1;
const TEXT = 2;

function readZIP(zipFile, options) {
  options = options || {};
  const jsZip = new JSZip();
  return jsZip.loadAsync(zipFile, options).then(zip => {
    let files = {
      ser: BINARY,
      fid: BINARY,
      acqus: TEXT,
      acqu2s: TEXT,
      procs: TEXT,
      proc2s: TEXT,
      '1r': BINARY,
      '1i': BINARY,
      '2rr': BINARY
    };
    let folders = zip.filter(function (relativePath) {
      if (relativePath.match('__MACOSX')) return false;

      if (relativePath.endsWith('ser') || relativePath.endsWith('fid') || relativePath.endsWith('1r') || relativePath.endsWith('2rr')) {
        return true;
      }

      return false;
    });
    let spectra = new Array(folders.length);

    for (let i = 0; i < folders.length; ++i) {
      let promises = [];
      let name = folders[i].name;
      name = name.substr(0, name.lastIndexOf('/') + 1);
      promises.push(name);
      let currFolder = zip.folder(name);
      let currFiles = currFolder.filter(function (relativePath) {
        return files[relativePath] ? true : false;
      });

      if (name.indexOf('pdata') >= 0) {
        promises.push('acqus');
        promises.push(zip.file(name.replace(/pdata\/[0-9]+\//, 'acqus')).async('string'));
      }

      for (let j = 0; j < currFiles.length; ++j) {
        let idx = currFiles[j].name.lastIndexOf('/');
        name = currFiles[j].name.substr(idx + 1);
        promises.push(name);

        if (files[name] === BINARY) {
          promises.push(currFiles[j].async('arraybuffer'));
        } else {
          promises.push(currFiles[j].async('string'));
        }
      }

      spectra[i] = Promise.all(promises).then(result => {
        let brukerFiles = {};

        for (let k = 1; k < result.length; k += 2) {
          name = result[k];
          brukerFiles[name] = result[k + 1];
        }

        return {
          filename: result[0],
          value: convert(brukerFiles, options)
        };
      });
    }

    return Promise.all(spectra);
  });
}

function convert(brukerFiles, options) {
  options = options || {};
  let start = new Date();
  let result;

  if (brukerFiles.ser || brukerFiles['2rr']) {
    result = convert2D(brukerFiles, options);
  } else if (brukerFiles['1r'] || brukerFiles['1i'] || brukerFiles.fid) {
    result = convert1D(brukerFiles, options);
  } else {
    throw new RangeError('The current files are invalid');
  }

  if (result.twoD && !options.noContours) {
    add2D(result);

    if (result.profiling) {
      result.profiling.push({
        action: 'Finished countour plot calculation',
        time: new Date() - start
      });
    }

    if (!options.keepSpectra) {
      delete result.spectra;
    }
  }

  let spectra = result.spectra;

  if (options.xy) {
    //the spectraData should not be a oneD array but an object with x and y
    if (spectra.length > 0) {
      for (let i = 0; i < spectra.length; i++) {
        let spectrum = spectra[i];

        if (spectrum.data.length) {
          let data = spectrum.data;
          let newData = {
            x: new Array(data.length / 2),
            y: new Array(data.length / 2)
          };

          for (let k = 0; k < data.length; k = k + 2) {
            newData.x[k / 2] = data[k];
            newData.y[k / 2] = data[k + 1];
          }

          spectrum.data = newData;
        }
      }
    }
  }

  return result;
}

function convert1D(files, options) {
  let result = parseData(files.procs || '', options);
  let temp = parseData(files.acqus || '', options);
  let keys = Object.keys(temp.info || {});
  if (!result.info) result = temp;

  for (let i = 0; i < keys.length; i++) {
    let currKey = keys[i];

    if (result.info[currKey] === undefined) {
      result.info[currKey] = temp.info[currKey];
    }
  }

  if (files['1r'] || files['1i']) {
    if (files['1r']) {
      setXYSpectrumData(files['1r'], result, '1r', true);
    }

    if (files['1i']) {
      setXYSpectrumData(files['1i'], result, '1i', false);
    }
  } else if (files.fid) {
    setFIDSpectrumData(files.fid, result);
  }

  return result;
}

function convert2D(files, options) {
  let sf, swP, offset, result, temp;

  if (files['2rr']) {
    result = parseData(files.procs, options);
    temp = parseData(files.acqus, options);
    let keys = Object.keys(temp.info);

    for (let i = 0; i < keys.length; i++) {
      let currKey = keys[i];

      if (result.info[currKey] === undefined) {
        result.info[currKey] = temp.info[currKey];
      }
    }

    temp = parseData(files.proc2s, options);
    result.info.nbSubSpectra = temp.info.$SI = parseInt(temp.info.$SI, 10);
    sf = temp.info.$SF = parseFloat(temp.info.$SF);
    swP = temp.info.$SWP = parseFloat(temp.info.$SWP);
    offset = temp.info.$OFFSET = parseFloat(temp.info.$OFFSET);
  } else if (files.ser) {
    result = parseData(files.acqus, options);
    temp = parseData(files.acqu2s, options);
    result.info.nbSubSpectra = temp.info.$SI = parseInt(temp.info.$TD, 10);
    result.info.$SI = parseInt(result.info.$TD, 10); // SW_p = temp.info['$SWH'] = parseFloat(temp.info['$SWH']);

    swP = temp.info.$SW;
    result.info.$SWP = result.info.$SWH;
    result.info.$SF = parseFloat(temp.info.$SFO1);
    result.info.$OFFSET = 0;
    sf = temp.info.$SFO1 = parseFloat(temp.info.$SFO1);
    sf = 1;
    offset = 0;
    result.info.$AXNUC = result.info.$NUC1;
    temp.info.$AXNUC = temp.info.$NUC1;
  }

  result.info.firstY = offset;
  result.info.lastY = offset - swP / sf;
  result.info.$BF2 = sf;
  result.info.$SFO1 = sf;
  let nbSubSpectra = result.info.nbSubSpectra;
  let pageValue = result.info.firstY;
  let deltaY = (result.info.lastY - result.info.firstY) / (nbSubSpectra - 1);

  if (files['2rr']) {
    setXYSpectrumData(files['2rr'], result, '2rr', true);
  } else if (files.ser) {
    setFIDSpectrumData(files.ser, result, 'ser', true);
  }

  for (let i = 0; i < nbSubSpectra; i++) {
    pageValue += deltaY;
    result.spectra[i].pageValue = pageValue;
  } // var dataType = files.ser ? 'TYPE_2DNMR_FID' : 'TYPE_2DNMR_SPECTRUM';


  result.info['2D_Y_NUCLEUS'] = temp.info.$AXNUC;
  result.info['2D_X_NUCLEUS'] = result.info.$AXNUC;
  result.info['2D_Y_FRECUENCY'] = sf;
  result.info['2D_Y_OFFSET'] = offset;
  result.info['2D_X_FRECUENCY'] = result.info.$SF;
  result.info['2D_X_OFFSET'] = result.info.$OFFSET;
  result.twoD = true;
  return result;
}

function setXYSpectrumData(file, spectra, store, real) {
  file = ensureIOBuffer(file);
  let td = spectra.info.$SI = parseInt(spectra.info.$SI, 10);
  let swP = parseFloat(spectra.info.$SWP);
  let sf = parseFloat(spectra.info.$SF);
  let bf = sf; // var BF = parseFloat(spectra.info["$BF1"]);

  let offset = spectra.shiftOffsetVal || parseFloat(spectra.info.$OFFSET);
  spectra.info.observeFrequency = sf;
  spectra.info.$BF1 = bf;
  spectra.info.$SFO1 = sf;
  spectra.info.brukerReference = bf;
  spectra.info.DATATYPE = 'NMR Spectrum';
  let endian = parseInt(spectra.info.$BYTORDP, 10);
  endian = endian ? 0 : 1; // number of spectras

  let nbSubSpectra = spectra.info.nbSubSpectra ? spectra.info.nbSubSpectra : 1;

  if (endian) {
    file.setLittleEndian();
  } else {
    file.setBigEndian();
  }

  for (let i = 0; i < nbSubSpectra; i++) {
    let toSave = {
      dataType: 'NMR Spectrum',
      dataTable: '(X++(R..R))',
      nbPoints: td,
      firstX: offset,
      lastX: offset - swP / sf,
      xUnit: 'PPM',
      yUnit: 'Arbitrary',
      data: new Array(td * 2),
      // [{x:new Array(td),y:new Array(td)}],
      isXYdata: true,
      observeFrequency: sf,
      title: spectra.info.TITLE,
      deltaX: -(swP / sf) / (td - 1)
    };
    let x = offset;
    let deltaX = toSave.deltaX;

    if (real) {
      for (let k = 0; k < td; ++k) {
        toSave.data[2 * k] = x;
        toSave.data[2 * k + 1] = file.readInt32();

        if (toSave.data[2 * k + 1] === null || isNaN(toSave.data[2 * k + 1])) {
          toSave.data[2 * k + 1] = 0;
        }

        x += deltaX;
      }
    } else {
      for (let k = td - 1; k >= 0; --k) {
        toSave.data[2 * k] = x;
        toSave.data[2 * k + 1] = file.readInt32();

        if (toSave.data[2 * k + 1] === null || isNaN(toSave.data[2 * k + 1])) {
          toSave.data[2 * k + 1] = 0;
        }

        x += deltaX;
      }
    }

    spectra.spectra.push(toSave);
  }
}

function parseData(file, options) {
  let keepRecordsRegExp = /.*/;
  if (options.keepRecordsRegExp) keepRecordsRegExp = options.keepRecordsRegExp;
  let result = Converter.convert(file, {
    keepRecordsRegExp: keepRecordsRegExp
  });
  return result.flatten.length === 0 ? {} : result.flatten[0];
}

function setFIDSpectrumData(file, spectra) {
  file = ensureIOBuffer(file);
  let td = spectra.info.$TD = parseInt(spectra.info.$TD, 10);
  let SW = spectra.info.$SW = parseFloat(spectra.info.$SW);
  let SF = spectra.info.$SFO1 = parseFloat(spectra.info.$SFO1);
  let BF = parseFloat(spectra.info.$BF1);
  spectra.info.$BF1 = BF;
  spectra.info.DATATYPE = 'NMR FID'; // var DW = 1 / (2 * SW_h);
  // var AQ = td * DW;

  let AQ = SW;
  let DW = AQ / (td - 1);
  let endian = parseInt(spectra.info.$BYTORDP, 10);
  endian = endian ? 0 : 1;

  if (endian) {
    file.setLittleEndian();
  } else {
    file.setBigEndian();
  }

  let nbSubSpectra = spectra.info.nbSubSpectra ? spectra.info.nbSubSpectra : 1;
  spectra.spectra = new Array(nbSubSpectra);

  for (let j = 0; j < nbSubSpectra / 2; j++) {
    let toSave = {
      dataType: 'NMR FID',
      dataTable: '(X++(R..R))',
      nbPoints: td,
      firstX: 0,
      lastX: AQ,
      nucleus: spectra.info.$NUC1 ? spectra.info.$NUC1 : undefined,
      xUnit: 'Sec',
      yUnit: 'Arbitrary',
      data: [new Array(2 * td)],
      // [{x:new Array(td),y:new Array(td)}],
      isXYdata: true,
      observeFrequency: SF,
      title: spectra.info.TITLE,
      deltaX: DW
    };
    spectra.spectra[j * 2] = toSave;
    toSave = {
      dataType: 'NMR FID',
      dataTable: '(X++(I..I))',
      nbPoints: td,
      firstX: 0,
      lastX: AQ,
      nucleus: spectra.info.$NUC1 ? spectra.info.$NUC1 : undefined,
      xUnit: 'Sec',
      yUnit: 'Arbitrary',
      data: new Array(2 * td),
      // [{x:new Array(td),y:new Array(td)}],
      isXYdata: true,
      observeFrequency: SF,
      title: spectra.info.TITLE,
      deltaX: DW
    };
    spectra.spectra[j * 2 + 1] = toSave;
    let x = 0;
    let y, i;

    for (i = 0; file.available(8) && i < td; i++, x = i * DW) {
      y = file.readInt32();

      if (y === null || isNaN(y)) {
        y = 0;
      }

      spectra.spectra[j * 2].data[2 * i + 1] = y;
      spectra.spectra[j * 2].data[2 * i] = x;
      y = file.readInt32();

      if (y === null || isNaN(y)) {
        y = 0;
      }

      spectra.spectra[j * 2 + 1].data[2 * i + 1] = y;
      spectra.spectra[j * 2 + 1].data[2 * i] = x;
    }

    for (; i < td; i++, x = i * DW) {
      spectra.spectra[j * 2].data[2 * i + 1] = 0;
      spectra.spectra[j * 2].data[2 * i] = x;
      spectra.spectra[j * 2 + 1].data[2 * i + 1] = 0;
      spectra.spectra[j * 2 + 1].data[2 * i] = x;
    }
  }
}
/**
 * Those functions should disappear if add2D becomes accessible in jcampconvert
 * @param spectra
 * @returns {{z: Array, minX: *, maxX: *, minY: *, maxY: *, minZ: *, maxZ: *, noise: number}}
 */


function convertTo3DZ(spectra) {
  let noise = 0;
  let minZ = spectra[0].data[0];
  let maxZ = minZ;
  let ySize = spectra.length;
  let xSize = spectra[0].data.length / 2;
  let z = new Array(ySize);

  for (let i = 0; i < ySize; i++) {
    z[i] = new Array(xSize);

    for (let j = 0; j < xSize; j++) {
      z[i][j] = spectra[i].data[j * 2 + 1];
      if (z[i][j] < minZ) minZ = spectra[i].data[j * 2 + 1];
      if (z[i][j] > maxZ) maxZ = spectra[i].data[j * 2 + 1];

      if (i !== 0 && j !== 0) {
        noise += Math.abs(z[i][j] - z[i][j - 1]) + Math.abs(z[i][j] - z[i - 1][j]);
      }
    }
  }

  return {
    z: z,
    minX: spectra[0].data[0],
    maxX: spectra[0].data[spectra[0].data.length - 2],
    minY: spectra[0].pageValue,
    maxY: spectra[ySize - 1].pageValue,
    minZ: minZ,
    maxZ: maxZ,
    noise: noise / ((ySize - 1) * (xSize - 1) * 2)
  };
}

function add2D(result) {
  let zData = convertTo3DZ(result.spectra);
  result.contourLines = generateContourLines(zData);
  delete zData.z;
  result.minMax = zData;
}

function generateContourLines(zData) {
  let noise = zData.noise;
  let z = zData.z;
  let contourLevels = [];
  let nbLevels = 7;
  let povarHeight = new Float32Array(4);
  let isOver = [];
  let nbSubSpectra = z.length;
  let nbPovars = z[0].length;
  let pAx, pAy, pBx, pBy;
  let x0 = zData.minX;
  let xN = zData.maxX;
  let dx = (xN - x0) / (nbPovars - 1);
  let y0 = zData.minY;
  let yN = zData.maxY;
  let dy = (yN - y0) / (nbSubSpectra - 1);
  let minZ = zData.minZ;
  let maxZ = zData.maxZ; // System.out.prvarln('y0 '+y0+' yN '+yN);
  // -------------------------
  // Povars attribution
  //
  // 0----1
  // |  / |
  // | /  |
  // 2----3
  //
  // ---------------------d------

  let lineZValue;

  for (let level = 0; level < nbLevels * 2; level++) {
    // multiply by 2 for positif and negatif
    let contourLevel = {};
    contourLevels.push(contourLevel);
    let side = level % 2;

    if (side === 0) {
      lineZValue = (maxZ - 5 * noise) * Math.exp(level / 2 - nbLevels) + 5 * noise;
    } else {
      lineZValue = -(maxZ - 5 * noise) * Math.exp(level / 2 - nbLevels) - 5 * noise;
    }

    let lines = [];
    contourLevel.zValue = lineZValue;
    contourLevel.lines = lines;
    if (lineZValue <= minZ || lineZValue >= maxZ) continue;

    for (let iSubSpectra = 0; iSubSpectra < nbSubSpectra - 1; iSubSpectra++) {
      for (let povar = 0; povar < nbPovars - 1; povar++) {
        povarHeight[0] = z[iSubSpectra][povar];
        povarHeight[1] = z[iSubSpectra][povar + 1];
        povarHeight[2] = z[iSubSpectra + 1][povar];
        povarHeight[3] = z[iSubSpectra + 1][povar + 1];

        for (let i = 0; i < 4; i++) {
          isOver[i] = povarHeight[i] > lineZValue;
        } // Example povar0 is over the plane and povar1 and
        // povar2 are below, we find the varersections and add
        // the segment


        if (isOver[0] !== isOver[1] && isOver[0] !== isOver[2]) {
          pAx = povar + (lineZValue - povarHeight[0]) / (povarHeight[1] - povarHeight[0]);
          pAy = iSubSpectra;
          pBx = povar;
          pBy = iSubSpectra + (lineZValue - povarHeight[0]) / (povarHeight[2] - povarHeight[0]);
          lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
        }

        if (isOver[3] !== isOver[1] && isOver[3] !== isOver[2]) {
          pAx = povar + 1;
          pAy = iSubSpectra + 1 - (lineZValue - povarHeight[3]) / (povarHeight[1] - povarHeight[3]);
          pBx = povar + 1 - (lineZValue - povarHeight[3]) / (povarHeight[2] - povarHeight[3]);
          pBy = iSubSpectra + 1;
          lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
        } // test around the diagonal


        if (isOver[1] !== isOver[2]) {
          pAx = povar + 1 - (lineZValue - povarHeight[1]) / (povarHeight[2] - povarHeight[1]);
          pAy = iSubSpectra + (lineZValue - povarHeight[1]) / (povarHeight[2] - povarHeight[1]);

          if (isOver[1] !== isOver[0]) {
            pBx = povar + 1 - (lineZValue - povarHeight[1]) / (povarHeight[0] - povarHeight[1]);
            pBy = iSubSpectra;
            lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
          }

          if (isOver[2] !== isOver[0]) {
            pBx = povar;
            pBy = iSubSpectra + 1 - (lineZValue - povarHeight[2]) / (povarHeight[0] - povarHeight[2]);
            lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
          }

          if (isOver[1] !== isOver[3]) {
            pBx = povar + 1;
            pBy = iSubSpectra + (lineZValue - povarHeight[1]) / (povarHeight[3] - povarHeight[1]);
            lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
          }

          if (isOver[2] !== isOver[3]) {
            pBx = povar + (lineZValue - povarHeight[2]) / (povarHeight[3] - povarHeight[2]);
            pBy = iSubSpectra + 1;
            lines.push(pAx * dx + x0, pAy * dy + y0, pBx * dx + x0, pBy * dy + y0);
          }
        }
      }
    }
  }

  return {
    minX: zData.minX,
    maxX: zData.maxX,
    minY: zData.minY,
    maxY: zData.maxY,
    segments: contourLevels
  };
}

function ensureIOBuffer(data) {
  if (data instanceof Array || data instanceof Uint8Array) {
    data = new ArrayBuffer(data);
  }

  if (data instanceof ArrayBuffer) {
    return new IOBuffer(data);
  }

  return data;
}

module.exports = {
  convertZip: readZIP,
  convertFolder: convert
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright 2017 Sam Thorogood. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

(function (scope) {
  'use strict'; // fail early

  if (scope['TextEncoder'] && scope['TextDecoder']) {
    return false;
  }
  /**
   * @constructor
   * @param {string=} utfLabel
   */


  function FastTextEncoder(utfLabel = 'utf-8') {
    if (utfLabel !== 'utf-8') {
      throw new RangeError("Failed to construct 'TextEncoder': The encoding label provided ('".concat(utfLabel, "') is invalid."));
    }
  }

  Object.defineProperty(FastTextEncoder.prototype, 'encoding', {
    value: 'utf-8'
  });
  /**
   * @param {string} string
   * @param {{stream: boolean}=} options
   * @return {!Uint8Array}
   */

  FastTextEncoder.prototype.encode = function (string, options = {
    stream: false
  }) {
    if (options.stream) {
      throw new Error("Failed to encode: the 'stream' option is unsupported.");
    }

    let pos = 0;
    const len = string.length;
    const out = [];
    let at = 0; // output position

    let tlen = Math.max(32, len + (len >> 1) + 7); // 1.5x size

    let target = new Uint8Array(tlen >> 3 << 3); // ... but at 8 byte offset

    while (pos < len) {
      let value = string.charCodeAt(pos++);

      if (value >= 0xd800 && value <= 0xdbff) {
        // high surrogate
        if (pos < len) {
          const extra = string.charCodeAt(pos);

          if ((extra & 0xfc00) === 0xdc00) {
            ++pos;
            value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
          }
        }

        if (value >= 0xd800 && value <= 0xdbff) {
          continue; // drop lone surrogate
        }
      } // expand the buffer if we couldn't write 4 bytes


      if (at + 4 > target.length) {
        tlen += 8; // minimum extra

        tlen *= 1.0 + pos / string.length * 2; // take 2x the remaining

        tlen = tlen >> 3 << 3; // 8 byte offset

        const update = new Uint8Array(tlen);
        update.set(target);
        target = update;
      }

      if ((value & 0xffffff80) === 0) {
        // 1-byte
        target[at++] = value; // ASCII

        continue;
      } else if ((value & 0xfffff800) === 0) {
        // 2-byte
        target[at++] = value >> 6 & 0x1f | 0xc0;
      } else if ((value & 0xffff0000) === 0) {
        // 3-byte
        target[at++] = value >> 12 & 0x0f | 0xe0;
        target[at++] = value >> 6 & 0x3f | 0x80;
      } else if ((value & 0xffe00000) === 0) {
        // 4-byte
        target[at++] = value >> 18 & 0x07 | 0xf0;
        target[at++] = value >> 12 & 0x3f | 0x80;
        target[at++] = value >> 6 & 0x3f | 0x80;
      } else {
        // FIXME: do we care
        continue;
      }

      target[at++] = value & 0x3f | 0x80;
    }

    return target.slice(0, at);
  };
  /**
   * @constructor
   * @param {string=} utfLabel
   * @param {{fatal: boolean}=} options
   */


  function FastTextDecoder(utfLabel = 'utf-8', options = {
    fatal: false
  }) {
    if (utfLabel !== 'utf-8') {
      throw new RangeError("Failed to construct 'TextDecoder': The encoding label provided ('".concat(utfLabel, "') is invalid."));
    }

    if (options.fatal) {
      throw new Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.");
    }
  }

  Object.defineProperty(FastTextDecoder.prototype, 'encoding', {
    value: 'utf-8'
  });
  Object.defineProperty(FastTextDecoder.prototype, 'fatal', {
    value: false
  });
  Object.defineProperty(FastTextDecoder.prototype, 'ignoreBOM', {
    value: false
  });
  /**
   * @param {(!ArrayBuffer|!ArrayBufferView)} buffer
   * @param {{stream: boolean}=} options
   */

  FastTextDecoder.prototype.decode = function (buffer, options = {
    stream: false
  }) {
    if (options['stream']) {
      throw new Error("Failed to decode: the 'stream' option is unsupported.");
    }

    const bytes = new Uint8Array(buffer);
    let pos = 0;
    const len = bytes.length;
    const out = [];

    while (pos < len) {
      const byte1 = bytes[pos++];

      if (byte1 === 0) {
        break; // NULL
      }

      if ((byte1 & 0x80) === 0) {
        // 1-byte
        out.push(byte1);
      } else if ((byte1 & 0xe0) === 0xc0) {
        // 2-byte
        const byte2 = bytes[pos++] & 0x3f;
        out.push((byte1 & 0x1f) << 6 | byte2);
      } else if ((byte1 & 0xf0) === 0xe0) {
        const byte2 = bytes[pos++] & 0x3f;
        const byte3 = bytes[pos++] & 0x3f;
        out.push((byte1 & 0x1f) << 12 | byte2 << 6 | byte3);
      } else if ((byte1 & 0xf8) === 0xf0) {
        const byte2 = bytes[pos++] & 0x3f;
        const byte3 = bytes[pos++] & 0x3f;
        const byte4 = bytes[pos++] & 0x3f; // this can be > 0xffff, so possibly generate surrogates

        let codepoint = (byte1 & 0x07) << 0x12 | byte2 << 0x0c | byte3 << 0x06 | byte4;

        if (codepoint > 0xffff) {
          // codepoint &= ~0x10000;
          codepoint -= 0x10000;
          out.push(codepoint >>> 10 & 0x3ff | 0xd800);
          codepoint = 0xdc00 | codepoint & 0x3ff;
        }

        out.push(codepoint);
      } else {// FIXME: we're ignoring this
      }
    }

    return String.fromCharCode.apply(null, out);
  };

  scope['TextEncoder'] = FastTextEncoder;
  scope['TextDecoder'] = FastTextDecoder;
})(typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : this);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer, global, setImmediate) {var require;var require;/*!

JSZip v3.3.0 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
!function (t) {
  if (true) module.exports = t();else {}
}(function () {
  return function s(a, o, h) {
    function u(r, t) {
      if (!o[r]) {
        if (!a[r]) {
          var e = "function" == typeof require && require;
          if (!t && e) return require(r, !0);
          if (l) return l(r, !0);
          var i = new Error("Cannot find module '" + r + "'");
          throw i.code = "MODULE_NOT_FOUND", i;
        }

        var n = o[r] = {
          exports: {}
        };
        a[r][0].call(n.exports, function (t) {
          var e = a[r][1][t];
          return u(e || t);
        }, n, n.exports, s, a, o, h);
      }

      return o[r].exports;
    }

    for (var l = "function" == typeof require && require, t = 0; t < h.length; t++) u(h[t]);

    return u;
  }({
    1: [function (t, e, r) {
      "use strict";

      var c = t("./utils"),
          d = t("./support"),
          p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      r.encode = function (t) {
        for (var e, r, i, n, s, a, o, h = [], u = 0, l = t.length, f = l, d = "string" !== c.getTypeOf(t); u < t.length;) f = l - u, i = d ? (e = t[u++], r = u < l ? t[u++] : 0, u < l ? t[u++] : 0) : (e = t.charCodeAt(u++), r = u < l ? t.charCodeAt(u++) : 0, u < l ? t.charCodeAt(u++) : 0), n = e >> 2, s = (3 & e) << 4 | r >> 4, a = 1 < f ? (15 & r) << 2 | i >> 6 : 64, o = 2 < f ? 63 & i : 64, h.push(p.charAt(n) + p.charAt(s) + p.charAt(a) + p.charAt(o));

        return h.join("");
      }, r.decode = function (t) {
        var e,
            r,
            i,
            n,
            s,
            a,
            o = 0,
            h = 0,
            u = "data:";
        if (t.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
        var l,
            f = 3 * (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "")).length / 4;
        if (t.charAt(t.length - 1) === p.charAt(64) && f--, t.charAt(t.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");

        for (l = d.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < t.length;) e = p.indexOf(t.charAt(o++)) << 2 | (n = p.indexOf(t.charAt(o++))) >> 4, r = (15 & n) << 4 | (s = p.indexOf(t.charAt(o++))) >> 2, i = (3 & s) << 6 | (a = p.indexOf(t.charAt(o++))), l[h++] = e, 64 !== s && (l[h++] = r), 64 !== a && (l[h++] = i);

        return l;
      };
    }, {
      "./support": 30,
      "./utils": 32
    }],
    2: [function (t, e, r) {
      "use strict";

      var i = t("./external"),
          n = t("./stream/DataWorker"),
          s = t("./stream/DataLengthProbe"),
          a = t("./stream/Crc32Probe");
      s = t("./stream/DataLengthProbe");

      function o(t, e, r, i, n) {
        this.compressedSize = t, this.uncompressedSize = e, this.crc32 = r, this.compression = i, this.compressedContent = n;
      }

      o.prototype = {
        getContentWorker: function () {
          var t = new n(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new s("data_length")),
              e = this;
          return t.on("end", function () {
            if (this.streamInfo.data_length !== e.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
          }), t;
        },
        getCompressedWorker: function () {
          return new n(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
        }
      }, o.createWorkerFrom = function (t, e, r) {
        return t.pipe(new a()).pipe(new s("uncompressedSize")).pipe(e.compressWorker(r)).pipe(new s("compressedSize")).withStreamInfo("compression", e);
      }, e.exports = o;
    }, {
      "./external": 6,
      "./stream/Crc32Probe": 25,
      "./stream/DataLengthProbe": 26,
      "./stream/DataWorker": 27
    }],
    3: [function (t, e, r) {
      "use strict";

      var i = t("./stream/GenericWorker");
      r.STORE = {
        magic: "\0\0",
        compressWorker: function (t) {
          return new i("STORE compression");
        },
        uncompressWorker: function () {
          return new i("STORE decompression");
        }
      }, r.DEFLATE = t("./flate");
    }, {
      "./flate": 7,
      "./stream/GenericWorker": 28
    }],
    4: [function (t, e, r) {
      "use strict";

      var i = t("./utils");

      var o = function () {
        for (var t, e = [], r = 0; r < 256; r++) {
          t = r;

          for (var i = 0; i < 8; i++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;

          e[r] = t;
        }

        return e;
      }();

      e.exports = function (t, e) {
        return void 0 !== t && t.length ? "string" !== i.getTypeOf(t) ? function (t, e, r, i) {
          var n = o,
              s = i + r;
          t ^= -1;

          for (var a = i; a < s; a++) t = t >>> 8 ^ n[255 & (t ^ e[a])];

          return -1 ^ t;
        }(0 | e, t, t.length, 0) : function (t, e, r, i) {
          var n = o,
              s = i + r;
          t ^= -1;

          for (var a = i; a < s; a++) t = t >>> 8 ^ n[255 & (t ^ e.charCodeAt(a))];

          return -1 ^ t;
        }(0 | e, t, t.length, 0) : 0;
      };
    }, {
      "./utils": 32
    }],
    5: [function (t, e, r) {
      "use strict";

      r.base64 = !1, r.binary = !1, r.dir = !1, r.createFolders = !0, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
    }, {}],
    6: [function (t, e, r) {
      "use strict";

      var i = null;
      i = "undefined" != typeof Promise ? Promise : t("lie"), e.exports = {
        Promise: i
      };
    }, {
      lie: 37
    }],
    7: [function (t, e, r) {
      "use strict";

      var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array,
          n = t("pako"),
          s = t("./utils"),
          a = t("./stream/GenericWorker"),
          o = i ? "uint8array" : "array";

      function h(t, e) {
        a.call(this, "FlateWorker/" + t), this._pako = null, this._pakoAction = t, this._pakoOptions = e, this.meta = {};
      }

      r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function (t) {
        this.meta = t.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, t.data), !1);
      }, h.prototype.flush = function () {
        a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], !0);
      }, h.prototype.cleanUp = function () {
        a.prototype.cleanUp.call(this), this._pako = null;
      }, h.prototype._createPako = function () {
        this._pako = new n[this._pakoAction]({
          raw: !0,
          level: this._pakoOptions.level || -1
        });
        var e = this;

        this._pako.onData = function (t) {
          e.push({
            data: t,
            meta: e.meta
          });
        };
      }, r.compressWorker = function (t) {
        return new h("Deflate", t);
      }, r.uncompressWorker = function () {
        return new h("Inflate", {});
      };
    }, {
      "./stream/GenericWorker": 28,
      "./utils": 32,
      pako: 38
    }],
    8: [function (t, e, r) {
      "use strict";

      function A(t, e) {
        var r,
            i = "";

        for (r = 0; r < e; r++) i += String.fromCharCode(255 & t), t >>>= 8;

        return i;
      }

      function i(t, e, r, i, n, s) {
        var a,
            o,
            h = t.file,
            u = t.compression,
            l = s !== O.utf8encode,
            f = I.transformTo("string", s(h.name)),
            d = I.transformTo("string", O.utf8encode(h.name)),
            c = h.comment,
            p = I.transformTo("string", s(c)),
            m = I.transformTo("string", O.utf8encode(c)),
            _ = d.length !== h.name.length,
            g = m.length !== c.length,
            b = "",
            v = "",
            y = "",
            w = h.dir,
            k = h.date,
            x = {
          crc32: 0,
          compressedSize: 0,
          uncompressedSize: 0
        };

        e && !r || (x.crc32 = t.crc32, x.compressedSize = t.compressedSize, x.uncompressedSize = t.uncompressedSize);
        var S = 0;
        e && (S |= 8), l || !_ && !g || (S |= 2048);
        var z = 0,
            C = 0;
        w && (z |= 16), "UNIX" === n ? (C = 798, z |= function (t, e) {
          var r = t;
          return t || (r = e ? 16893 : 33204), (65535 & r) << 16;
        }(h.unixPermissions, w)) : (C = 20, z |= function (t) {
          return 63 & (t || 0);
        }(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + d, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
        var E = "";
        return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), {
          fileRecord: R.LOCAL_FILE_HEADER + E + f + b,
          dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(i, 4) + f + b + p
        };
      }

      var I = t("../utils"),
          n = t("../stream/GenericWorker"),
          O = t("../utf8"),
          B = t("../crc32"),
          R = t("../signature");

      function s(t, e, r, i) {
        n.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = e, this.zipPlatform = r, this.encodeFileName = i, this.streamFiles = t, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }

      I.inherits(s, n), s.prototype.push = function (t) {
        var e = t.meta.percent || 0,
            r = this.entriesCount,
            i = this._sources.length;
        this.accumulate ? this.contentBuffer.push(t) : (this.bytesWritten += t.data.length, n.prototype.push.call(this, {
          data: t.data,
          meta: {
            currentFile: this.currentFile,
            percent: r ? (e + 100 * (r - i - 1)) / r : 100
          }
        }));
      }, s.prototype.openedSource = function (t) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = t.file.name;
        var e = this.streamFiles && !t.file.dir;

        if (e) {
          var r = i(t, e, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({
            data: r.fileRecord,
            meta: {
              percent: 0
            }
          });
        } else this.accumulate = !0;
      }, s.prototype.closedSource = function (t) {
        this.accumulate = !1;
        var e = this.streamFiles && !t.file.dir,
            r = i(t, e, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(r.dirRecord), e) this.push({
          data: function (t) {
            return R.DATA_DESCRIPTOR + A(t.crc32, 4) + A(t.compressedSize, 4) + A(t.uncompressedSize, 4);
          }(t),
          meta: {
            percent: 100
          }
        });else for (this.push({
          data: r.fileRecord,
          meta: {
            percent: 0
          }
        }); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, s.prototype.flush = function () {
        for (var t = this.bytesWritten, e = 0; e < this.dirRecords.length; e++) this.push({
          data: this.dirRecords[e],
          meta: {
            percent: 100
          }
        });

        var r = this.bytesWritten - t,
            i = function (t, e, r, i, n) {
          var s = I.transformTo("string", n(i));
          return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(t, 2) + A(t, 2) + A(e, 4) + A(r, 4) + A(s.length, 2) + s;
        }(this.dirRecords.length, r, t, this.zipComment, this.encodeFileName);

        this.push({
          data: i,
          meta: {
            percent: 100
          }
        });
      }, s.prototype.prepareNextSource = function () {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, s.prototype.registerPrevious = function (t) {
        this._sources.push(t);

        var e = this;
        return t.on("data", function (t) {
          e.processChunk(t);
        }), t.on("end", function () {
          e.closedSource(e.previous.streamInfo), e._sources.length ? e.prepareNextSource() : e.end();
        }), t.on("error", function (t) {
          e.error(t);
        }), this;
      }, s.prototype.resume = function () {
        return !!n.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, s.prototype.error = function (t) {
        var e = this._sources;
        if (!n.prototype.error.call(this, t)) return !1;

        for (var r = 0; r < e.length; r++) try {
          e[r].error(t);
        } catch (t) {}

        return !0;
      }, s.prototype.lock = function () {
        n.prototype.lock.call(this);

        for (var t = this._sources, e = 0; e < t.length; e++) t[e].lock();
      }, e.exports = s;
    }, {
      "../crc32": 4,
      "../signature": 23,
      "../stream/GenericWorker": 28,
      "../utf8": 31,
      "../utils": 32
    }],
    9: [function (t, e, r) {
      "use strict";

      var u = t("../compressions"),
          i = t("./ZipFileWorker");

      r.generateWorker = function (t, a, e) {
        var o = new i(a.streamFiles, e, a.platform, a.encodeFileName),
            h = 0;

        try {
          t.forEach(function (t, e) {
            h++;

            var r = function (t, e) {
              var r = t || e,
                  i = u[r];
              if (!i) throw new Error(r + " is not a valid compression method !");
              return i;
            }(e.options.compression, a.compression),
                i = e.options.compressionOptions || a.compressionOptions || {},
                n = e.dir,
                s = e.date;

            e._compressWorker(r, i).withStreamInfo("file", {
              name: t,
              dir: n,
              date: s,
              comment: e.comment || "",
              unixPermissions: e.unixPermissions,
              dosPermissions: e.dosPermissions
            }).pipe(o);
          }), o.entriesCount = h;
        } catch (t) {
          o.error(t);
        }

        return o;
      };
    }, {
      "../compressions": 3,
      "./ZipFileWorker": 8
    }],
    10: [function (t, e, r) {
      "use strict";

      function i() {
        if (!(this instanceof i)) return new i();
        if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = {}, this.comment = null, this.root = "", this.clone = function () {
          var t = new i();

          for (var e in this) "function" != typeof this[e] && (t[e] = this[e]);

          return t;
        };
      }

      (i.prototype = t("./object")).loadAsync = t("./load"), i.support = t("./support"), i.defaults = t("./defaults"), i.version = "3.4.0", i.loadAsync = function (t, e) {
        return new i().loadAsync(t, e);
      }, i.external = t("./external"), e.exports = i;
    }, {
      "./defaults": 5,
      "./external": 6,
      "./load": 11,
      "./object": 15,
      "./support": 30
    }],
    11: [function (t, e, r) {
      "use strict";

      var i = t("./utils"),
          n = t("./external"),
          o = t("./utf8"),
          h = (i = t("./utils"), t("./zipEntries")),
          s = t("./stream/Crc32Probe"),
          u = t("./nodejsUtils");

      function l(i) {
        return new n.Promise(function (t, e) {
          var r = i.decompressed.getContentWorker().pipe(new s());
          r.on("error", function (t) {
            e(t);
          }).on("end", function () {
            r.streamInfo.crc32 !== i.decompressed.crc32 ? e(new Error("Corrupted zip : CRC32 mismatch")) : t();
          }).resume();
        });
      }

      e.exports = function (t, s) {
        var a = this;
        return s = i.extend(s || {}, {
          base64: !1,
          checkCRC32: !1,
          optimizedBinaryString: !1,
          createFolders: !1,
          decodeFileName: o.utf8decode
        }), u.isNode && u.isStream(t) ? n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", t, !0, s.optimizedBinaryString, s.base64).then(function (t) {
          var e = new h(s);
          return e.load(t), e;
        }).then(function (t) {
          var e = [n.Promise.resolve(t)],
              r = t.files;
          if (s.checkCRC32) for (var i = 0; i < r.length; i++) e.push(l(r[i]));
          return n.Promise.all(e);
        }).then(function (t) {
          for (var e = t.shift(), r = e.files, i = 0; i < r.length; i++) {
            var n = r[i];
            a.file(n.fileNameStr, n.decompressed, {
              binary: !0,
              optimizedBinaryString: !0,
              date: n.date,
              dir: n.dir,
              comment: n.fileCommentStr.length ? n.fileCommentStr : null,
              unixPermissions: n.unixPermissions,
              dosPermissions: n.dosPermissions,
              createFolders: s.createFolders
            });
          }

          return e.zipComment.length && (a.comment = e.zipComment), a;
        });
      };
    }, {
      "./external": 6,
      "./nodejsUtils": 14,
      "./stream/Crc32Probe": 25,
      "./utf8": 31,
      "./utils": 32,
      "./zipEntries": 33
    }],
    12: [function (t, e, r) {
      "use strict";

      var i = t("../utils"),
          n = t("../stream/GenericWorker");

      function s(t, e) {
        n.call(this, "Nodejs stream input adapter for " + t), this._upstreamEnded = !1, this._bindStream(e);
      }

      i.inherits(s, n), s.prototype._bindStream = function (t) {
        var e = this;
        (this._stream = t).pause(), t.on("data", function (t) {
          e.push({
            data: t,
            meta: {
              percent: 0
            }
          });
        }).on("error", function (t) {
          e.isPaused ? this.generatedError = t : e.error(t);
        }).on("end", function () {
          e.isPaused ? e._upstreamEnded = !0 : e.end();
        });
      }, s.prototype.pause = function () {
        return !!n.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, s.prototype.resume = function () {
        return !!n.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, e.exports = s;
    }, {
      "../stream/GenericWorker": 28,
      "../utils": 32
    }],
    13: [function (t, e, r) {
      "use strict";

      var n = t("readable-stream").Readable;

      function i(t, e, r) {
        n.call(this, e), this._helper = t;
        var i = this;
        t.on("data", function (t, e) {
          i.push(t) || i._helper.pause(), r && r(e);
        }).on("error", function (t) {
          i.emit("error", t);
        }).on("end", function () {
          i.push(null);
        });
      }

      t("../utils").inherits(i, n), i.prototype._read = function () {
        this._helper.resume();
      }, e.exports = i;
    }, {
      "../utils": 32,
      "readable-stream": 16
    }],
    14: [function (t, e, r) {
      "use strict";

      e.exports = {
        isNode: "undefined" != typeof Buffer,
        newBufferFrom: function (t, e) {
          if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(t, e);
          if ("number" == typeof t) throw new Error('The "data" argument must not be a number');
          return new Buffer(t, e);
        },
        allocBuffer: function (t) {
          if (Buffer.alloc) return Buffer.alloc(t);
          var e = new Buffer(t);
          return e.fill(0), e;
        },
        isBuffer: function (t) {
          return Buffer.isBuffer(t);
        },
        isStream: function (t) {
          return t && "function" == typeof t.on && "function" == typeof t.pause && "function" == typeof t.resume;
        }
      };
    }, {}],
    15: [function (t, e, r) {
      "use strict";

      function s(t, e, r) {
        var i,
            n = u.getTypeOf(e),
            s = u.extend(r || {}, f);
        s.date = s.date || new Date(), null !== s.compression && (s.compression = s.compression.toUpperCase()), "string" == typeof s.unixPermissions && (s.unixPermissions = parseInt(s.unixPermissions, 8)), s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0), s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0), s.dir && (t = g(t)), s.createFolders && (i = _(t)) && b.call(this, i, !0);
        var a = "string" === n && !1 === s.binary && !1 === s.base64;
        r && void 0 !== r.binary || (s.binary = !a), (e instanceof d && 0 === e.uncompressedSize || s.dir || !e || 0 === e.length) && (s.base64 = !1, s.binary = !0, e = "", s.compression = "STORE", n = "string");
        var o = null;
        o = e instanceof d || e instanceof l ? e : p.isNode && p.isStream(e) ? new m(t, e) : u.prepareContent(t, e, s.binary, s.optimizedBinaryString, s.base64);
        var h = new c(t, o, s);
        this.files[t] = h;
      }

      var n = t("./utf8"),
          u = t("./utils"),
          l = t("./stream/GenericWorker"),
          a = t("./stream/StreamHelper"),
          f = t("./defaults"),
          d = t("./compressedObject"),
          c = t("./zipObject"),
          o = t("./generate"),
          p = t("./nodejsUtils"),
          m = t("./nodejs/NodejsStreamInputAdapter"),
          _ = function (t) {
        "/" === t.slice(-1) && (t = t.substring(0, t.length - 1));
        var e = t.lastIndexOf("/");
        return 0 < e ? t.substring(0, e) : "";
      },
          g = function (t) {
        return "/" !== t.slice(-1) && (t += "/"), t;
      },
          b = function (t, e) {
        return e = void 0 !== e ? e : f.createFolders, t = g(t), this.files[t] || s.call(this, t, null, {
          dir: !0,
          createFolders: e
        }), this.files[t];
      };

      function h(t) {
        return "[object RegExp]" === Object.prototype.toString.call(t);
      }

      var i = {
        load: function () {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        },
        forEach: function (t) {
          var e, r, i;

          for (e in this.files) this.files.hasOwnProperty(e) && (i = this.files[e], (r = e.slice(this.root.length, e.length)) && e.slice(0, this.root.length) === this.root && t(r, i));
        },
        filter: function (r) {
          var i = [];
          return this.forEach(function (t, e) {
            r(t, e) && i.push(e);
          }), i;
        },
        file: function (t, e, r) {
          if (1 !== arguments.length) return t = this.root + t, s.call(this, t, e, r), this;

          if (h(t)) {
            var i = t;
            return this.filter(function (t, e) {
              return !e.dir && i.test(t);
            });
          }

          var n = this.files[this.root + t];
          return n && !n.dir ? n : null;
        },
        folder: function (r) {
          if (!r) return this;
          if (h(r)) return this.filter(function (t, e) {
            return e.dir && r.test(t);
          });
          var t = this.root + r,
              e = b.call(this, t),
              i = this.clone();
          return i.root = e.name, i;
        },
        remove: function (r) {
          r = this.root + r;
          var t = this.files[r];
          if (t || ("/" !== r.slice(-1) && (r += "/"), t = this.files[r]), t && !t.dir) delete this.files[r];else for (var e = this.filter(function (t, e) {
            return e.name.slice(0, r.length) === r;
          }), i = 0; i < e.length; i++) delete this.files[e[i].name];
          return this;
        },
        generate: function (t) {
          throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
        },
        generateInternalStream: function (t) {
          var e,
              r = {};

          try {
            if ((r = u.extend(t || {}, {
              streamFiles: !1,
              compression: "STORE",
              compressionOptions: null,
              type: "",
              platform: "DOS",
              comment: null,
              mimeType: "application/zip",
              encodeFileName: n.utf8encode
            })).type = r.type.toLowerCase(), r.compression = r.compression.toUpperCase(), "binarystring" === r.type && (r.type = "string"), !r.type) throw new Error("No output type specified.");
            u.checkSupport(r.type), "darwin" !== r.platform && "freebsd" !== r.platform && "linux" !== r.platform && "sunos" !== r.platform || (r.platform = "UNIX"), "win32" === r.platform && (r.platform = "DOS");
            var i = r.comment || this.comment || "";
            e = o.generateWorker(this, r, i);
          } catch (t) {
            (e = new l("error")).error(t);
          }

          return new a(e, r.type || "string", r.mimeType);
        },
        generateAsync: function (t, e) {
          return this.generateInternalStream(t).accumulate(e);
        },
        generateNodeStream: function (t, e) {
          return (t = t || {}).type || (t.type = "nodebuffer"), this.generateInternalStream(t).toNodejsStream(e);
        }
      };
      e.exports = i;
    }, {
      "./compressedObject": 2,
      "./defaults": 5,
      "./generate": 9,
      "./nodejs/NodejsStreamInputAdapter": 12,
      "./nodejsUtils": 14,
      "./stream/GenericWorker": 28,
      "./stream/StreamHelper": 29,
      "./utf8": 31,
      "./utils": 32,
      "./zipObject": 35
    }],
    16: [function (t, e, r) {
      e.exports = t("stream");
    }, {
      stream: void 0
    }],
    17: [function (t, e, r) {
      "use strict";

      var i = t("./DataReader");

      function n(t) {
        i.call(this, t);

        for (var e = 0; e < this.data.length; e++) t[e] = 255 & t[e];
      }

      t("../utils").inherits(n, i), n.prototype.byteAt = function (t) {
        return this.data[this.zero + t];
      }, n.prototype.lastIndexOfSignature = function (t) {
        for (var e = t.charCodeAt(0), r = t.charCodeAt(1), i = t.charCodeAt(2), n = t.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === e && this.data[s + 1] === r && this.data[s + 2] === i && this.data[s + 3] === n) return s - this.zero;

        return -1;
      }, n.prototype.readAndCheckSignature = function (t) {
        var e = t.charCodeAt(0),
            r = t.charCodeAt(1),
            i = t.charCodeAt(2),
            n = t.charCodeAt(3),
            s = this.readData(4);
        return e === s[0] && r === s[1] && i === s[2] && n === s[3];
      }, n.prototype.readData = function (t) {
        if (this.checkOffset(t), 0 === t) return [];
        var e = this.data.slice(this.zero + this.index, this.zero + this.index + t);
        return this.index += t, e;
      }, e.exports = n;
    }, {
      "../utils": 32,
      "./DataReader": 18
    }],
    18: [function (t, e, r) {
      "use strict";

      var i = t("../utils");

      function n(t) {
        this.data = t, this.length = t.length, this.index = 0, this.zero = 0;
      }

      n.prototype = {
        checkOffset: function (t) {
          this.checkIndex(this.index + t);
        },
        checkIndex: function (t) {
          if (this.length < this.zero + t || t < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + t + "). Corrupted zip ?");
        },
        setIndex: function (t) {
          this.checkIndex(t), this.index = t;
        },
        skip: function (t) {
          this.setIndex(this.index + t);
        },
        byteAt: function (t) {},
        readInt: function (t) {
          var e,
              r = 0;

          for (this.checkOffset(t), e = this.index + t - 1; e >= this.index; e--) r = (r << 8) + this.byteAt(e);

          return this.index += t, r;
        },
        readString: function (t) {
          return i.transformTo("string", this.readData(t));
        },
        readData: function (t) {},
        lastIndexOfSignature: function (t) {},
        readAndCheckSignature: function (t) {},
        readDate: function () {
          var t = this.readInt(4);
          return new Date(Date.UTC(1980 + (t >> 25 & 127), (t >> 21 & 15) - 1, t >> 16 & 31, t >> 11 & 31, t >> 5 & 63, (31 & t) << 1));
        }
      }, e.exports = n;
    }, {
      "../utils": 32
    }],
    19: [function (t, e, r) {
      "use strict";

      var i = t("./Uint8ArrayReader");

      function n(t) {
        i.call(this, t);
      }

      t("../utils").inherits(n, i), n.prototype.readData = function (t) {
        this.checkOffset(t);
        var e = this.data.slice(this.zero + this.index, this.zero + this.index + t);
        return this.index += t, e;
      }, e.exports = n;
    }, {
      "../utils": 32,
      "./Uint8ArrayReader": 21
    }],
    20: [function (t, e, r) {
      "use strict";

      var i = t("./DataReader");

      function n(t) {
        i.call(this, t);
      }

      t("../utils").inherits(n, i), n.prototype.byteAt = function (t) {
        return this.data.charCodeAt(this.zero + t);
      }, n.prototype.lastIndexOfSignature = function (t) {
        return this.data.lastIndexOf(t) - this.zero;
      }, n.prototype.readAndCheckSignature = function (t) {
        return t === this.readData(4);
      }, n.prototype.readData = function (t) {
        this.checkOffset(t);
        var e = this.data.slice(this.zero + this.index, this.zero + this.index + t);
        return this.index += t, e;
      }, e.exports = n;
    }, {
      "../utils": 32,
      "./DataReader": 18
    }],
    21: [function (t, e, r) {
      "use strict";

      var i = t("./ArrayReader");

      function n(t) {
        i.call(this, t);
      }

      t("../utils").inherits(n, i), n.prototype.readData = function (t) {
        if (this.checkOffset(t), 0 === t) return new Uint8Array(0);
        var e = this.data.subarray(this.zero + this.index, this.zero + this.index + t);
        return this.index += t, e;
      }, e.exports = n;
    }, {
      "../utils": 32,
      "./ArrayReader": 17
    }],
    22: [function (t, e, r) {
      "use strict";

      var i = t("../utils"),
          n = t("../support"),
          s = t("./ArrayReader"),
          a = t("./StringReader"),
          o = t("./NodeBufferReader"),
          h = t("./Uint8ArrayReader");

      e.exports = function (t) {
        var e = i.getTypeOf(t);
        return i.checkSupport(e), "string" !== e || n.uint8array ? "nodebuffer" === e ? new o(t) : n.uint8array ? new h(i.transformTo("uint8array", t)) : new s(i.transformTo("array", t)) : new a(t);
      };
    }, {
      "../support": 30,
      "../utils": 32,
      "./ArrayReader": 17,
      "./NodeBufferReader": 19,
      "./StringReader": 20,
      "./Uint8ArrayReader": 21
    }],
    23: [function (t, e, r) {
      "use strict";

      r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\b";
    }, {}],
    24: [function (t, e, r) {
      "use strict";

      var i = t("./GenericWorker"),
          n = t("../utils");

      function s(t) {
        i.call(this, "ConvertWorker to " + t), this.destType = t;
      }

      n.inherits(s, i), s.prototype.processChunk = function (t) {
        this.push({
          data: n.transformTo(this.destType, t.data),
          meta: t.meta
        });
      }, e.exports = s;
    }, {
      "../utils": 32,
      "./GenericWorker": 28
    }],
    25: [function (t, e, r) {
      "use strict";

      var i = t("./GenericWorker"),
          n = t("../crc32");

      function s() {
        i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }

      t("../utils").inherits(s, i), s.prototype.processChunk = function (t) {
        this.streamInfo.crc32 = n(t.data, this.streamInfo.crc32 || 0), this.push(t);
      }, e.exports = s;
    }, {
      "../crc32": 4,
      "../utils": 32,
      "./GenericWorker": 28
    }],
    26: [function (t, e, r) {
      "use strict";

      var i = t("../utils"),
          n = t("./GenericWorker");

      function s(t) {
        n.call(this, "DataLengthProbe for " + t), this.propName = t, this.withStreamInfo(t, 0);
      }

      i.inherits(s, n), s.prototype.processChunk = function (t) {
        if (t) {
          var e = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = e + t.data.length;
        }

        n.prototype.processChunk.call(this, t);
      }, e.exports = s;
    }, {
      "../utils": 32,
      "./GenericWorker": 28
    }],
    27: [function (t, e, r) {
      "use strict";

      var i = t("../utils"),
          n = t("./GenericWorker");

      function s(t) {
        n.call(this, "DataWorker");
        var e = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, t.then(function (t) {
          e.dataIsReady = !0, e.data = t, e.max = t && t.length || 0, e.type = i.getTypeOf(t), e.isPaused || e._tickAndRepeat();
        }, function (t) {
          e.error(t);
        });
      }

      i.inherits(s, n), s.prototype.cleanUp = function () {
        n.prototype.cleanUp.call(this), this.data = null;
      }, s.prototype.resume = function () {
        return !!n.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [], this)), !0);
      }, s.prototype._tickAndRepeat = function () {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, s.prototype._tick = function () {
        if (this.isPaused || this.isFinished) return !1;
        var t = null,
            e = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max) return this.end();

        switch (this.type) {
          case "string":
            t = this.data.substring(this.index, e);
            break;

          case "uint8array":
            t = this.data.subarray(this.index, e);
            break;

          case "array":
          case "nodebuffer":
            t = this.data.slice(this.index, e);
        }

        return this.index = e, this.push({
          data: t,
          meta: {
            percent: this.max ? this.index / this.max * 100 : 0
          }
        });
      }, e.exports = s;
    }, {
      "../utils": 32,
      "./GenericWorker": 28
    }],
    28: [function (t, e, r) {
      "use strict";

      function i(t) {
        this.name = t || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
          data: [],
          end: [],
          error: []
        }, this.previous = null;
      }

      i.prototype = {
        push: function (t) {
          this.emit("data", t);
        },
        end: function () {
          if (this.isFinished) return !1;
          this.flush();

          try {
            this.emit("end"), this.cleanUp(), this.isFinished = !0;
          } catch (t) {
            this.emit("error", t);
          }

          return !0;
        },
        error: function (t) {
          return !this.isFinished && (this.isPaused ? this.generatedError = t : (this.isFinished = !0, this.emit("error", t), this.previous && this.previous.error(t), this.cleanUp()), !0);
        },
        on: function (t, e) {
          return this._listeners[t].push(e), this;
        },
        cleanUp: function () {
          this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
        },
        emit: function (t, e) {
          if (this._listeners[t]) for (var r = 0; r < this._listeners[t].length; r++) this._listeners[t][r].call(this, e);
        },
        pipe: function (t) {
          return t.registerPrevious(this);
        },
        registerPrevious: function (t) {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.streamInfo = t.streamInfo, this.mergeStreamInfo(), this.previous = t;
          var e = this;
          return t.on("data", function (t) {
            e.processChunk(t);
          }), t.on("end", function () {
            e.end();
          }), t.on("error", function (t) {
            e.error(t);
          }), this;
        },
        pause: function () {
          return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
        },
        resume: function () {
          if (!this.isPaused || this.isFinished) return !1;
          var t = this.isPaused = !1;
          return this.generatedError && (this.error(this.generatedError), t = !0), this.previous && this.previous.resume(), !t;
        },
        flush: function () {},
        processChunk: function (t) {
          this.push(t);
        },
        withStreamInfo: function (t, e) {
          return this.extraStreamInfo[t] = e, this.mergeStreamInfo(), this;
        },
        mergeStreamInfo: function () {
          for (var t in this.extraStreamInfo) this.extraStreamInfo.hasOwnProperty(t) && (this.streamInfo[t] = this.extraStreamInfo[t]);
        },
        lock: function () {
          if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
          this.isLocked = !0, this.previous && this.previous.lock();
        },
        toString: function () {
          var t = "Worker " + this.name;
          return this.previous ? this.previous + " -> " + t : t;
        }
      }, e.exports = i;
    }, {}],
    29: [function (t, e, r) {
      "use strict";

      var h = t("../utils"),
          n = t("./ConvertWorker"),
          s = t("./GenericWorker"),
          u = t("../base64"),
          i = t("../support"),
          a = t("../external"),
          o = null;
      if (i.nodestream) try {
        o = t("../nodejs/NodejsStreamOutputAdapter");
      } catch (t) {}

      function l(t, o) {
        return new a.Promise(function (e, r) {
          var i = [],
              n = t._internalType,
              s = t._outputType,
              a = t._mimeType;
          t.on("data", function (t, e) {
            i.push(t), o && o(e);
          }).on("error", function (t) {
            i = [], r(t);
          }).on("end", function () {
            try {
              var t = function (t, e, r) {
                switch (t) {
                  case "blob":
                    return h.newBlob(h.transformTo("arraybuffer", e), r);

                  case "base64":
                    return u.encode(e);

                  default:
                    return h.transformTo(t, e);
                }
              }(s, function (t, e) {
                var r,
                    i = 0,
                    n = null,
                    s = 0;

                for (r = 0; r < e.length; r++) s += e[r].length;

                switch (t) {
                  case "string":
                    return e.join("");

                  case "array":
                    return Array.prototype.concat.apply([], e);

                  case "uint8array":
                    for (n = new Uint8Array(s), r = 0; r < e.length; r++) n.set(e[r], i), i += e[r].length;

                    return n;

                  case "nodebuffer":
                    return Buffer.concat(e);

                  default:
                    throw new Error("concat : unsupported type '" + t + "'");
                }
              }(n, i), a);

              e(t);
            } catch (t) {
              r(t);
            }

            i = [];
          }).resume();
        });
      }

      function f(t, e, r) {
        var i = e;

        switch (e) {
          case "blob":
          case "arraybuffer":
            i = "uint8array";
            break;

          case "base64":
            i = "string";
        }

        try {
          this._internalType = i, this._outputType = e, this._mimeType = r, h.checkSupport(i), this._worker = t.pipe(new n(i)), t.lock();
        } catch (t) {
          this._worker = new s("error"), this._worker.error(t);
        }
      }

      f.prototype = {
        accumulate: function (t) {
          return l(this, t);
        },
        on: function (t, e) {
          var r = this;
          return "data" === t ? this._worker.on(t, function (t) {
            e.call(r, t.data, t.meta);
          }) : this._worker.on(t, function () {
            h.delay(e, arguments, r);
          }), this;
        },
        resume: function () {
          return h.delay(this._worker.resume, [], this._worker), this;
        },
        pause: function () {
          return this._worker.pause(), this;
        },
        toNodejsStream: function (t) {
          if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
          return new o(this, {
            objectMode: "nodebuffer" !== this._outputType
          }, t);
        }
      }, e.exports = f;
    }, {
      "../base64": 1,
      "../external": 6,
      "../nodejs/NodejsStreamOutputAdapter": 13,
      "../support": 30,
      "../utils": 32,
      "./ConvertWorker": 24,
      "./GenericWorker": 28
    }],
    30: [function (t, e, r) {
      "use strict";

      if (r.base64 = !0, r.array = !0, r.string = !0, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = !1;else {
        var i = new ArrayBuffer(0);

        try {
          r.blob = 0 === new Blob([i], {
            type: "application/zip"
          }).size;
        } catch (t) {
          try {
            var n = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            n.append(i), r.blob = 0 === n.getBlob("application/zip").size;
          } catch (t) {
            r.blob = !1;
          }
        }
      }

      try {
        r.nodestream = !!t("readable-stream").Readable;
      } catch (t) {
        r.nodestream = !1;
      }
    }, {
      "readable-stream": 16
    }],
    31: [function (t, e, s) {
      "use strict";

      for (var o = t("./utils"), h = t("./support"), r = t("./nodejsUtils"), i = t("./stream/GenericWorker"), u = new Array(256), n = 0; n < 256; n++) u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;

      u[254] = u[254] = 1;

      function a() {
        i.call(this, "utf-8 decode"), this.leftOver = null;
      }

      function l() {
        i.call(this, "utf-8 encode");
      }

      s.utf8encode = function (t) {
        return h.nodebuffer ? r.newBufferFrom(t, "utf-8") : function (t) {
          var e,
              r,
              i,
              n,
              s,
              a = t.length,
              o = 0;

          for (n = 0; n < a; n++) 55296 == (64512 & (r = t.charCodeAt(n))) && n + 1 < a && 56320 == (64512 & (i = t.charCodeAt(n + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), n++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;

          for (e = h.uint8array ? new Uint8Array(o) : new Array(o), n = s = 0; s < o; n++) 55296 == (64512 & (r = t.charCodeAt(n))) && n + 1 < a && 56320 == (64512 & (i = t.charCodeAt(n + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), n++), r < 128 ? e[s++] = r : (r < 2048 ? e[s++] = 192 | r >>> 6 : (r < 65536 ? e[s++] = 224 | r >>> 12 : (e[s++] = 240 | r >>> 18, e[s++] = 128 | r >>> 12 & 63), e[s++] = 128 | r >>> 6 & 63), e[s++] = 128 | 63 & r);

          return e;
        }(t);
      }, s.utf8decode = function (t) {
        return h.nodebuffer ? o.transformTo("nodebuffer", t).toString("utf-8") : function (t) {
          var e,
              r,
              i,
              n,
              s = t.length,
              a = new Array(2 * s);

          for (e = r = 0; e < s;) if ((i = t[e++]) < 128) a[r++] = i;else if (4 < (n = u[i])) a[r++] = 65533, e += n - 1;else {
            for (i &= 2 === n ? 31 : 3 === n ? 15 : 7; 1 < n && e < s;) i = i << 6 | 63 & t[e++], n--;

            1 < n ? a[r++] = 65533 : i < 65536 ? a[r++] = i : (i -= 65536, a[r++] = 55296 | i >> 10 & 1023, a[r++] = 56320 | 1023 & i);
          }

          return a.length !== r && (a.subarray ? a = a.subarray(0, r) : a.length = r), o.applyFromCharCode(a);
        }(t = o.transformTo(h.uint8array ? "uint8array" : "array", t));
      }, o.inherits(a, i), a.prototype.processChunk = function (t) {
        var e = o.transformTo(h.uint8array ? "uint8array" : "array", t.data);

        if (this.leftOver && this.leftOver.length) {
          if (h.uint8array) {
            var r = e;
            (e = new Uint8Array(r.length + this.leftOver.length)).set(this.leftOver, 0), e.set(r, this.leftOver.length);
          } else e = this.leftOver.concat(e);

          this.leftOver = null;
        }

        var i = function (t, e) {
          var r;

          for ((e = e || t.length) > t.length && (e = t.length), r = e - 1; 0 <= r && 128 == (192 & t[r]);) r--;

          return r < 0 ? e : 0 === r ? e : r + u[t[r]] > e ? r : e;
        }(e),
            n = e;

        i !== e.length && (h.uint8array ? (n = e.subarray(0, i), this.leftOver = e.subarray(i, e.length)) : (n = e.slice(0, i), this.leftOver = e.slice(i, e.length))), this.push({
          data: s.utf8decode(n),
          meta: t.meta
        });
      }, a.prototype.flush = function () {
        this.leftOver && this.leftOver.length && (this.push({
          data: s.utf8decode(this.leftOver),
          meta: {}
        }), this.leftOver = null);
      }, s.Utf8DecodeWorker = a, o.inherits(l, i), l.prototype.processChunk = function (t) {
        this.push({
          data: s.utf8encode(t.data),
          meta: t.meta
        });
      }, s.Utf8EncodeWorker = l;
    }, {
      "./nodejsUtils": 14,
      "./stream/GenericWorker": 28,
      "./support": 30,
      "./utils": 32
    }],
    32: [function (t, e, a) {
      "use strict";

      var o = t("./support"),
          h = t("./base64"),
          r = t("./nodejsUtils"),
          i = t("set-immediate-shim"),
          u = t("./external");

      function n(t) {
        return t;
      }

      function l(t, e) {
        for (var r = 0; r < t.length; ++r) e[r] = 255 & t.charCodeAt(r);

        return e;
      }

      a.newBlob = function (e, r) {
        a.checkSupport("blob");

        try {
          return new Blob([e], {
            type: r
          });
        } catch (t) {
          try {
            var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return i.append(e), i.getBlob(r);
          } catch (t) {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };

      var s = {
        stringifyByChunk: function (t, e, r) {
          var i = [],
              n = 0,
              s = t.length;
          if (s <= r) return String.fromCharCode.apply(null, t);

          for (; n < s;) "array" === e || "nodebuffer" === e ? i.push(String.fromCharCode.apply(null, t.slice(n, Math.min(n + r, s)))) : i.push(String.fromCharCode.apply(null, t.subarray(n, Math.min(n + r, s)))), n += r;

          return i.join("");
        },
        stringifyByChar: function (t) {
          for (var e = "", r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);

          return e;
        },
        applyCanBeUsed: {
          uint8array: function () {
            try {
              return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
            } catch (t) {
              return !1;
            }
          }(),
          nodebuffer: function () {
            try {
              return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
            } catch (t) {
              return !1;
            }
          }()
        }
      };

      function f(t) {
        var e = 65536,
            r = a.getTypeOf(t),
            i = !0;
        if ("uint8array" === r ? i = s.applyCanBeUsed.uint8array : "nodebuffer" === r && (i = s.applyCanBeUsed.nodebuffer), i) for (; 1 < e;) try {
          return s.stringifyByChunk(t, r, e);
        } catch (t) {
          e = Math.floor(e / 2);
        }
        return s.stringifyByChar(t);
      }

      function d(t, e) {
        for (var r = 0; r < t.length; r++) e[r] = t[r];

        return e;
      }

      a.applyFromCharCode = f;
      var c = {};
      c.string = {
        string: n,
        array: function (t) {
          return l(t, new Array(t.length));
        },
        arraybuffer: function (t) {
          return c.string.uint8array(t).buffer;
        },
        uint8array: function (t) {
          return l(t, new Uint8Array(t.length));
        },
        nodebuffer: function (t) {
          return l(t, r.allocBuffer(t.length));
        }
      }, c.array = {
        string: f,
        array: n,
        arraybuffer: function (t) {
          return new Uint8Array(t).buffer;
        },
        uint8array: function (t) {
          return new Uint8Array(t);
        },
        nodebuffer: function (t) {
          return r.newBufferFrom(t);
        }
      }, c.arraybuffer = {
        string: function (t) {
          return f(new Uint8Array(t));
        },
        array: function (t) {
          return d(new Uint8Array(t), new Array(t.byteLength));
        },
        arraybuffer: n,
        uint8array: function (t) {
          return new Uint8Array(t);
        },
        nodebuffer: function (t) {
          return r.newBufferFrom(new Uint8Array(t));
        }
      }, c.uint8array = {
        string: f,
        array: function (t) {
          return d(t, new Array(t.length));
        },
        arraybuffer: function (t) {
          return t.buffer;
        },
        uint8array: n,
        nodebuffer: function (t) {
          return r.newBufferFrom(t);
        }
      }, c.nodebuffer = {
        string: f,
        array: function (t) {
          return d(t, new Array(t.length));
        },
        arraybuffer: function (t) {
          return c.nodebuffer.uint8array(t).buffer;
        },
        uint8array: function (t) {
          return d(t, new Uint8Array(t.length));
        },
        nodebuffer: n
      }, a.transformTo = function (t, e) {
        if (e = e || "", !t) return e;
        a.checkSupport(t);
        var r = a.getTypeOf(e);
        return c[r][t](e);
      }, a.getTypeOf = function (t) {
        return "string" == typeof t ? "string" : "[object Array]" === Object.prototype.toString.call(t) ? "array" : o.nodebuffer && r.isBuffer(t) ? "nodebuffer" : o.uint8array && t instanceof Uint8Array ? "uint8array" : o.arraybuffer && t instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, a.checkSupport = function (t) {
        if (!o[t.toLowerCase()]) throw new Error(t + " is not supported by this platform");
      }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function (t) {
        var e,
            r,
            i = "";

        for (r = 0; r < (t || "").length; r++) i += "\\x" + ((e = t.charCodeAt(r)) < 16 ? "0" : "") + e.toString(16).toUpperCase();

        return i;
      }, a.delay = function (t, e, r) {
        i(function () {
          t.apply(r || null, e || []);
        });
      }, a.inherits = function (t, e) {
        function r() {}

        r.prototype = e.prototype, t.prototype = new r();
      }, a.extend = function () {
        var t,
            e,
            r = {};

        for (t = 0; t < arguments.length; t++) for (e in arguments[t]) arguments[t].hasOwnProperty(e) && void 0 === r[e] && (r[e] = arguments[t][e]);

        return r;
      }, a.prepareContent = function (r, t, i, n, s) {
        return u.Promise.resolve(t).then(function (i) {
          return o.blob && (i instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(i))) && "undefined" != typeof FileReader ? new u.Promise(function (e, r) {
            var t = new FileReader();
            t.onload = function (t) {
              e(t.target.result);
            }, t.onerror = function (t) {
              r(t.target.error);
            }, t.readAsArrayBuffer(i);
          }) : i;
        }).then(function (t) {
          var e = a.getTypeOf(t);
          return e ? ("arraybuffer" === e ? t = a.transformTo("uint8array", t) : "string" === e && (s ? t = h.decode(t) : i && !0 !== n && (t = function (t) {
            return l(t, o.uint8array ? new Uint8Array(t.length) : new Array(t.length));
          }(t))), t) : u.Promise.reject(new Error("Can't read the data of '" + r + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, {
      "./base64": 1,
      "./external": 6,
      "./nodejsUtils": 14,
      "./support": 30,
      "set-immediate-shim": 54
    }],
    33: [function (t, e, r) {
      "use strict";

      var i = t("./reader/readerFor"),
          n = t("./utils"),
          s = t("./signature"),
          a = t("./zipEntry"),
          o = (t("./utf8"), t("./support"));

      function h(t) {
        this.files = [], this.loadOptions = t;
      }

      h.prototype = {
        checkSignature: function (t) {
          if (!this.reader.readAndCheckSignature(t)) {
            this.reader.index -= 4;
            var e = this.reader.readString(4);
            throw new Error("Corrupted zip or bug: unexpected signature (" + n.pretty(e) + ", expected " + n.pretty(t) + ")");
          }
        },
        isSignature: function (t, e) {
          var r = this.reader.index;
          this.reader.setIndex(t);
          var i = this.reader.readString(4) === e;
          return this.reader.setIndex(r), i;
        },
        readBlockEndOfCentral: function () {
          this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
          var t = this.reader.readData(this.zipCommentLength),
              e = o.uint8array ? "uint8array" : "array",
              r = n.transformTo(e, t);
          this.zipComment = this.loadOptions.decodeFileName(r);
        },
        readBlockZip64EndOfCentral: function () {
          this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};

          for (var t, e, r, i = this.zip64EndOfCentralSize - 44; 0 < i;) t = this.reader.readInt(2), e = this.reader.readInt(4), r = this.reader.readData(e), this.zip64ExtensibleData[t] = {
            id: t,
            length: e,
            value: r
          };
        },
        readBlockZip64EndOfCentralLocator: function () {
          if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
        },
        readLocalFiles: function () {
          var t, e;

          for (t = 0; t < this.files.length; t++) e = this.files[t], this.reader.setIndex(e.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), e.readLocalPart(this.reader), e.handleUTF8(), e.processAttributes();
        },
        readCentralDir: function () {
          var t;

          for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);) (t = new a({
            zip64: this.zip64
          }, this.loadOptions)).readCentralPart(this.reader), this.files.push(t);

          if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
        },
        readEndOfCentral: function () {
          var t = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
          if (t < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
          this.reader.setIndex(t);
          var e = t;

          if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === n.MAX_VALUE_16BITS || this.diskWithCentralDirStart === n.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === n.MAX_VALUE_16BITS || this.centralDirRecords === n.MAX_VALUE_16BITS || this.centralDirSize === n.MAX_VALUE_32BITS || this.centralDirOffset === n.MAX_VALUE_32BITS) {
            if (this.zip64 = !0, (t = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
            if (this.reader.setIndex(t), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
          }

          var r = this.centralDirOffset + this.centralDirSize;
          this.zip64 && (r += 20, r += 12 + this.zip64EndOfCentralSize);
          var i = e - r;
          if (0 < i) this.isSignature(e, s.CENTRAL_FILE_HEADER) || (this.reader.zero = i);else if (i < 0) throw new Error("Corrupted zip: missing " + Math.abs(i) + " bytes.");
        },
        prepareReader: function (t) {
          this.reader = i(t);
        },
        load: function (t) {
          this.prepareReader(t), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
        }
      }, e.exports = h;
    }, {
      "./reader/readerFor": 22,
      "./signature": 23,
      "./support": 30,
      "./utf8": 31,
      "./utils": 32,
      "./zipEntry": 34
    }],
    34: [function (t, e, r) {
      "use strict";

      var i = t("./reader/readerFor"),
          s = t("./utils"),
          n = t("./compressedObject"),
          a = t("./crc32"),
          o = t("./utf8"),
          h = t("./compressions"),
          u = t("./support");

      function l(t, e) {
        this.options = t, this.loadOptions = e;
      }

      l.prototype = {
        isEncrypted: function () {
          return 1 == (1 & this.bitFlag);
        },
        useUTF8: function () {
          return 2048 == (2048 & this.bitFlag);
        },
        readLocalPart: function (t) {
          var e, r;
          if (t.skip(22), this.fileNameLength = t.readInt(2), r = t.readInt(2), this.fileName = t.readData(this.fileNameLength), t.skip(r), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
          if (null === (e = function (t) {
            for (var e in h) if (h.hasOwnProperty(e) && h[e].magic === t) return h[e];

            return null;
          }(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
          this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, e, t.readData(this.compressedSize));
        },
        readCentralPart: function (t) {
          this.versionMadeBy = t.readInt(2), t.skip(2), this.bitFlag = t.readInt(2), this.compressionMethod = t.readString(2), this.date = t.readDate(), this.crc32 = t.readInt(4), this.compressedSize = t.readInt(4), this.uncompressedSize = t.readInt(4);
          var e = t.readInt(2);
          if (this.extraFieldsLength = t.readInt(2), this.fileCommentLength = t.readInt(2), this.diskNumberStart = t.readInt(2), this.internalFileAttributes = t.readInt(2), this.externalFileAttributes = t.readInt(4), this.localHeaderOffset = t.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
          t.skip(e), this.readExtraFields(t), this.parseZIP64ExtraField(t), this.fileComment = t.readData(this.fileCommentLength);
        },
        processAttributes: function () {
          this.unixPermissions = null, this.dosPermissions = null;
          var t = this.versionMadeBy >> 8;
          this.dir = !!(16 & this.externalFileAttributes), 0 == t && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == t && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0);
        },
        parseZIP64ExtraField: function (t) {
          if (this.extraFields[1]) {
            var e = i(this.extraFields[1].value);
            this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4));
          }
        },
        readExtraFields: function (t) {
          var e,
              r,
              i,
              n = t.index + this.extraFieldsLength;

          for (this.extraFields || (this.extraFields = {}); t.index < n;) e = t.readInt(2), r = t.readInt(2), i = t.readData(r), this.extraFields[e] = {
            id: e,
            length: r,
            value: i
          };
        },
        handleUTF8: function () {
          var t = u.uint8array ? "uint8array" : "array";
          if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);else {
            var e = this.findExtraFieldUnicodePath();
            if (null !== e) this.fileNameStr = e;else {
              var r = s.transformTo(t, this.fileName);
              this.fileNameStr = this.loadOptions.decodeFileName(r);
            }
            var i = this.findExtraFieldUnicodeComment();
            if (null !== i) this.fileCommentStr = i;else {
              var n = s.transformTo(t, this.fileComment);
              this.fileCommentStr = this.loadOptions.decodeFileName(n);
            }
          }
        },
        findExtraFieldUnicodePath: function () {
          var t = this.extraFields[28789];

          if (t) {
            var e = i(t.value);
            return 1 !== e.readInt(1) ? null : a(this.fileName) !== e.readInt(4) ? null : o.utf8decode(e.readData(t.length - 5));
          }

          return null;
        },
        findExtraFieldUnicodeComment: function () {
          var t = this.extraFields[25461];

          if (t) {
            var e = i(t.value);
            return 1 !== e.readInt(1) ? null : a(this.fileComment) !== e.readInt(4) ? null : o.utf8decode(e.readData(t.length - 5));
          }

          return null;
        }
      }, e.exports = l;
    }, {
      "./compressedObject": 2,
      "./compressions": 3,
      "./crc32": 4,
      "./reader/readerFor": 22,
      "./support": 30,
      "./utf8": 31,
      "./utils": 32
    }],
    35: [function (t, e, r) {
      "use strict";

      function i(t, e, r) {
        this.name = t, this.dir = r.dir, this.date = r.date, this.comment = r.comment, this.unixPermissions = r.unixPermissions, this.dosPermissions = r.dosPermissions, this._data = e, this._dataBinary = r.binary, this.options = {
          compression: r.compression,
          compressionOptions: r.compressionOptions
        };
      }

      var s = t("./stream/StreamHelper"),
          n = t("./stream/DataWorker"),
          a = t("./utf8"),
          o = t("./compressedObject"),
          h = t("./stream/GenericWorker");
      i.prototype = {
        internalStream: function (t) {
          var e = null,
              r = "string";

          try {
            if (!t) throw new Error("No output type specified.");
            var i = "string" === (r = t.toLowerCase()) || "text" === r;
            "binarystring" !== r && "text" !== r || (r = "string"), e = this._decompressWorker();
            var n = !this._dataBinary;
            n && !i && (e = e.pipe(new a.Utf8EncodeWorker())), !n && i && (e = e.pipe(new a.Utf8DecodeWorker()));
          } catch (t) {
            (e = new h("error")).error(t);
          }

          return new s(e, r, "");
        },
        async: function (t, e) {
          return this.internalStream(t).accumulate(e);
        },
        nodeStream: function (t, e) {
          return this.internalStream(t || "nodebuffer").toNodejsStream(e);
        },
        _compressWorker: function (t, e) {
          if (this._data instanceof o && this._data.compression.magic === t.magic) return this._data.getCompressedWorker();

          var r = this._decompressWorker();

          return this._dataBinary || (r = r.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r, t, e);
        },
        _decompressWorker: function () {
          return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new n(this._data);
        }
      };

      for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function () {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, f = 0; f < u.length; f++) i.prototype[u[f]] = l;

      e.exports = i;
    }, {
      "./compressedObject": 2,
      "./stream/DataWorker": 27,
      "./stream/GenericWorker": 28,
      "./stream/StreamHelper": 29,
      "./utf8": 31
    }],
    36: [function (t, l, e) {
      (function (e) {
        "use strict";

        var r,
            i,
            t = e.MutationObserver || e.WebKitMutationObserver;

        if (t) {
          var n = 0,
              s = new t(u),
              a = e.document.createTextNode("");
          s.observe(a, {
            characterData: !0
          }), r = function () {
            a.data = n = ++n % 2;
          };
        } else if (e.setImmediate || void 0 === e.MessageChannel) r = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function () {
          var t = e.document.createElement("script");
          t.onreadystatechange = function () {
            u(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null;
          }, e.document.documentElement.appendChild(t);
        } : function () {
          setTimeout(u, 0);
        };else {
          var o = new e.MessageChannel();
          o.port1.onmessage = u, r = function () {
            o.port2.postMessage(0);
          };
        }

        var h = [];

        function u() {
          var t, e;
          i = !0;

          for (var r = h.length; r;) {
            for (e = h, h = [], t = -1; ++t < r;) e[t]();

            r = h.length;
          }

          i = !1;
        }

        l.exports = function (t) {
          1 !== h.push(t) || i || r();
        };
      }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}],
    37: [function (t, e, r) {
      "use strict";

      var n = t("immediate");

      function u() {}

      var l = {},
          s = ["REJECTED"],
          a = ["FULFILLED"],
          i = ["PENDING"];

      function o(t) {
        if ("function" != typeof t) throw new TypeError("resolver must be a function");
        this.state = i, this.queue = [], this.outcome = void 0, t !== u && c(this, t);
      }

      function h(t, e, r) {
        this.promise = t, "function" == typeof e && (this.onFulfilled = e, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected);
      }

      function f(e, r, i) {
        n(function () {
          var t;

          try {
            t = r(i);
          } catch (t) {
            return l.reject(e, t);
          }

          t === e ? l.reject(e, new TypeError("Cannot resolve promise with itself")) : l.resolve(e, t);
        });
      }

      function d(t) {
        var e = t && t.then;
        if (t && ("object" == typeof t || "function" == typeof t) && "function" == typeof e) return function () {
          e.apply(t, arguments);
        };
      }

      function c(e, t) {
        var r = !1;

        function i(t) {
          r || (r = !0, l.reject(e, t));
        }

        function n(t) {
          r || (r = !0, l.resolve(e, t));
        }

        var s = p(function () {
          t(n, i);
        });
        "error" === s.status && i(s.value);
      }

      function p(t, e) {
        var r = {};

        try {
          r.value = t(e), r.status = "success";
        } catch (t) {
          r.status = "error", r.value = t;
        }

        return r;
      }

      (e.exports = o).prototype.finally = function (e) {
        if ("function" != typeof e) return this;
        var r = this.constructor;
        return this.then(function (t) {
          return r.resolve(e()).then(function () {
            return t;
          });
        }, function (t) {
          return r.resolve(e()).then(function () {
            throw t;
          });
        });
      }, o.prototype.catch = function (t) {
        return this.then(null, t);
      }, o.prototype.then = function (t, e) {
        if ("function" != typeof t && this.state === a || "function" != typeof e && this.state === s) return this;
        var r = new this.constructor(u);
        this.state !== i ? f(r, this.state === a ? t : e, this.outcome) : this.queue.push(new h(r, t, e));
        return r;
      }, h.prototype.callFulfilled = function (t) {
        l.resolve(this.promise, t);
      }, h.prototype.otherCallFulfilled = function (t) {
        f(this.promise, this.onFulfilled, t);
      }, h.prototype.callRejected = function (t) {
        l.reject(this.promise, t);
      }, h.prototype.otherCallRejected = function (t) {
        f(this.promise, this.onRejected, t);
      }, l.resolve = function (t, e) {
        var r = p(d, e);
        if ("error" === r.status) return l.reject(t, r.value);
        var i = r.value;
        if (i) c(t, i);else {
          t.state = a, t.outcome = e;

          for (var n = -1, s = t.queue.length; ++n < s;) t.queue[n].callFulfilled(e);
        }
        return t;
      }, l.reject = function (t, e) {
        t.state = s, t.outcome = e;

        for (var r = -1, i = t.queue.length; ++r < i;) t.queue[r].callRejected(e);

        return t;
      }, o.resolve = function (t) {
        if (t instanceof this) return t;
        return l.resolve(new this(u), t);
      }, o.reject = function (t) {
        var e = new this(u);
        return l.reject(e, t);
      }, o.all = function (t) {
        var r = this;
        if ("[object Array]" !== Object.prototype.toString.call(t)) return this.reject(new TypeError("must be an array"));
        var i = t.length,
            n = !1;
        if (!i) return this.resolve([]);
        var s = new Array(i),
            a = 0,
            e = -1,
            o = new this(u);

        for (; ++e < i;) h(t[e], e);

        return o;

        function h(t, e) {
          r.resolve(t).then(function (t) {
            s[e] = t, ++a !== i || n || (n = !0, l.resolve(o, s));
          }, function (t) {
            n || (n = !0, l.reject(o, t));
          });
        }
      }, o.race = function (t) {
        var e = this;
        if ("[object Array]" !== Object.prototype.toString.call(t)) return this.reject(new TypeError("must be an array"));
        var r = t.length,
            i = !1;
        if (!r) return this.resolve([]);
        var n = -1,
            s = new this(u);

        for (; ++n < r;) a = t[n], e.resolve(a).then(function (t) {
          i || (i = !0, l.resolve(s, t));
        }, function (t) {
          i || (i = !0, l.reject(s, t));
        });

        var a;
        return s;
      };
    }, {
      immediate: 36
    }],
    38: [function (t, e, r) {
      "use strict";

      var i = {};
      (0, t("./lib/utils/common").assign)(i, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), e.exports = i;
    }, {
      "./lib/deflate": 39,
      "./lib/inflate": 40,
      "./lib/utils/common": 41,
      "./lib/zlib/constants": 44
    }],
    39: [function (t, e, r) {
      "use strict";

      var a = t("./zlib/deflate"),
          o = t("./utils/common"),
          h = t("./utils/strings"),
          n = t("./zlib/messages"),
          s = t("./zlib/zstream"),
          u = Object.prototype.toString,
          l = 0,
          f = -1,
          d = 0,
          c = 8;

      function p(t) {
        if (!(this instanceof p)) return new p(t);
        this.options = o.assign({
          level: f,
          method: c,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: d,
          to: ""
        }, t || {});
        var e = this.options;
        e.raw && 0 < e.windowBits ? e.windowBits = -e.windowBits : e.gzip && 0 < e.windowBits && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
        var r = a.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
        if (r !== l) throw new Error(n[r]);

        if (e.header && a.deflateSetHeader(this.strm, e.header), e.dictionary) {
          var i;
          if (i = "string" == typeof e.dictionary ? h.string2buf(e.dictionary) : "[object ArrayBuffer]" === u.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, (r = a.deflateSetDictionary(this.strm, i)) !== l) throw new Error(n[r]);
          this._dict_set = !0;
        }
      }

      function i(t, e) {
        var r = new p(e);
        if (r.push(t, !0), r.err) throw r.msg || n[r.err];
        return r.result;
      }

      p.prototype.push = function (t, e) {
        var r,
            i,
            n = this.strm,
            s = this.options.chunkSize;
        if (this.ended) return !1;
        i = e === ~~e ? e : !0 === e ? 4 : 0, "string" == typeof t ? n.input = h.string2buf(t) : "[object ArrayBuffer]" === u.call(t) ? n.input = new Uint8Array(t) : n.input = t, n.next_in = 0, n.avail_in = n.input.length;

        do {
          if (0 === n.avail_out && (n.output = new o.Buf8(s), n.next_out = 0, n.avail_out = s), 1 !== (r = a.deflate(n, i)) && r !== l) return this.onEnd(r), !(this.ended = !0);
          0 !== n.avail_out && (0 !== n.avail_in || 4 !== i && 2 !== i) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(n.output, n.next_out))) : this.onData(o.shrinkBuf(n.output, n.next_out)));
        } while ((0 < n.avail_in || 0 === n.avail_out) && 1 !== r);

        return 4 === i ? (r = a.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === l) : 2 !== i || (this.onEnd(l), !(n.avail_out = 0));
      }, p.prototype.onData = function (t) {
        this.chunks.push(t);
      }, p.prototype.onEnd = function (t) {
        t === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
      }, r.Deflate = p, r.deflate = i, r.deflateRaw = function (t, e) {
        return (e = e || {}).raw = !0, i(t, e);
      }, r.gzip = function (t, e) {
        return (e = e || {}).gzip = !0, i(t, e);
      };
    }, {
      "./utils/common": 41,
      "./utils/strings": 42,
      "./zlib/deflate": 46,
      "./zlib/messages": 51,
      "./zlib/zstream": 53
    }],
    40: [function (t, e, r) {
      "use strict";

      var d = t("./zlib/inflate"),
          c = t("./utils/common"),
          p = t("./utils/strings"),
          m = t("./zlib/constants"),
          i = t("./zlib/messages"),
          n = t("./zlib/zstream"),
          s = t("./zlib/gzheader"),
          _ = Object.prototype.toString;

      function a(t) {
        if (!(this instanceof a)) return new a(t);
        this.options = c.assign({
          chunkSize: 16384,
          windowBits: 0,
          to: ""
        }, t || {});
        var e = this.options;
        e.raw && 0 <= e.windowBits && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(0 <= e.windowBits && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), 15 < e.windowBits && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new n(), this.strm.avail_out = 0;
        var r = d.inflateInit2(this.strm, e.windowBits);
        if (r !== m.Z_OK) throw new Error(i[r]);
        this.header = new s(), d.inflateGetHeader(this.strm, this.header);
      }

      function o(t, e) {
        var r = new a(e);
        if (r.push(t, !0), r.err) throw r.msg || i[r.err];
        return r.result;
      }

      a.prototype.push = function (t, e) {
        var r,
            i,
            n,
            s,
            a,
            o,
            h = this.strm,
            u = this.options.chunkSize,
            l = this.options.dictionary,
            f = !1;
        if (this.ended) return !1;
        i = e === ~~e ? e : !0 === e ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof t ? h.input = p.binstring2buf(t) : "[object ArrayBuffer]" === _.call(t) ? h.input = new Uint8Array(t) : h.input = t, h.next_in = 0, h.avail_in = h.input.length;

        do {
          if (0 === h.avail_out && (h.output = new c.Buf8(u), h.next_out = 0, h.avail_out = u), (r = d.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r = d.inflateSetDictionary(this.strm, o)), r === m.Z_BUF_ERROR && !0 === f && (r = m.Z_OK, f = !1), r !== m.Z_STREAM_END && r !== m.Z_OK) return this.onEnd(r), !(this.ended = !0);
          h.next_out && (0 !== h.avail_out && r !== m.Z_STREAM_END && (0 !== h.avail_in || i !== m.Z_FINISH && i !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (n = p.utf8border(h.output, h.next_out), s = h.next_out - n, a = p.buf2string(h.output, n), h.next_out = s, h.avail_out = u - s, s && c.arraySet(h.output, h.output, n, s, 0), this.onData(a)) : this.onData(c.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = !0);
        } while ((0 < h.avail_in || 0 === h.avail_out) && r !== m.Z_STREAM_END);

        return r === m.Z_STREAM_END && (i = m.Z_FINISH), i === m.Z_FINISH ? (r = d.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === m.Z_OK) : i !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
      }, a.prototype.onData = function (t) {
        this.chunks.push(t);
      }, a.prototype.onEnd = function (t) {
        t === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = c.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
      }, r.Inflate = a, r.inflate = o, r.inflateRaw = function (t, e) {
        return (e = e || {}).raw = !0, o(t, e);
      }, r.ungzip = o;
    }, {
      "./utils/common": 41,
      "./utils/strings": 42,
      "./zlib/constants": 44,
      "./zlib/gzheader": 47,
      "./zlib/inflate": 49,
      "./zlib/messages": 51,
      "./zlib/zstream": 53
    }],
    41: [function (t, e, r) {
      "use strict";

      var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
      r.assign = function (t) {
        for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
          var r = e.shift();

          if (r) {
            if ("object" != typeof r) throw new TypeError(r + "must be non-object");

            for (var i in r) r.hasOwnProperty(i) && (t[i] = r[i]);
          }
        }

        return t;
      }, r.shrinkBuf = function (t, e) {
        return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t);
      };
      var n = {
        arraySet: function (t, e, r, i, n) {
          if (e.subarray && t.subarray) t.set(e.subarray(r, r + i), n);else for (var s = 0; s < i; s++) t[n + s] = e[r + s];
        },
        flattenChunks: function (t) {
          var e, r, i, n, s, a;

          for (e = i = 0, r = t.length; e < r; e++) i += t[e].length;

          for (a = new Uint8Array(i), e = n = 0, r = t.length; e < r; e++) s = t[e], a.set(s, n), n += s.length;

          return a;
        }
      },
          s = {
        arraySet: function (t, e, r, i, n) {
          for (var s = 0; s < i; s++) t[n + s] = e[r + s];
        },
        flattenChunks: function (t) {
          return [].concat.apply([], t);
        }
      };
      r.setTyped = function (t) {
        t ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, n)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
      }, r.setTyped(i);
    }, {}],
    42: [function (t, e, r) {
      "use strict";

      var h = t("./common"),
          n = !0,
          s = !0;

      try {
        String.fromCharCode.apply(null, [0]);
      } catch (t) {
        n = !1;
      }

      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (t) {
        s = !1;
      }

      for (var u = new h.Buf8(256), i = 0; i < 256; i++) u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;

      function l(t, e) {
        if (e < 65537 && (t.subarray && s || !t.subarray && n)) return String.fromCharCode.apply(null, h.shrinkBuf(t, e));

        for (var r = "", i = 0; i < e; i++) r += String.fromCharCode(t[i]);

        return r;
      }

      u[254] = u[254] = 1, r.string2buf = function (t) {
        var e,
            r,
            i,
            n,
            s,
            a = t.length,
            o = 0;

        for (n = 0; n < a; n++) 55296 == (64512 & (r = t.charCodeAt(n))) && n + 1 < a && 56320 == (64512 & (i = t.charCodeAt(n + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), n++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;

        for (e = new h.Buf8(o), n = s = 0; s < o; n++) 55296 == (64512 & (r = t.charCodeAt(n))) && n + 1 < a && 56320 == (64512 & (i = t.charCodeAt(n + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), n++), r < 128 ? e[s++] = r : (r < 2048 ? e[s++] = 192 | r >>> 6 : (r < 65536 ? e[s++] = 224 | r >>> 12 : (e[s++] = 240 | r >>> 18, e[s++] = 128 | r >>> 12 & 63), e[s++] = 128 | r >>> 6 & 63), e[s++] = 128 | 63 & r);

        return e;
      }, r.buf2binstring = function (t) {
        return l(t, t.length);
      }, r.binstring2buf = function (t) {
        for (var e = new h.Buf8(t.length), r = 0, i = e.length; r < i; r++) e[r] = t.charCodeAt(r);

        return e;
      }, r.buf2string = function (t, e) {
        var r,
            i,
            n,
            s,
            a = e || t.length,
            o = new Array(2 * a);

        for (r = i = 0; r < a;) if ((n = t[r++]) < 128) o[i++] = n;else if (4 < (s = u[n])) o[i++] = 65533, r += s - 1;else {
          for (n &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && r < a;) n = n << 6 | 63 & t[r++], s--;

          1 < s ? o[i++] = 65533 : n < 65536 ? o[i++] = n : (n -= 65536, o[i++] = 55296 | n >> 10 & 1023, o[i++] = 56320 | 1023 & n);
        }

        return l(o, i);
      }, r.utf8border = function (t, e) {
        var r;

        for ((e = e || t.length) > t.length && (e = t.length), r = e - 1; 0 <= r && 128 == (192 & t[r]);) r--;

        return r < 0 ? e : 0 === r ? e : r + u[t[r]] > e ? r : e;
      };
    }, {
      "./common": 41
    }],
    43: [function (t, e, r) {
      "use strict";

      e.exports = function (t, e, r, i) {
        for (var n = 65535 & t | 0, s = t >>> 16 & 65535 | 0, a = 0; 0 !== r;) {
          for (r -= a = 2e3 < r ? 2e3 : r; s = s + (n = n + e[i++] | 0) | 0, --a;);

          n %= 65521, s %= 65521;
        }

        return n | s << 16 | 0;
      };
    }, {}],
    44: [function (t, e, r) {
      "use strict";

      e.exports = {
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        Z_BUF_ERROR: -5,
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,
        Z_BINARY: 0,
        Z_TEXT: 1,
        Z_UNKNOWN: 2,
        Z_DEFLATED: 8
      };
    }, {}],
    45: [function (t, e, r) {
      "use strict";

      var o = function () {
        for (var t, e = [], r = 0; r < 256; r++) {
          t = r;

          for (var i = 0; i < 8; i++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;

          e[r] = t;
        }

        return e;
      }();

      e.exports = function (t, e, r, i) {
        var n = o,
            s = i + r;
        t ^= -1;

        for (var a = i; a < s; a++) t = t >>> 8 ^ n[255 & (t ^ e[a])];

        return -1 ^ t;
      };
    }, {}],
    46: [function (t, e, r) {
      "use strict";

      var h,
          d = t("../utils/common"),
          u = t("./trees"),
          c = t("./adler32"),
          p = t("./crc32"),
          i = t("./messages"),
          l = 0,
          f = 4,
          m = 0,
          _ = -2,
          g = -1,
          b = 4,
          n = 2,
          v = 8,
          y = 9,
          s = 286,
          a = 30,
          o = 19,
          w = 2 * s + 1,
          k = 15,
          x = 3,
          S = 258,
          z = S + x + 1,
          C = 42,
          E = 113,
          A = 1,
          I = 2,
          O = 3,
          B = 4;

      function R(t, e) {
        return t.msg = i[e], e;
      }

      function T(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }

      function D(t) {
        for (var e = t.length; 0 <= --e;) t[e] = 0;
      }

      function F(t) {
        var e = t.state,
            r = e.pending;
        r > t.avail_out && (r = t.avail_out), 0 !== r && (d.arraySet(t.output, e.pending_buf, e.pending_out, r, t.next_out), t.next_out += r, e.pending_out += r, t.total_out += r, t.avail_out -= r, e.pending -= r, 0 === e.pending && (e.pending_out = 0));
      }

      function N(t, e) {
        u._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, F(t.strm);
      }

      function U(t, e) {
        t.pending_buf[t.pending++] = e;
      }

      function P(t, e) {
        t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e;
      }

      function L(t, e) {
        var r,
            i,
            n = t.max_chain_length,
            s = t.strstart,
            a = t.prev_length,
            o = t.nice_match,
            h = t.strstart > t.w_size - z ? t.strstart - (t.w_size - z) : 0,
            u = t.window,
            l = t.w_mask,
            f = t.prev,
            d = t.strstart + S,
            c = u[s + a - 1],
            p = u[s + a];
        t.prev_length >= t.good_match && (n >>= 2), o > t.lookahead && (o = t.lookahead);

        do {
          if (u[(r = e) + a] === p && u[r + a - 1] === c && u[r] === u[s] && u[++r] === u[s + 1]) {
            s += 2, r++;

            do {} while (u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && s < d);

            if (i = S - (d - s), s = d - S, a < i) {
              if (t.match_start = e, o <= (a = i)) break;
              c = u[s + a - 1], p = u[s + a];
            }
          }
        } while ((e = f[e & l]) > h && 0 != --n);

        return a <= t.lookahead ? a : t.lookahead;
      }

      function j(t) {
        var e,
            r,
            i,
            n,
            s,
            a,
            o,
            h,
            u,
            l,
            f = t.w_size;

        do {
          if (n = t.window_size - t.lookahead - t.strstart, t.strstart >= f + (f - z)) {
            for (d.arraySet(t.window, t.window, f, f, 0), t.match_start -= f, t.strstart -= f, t.block_start -= f, e = r = t.hash_size; i = t.head[--e], t.head[e] = f <= i ? i - f : 0, --r;);

            for (e = r = f; i = t.prev[--e], t.prev[e] = f <= i ? i - f : 0, --r;);

            n += f;
          }

          if (0 === t.strm.avail_in) break;
          if (a = t.strm, o = t.window, h = t.strstart + t.lookahead, u = n, l = void 0, l = a.avail_in, u < l && (l = u), r = 0 === l ? 0 : (a.avail_in -= l, d.arraySet(o, a.input, a.next_in, l, h), 1 === a.state.wrap ? a.adler = c(a.adler, o, l, h) : 2 === a.state.wrap && (a.adler = p(a.adler, o, l, h)), a.next_in += l, a.total_in += l, l), t.lookahead += r, t.lookahead + t.insert >= x) for (s = t.strstart - t.insert, t.ins_h = t.window[s], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[s + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[s + x - 1]) & t.hash_mask, t.prev[s & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = s, s++, t.insert--, !(t.lookahead + t.insert < x)););
        } while (t.lookahead < z && 0 !== t.strm.avail_in);
      }

      function Z(t, e) {
        for (var r, i;;) {
          if (t.lookahead < z) {
            if (j(t), t.lookahead < z && e === l) return A;
            if (0 === t.lookahead) break;
          }

          if (r = 0, t.lookahead >= x && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== r && t.strstart - r <= t.w_size - z && (t.match_length = L(t, r)), t.match_length >= x) {
            if (i = u._tr_tally(t, t.strstart - t.match_start, t.match_length - x), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= x) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, 0 != --t.match_length;);

              t.strstart++;
            } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          } else i = u._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (i && (N(t, !1), 0 === t.strm.avail_out)) return A;
        }

        return t.insert = t.strstart < x - 1 ? t.strstart : x - 1, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : t.last_lit && (N(t, !1), 0 === t.strm.avail_out) ? A : I;
      }

      function W(t, e) {
        for (var r, i, n;;) {
          if (t.lookahead < z) {
            if (j(t), t.lookahead < z && e === l) return A;
            if (0 === t.lookahead) break;
          }

          if (r = 0, t.lookahead >= x && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = x - 1, 0 !== r && t.prev_length < t.max_lazy_match && t.strstart - r <= t.w_size - z && (t.match_length = L(t, r), t.match_length <= 5 && (1 === t.strategy || t.match_length === x && 4096 < t.strstart - t.match_start) && (t.match_length = x - 1)), t.prev_length >= x && t.match_length <= t.prev_length) {
            for (n = t.strstart + t.lookahead - x, i = u._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - x), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= n && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 != --t.prev_length;);

            if (t.match_available = 0, t.match_length = x - 1, t.strstart++, i && (N(t, !1), 0 === t.strm.avail_out)) return A;
          } else if (t.match_available) {
            if ((i = u._tr_tally(t, 0, t.window[t.strstart - 1])) && N(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return A;
          } else t.match_available = 1, t.strstart++, t.lookahead--;
        }

        return t.match_available && (i = u._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < x - 1 ? t.strstart : x - 1, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : t.last_lit && (N(t, !1), 0 === t.strm.avail_out) ? A : I;
      }

      function M(t, e, r, i, n) {
        this.good_length = t, this.max_lazy = e, this.nice_length = r, this.max_chain = i, this.func = n;
      }

      function H() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new d.Buf16(2 * w), this.dyn_dtree = new d.Buf16(2 * (2 * a + 1)), this.bl_tree = new d.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new d.Buf16(k + 1), this.heap = new d.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new d.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }

      function G(t) {
        var e;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = n, (e = t.state).pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? C : E, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = l, u._tr_init(e), m) : R(t, _);
      }

      function K(t) {
        var e = G(t);
        return e === m && function (t) {
          t.window_size = 2 * t.w_size, D(t.head), t.max_lazy_match = h[t.level].max_lazy, t.good_match = h[t.level].good_length, t.nice_match = h[t.level].nice_length, t.max_chain_length = h[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = x - 1, t.match_available = 0, t.ins_h = 0;
        }(t.state), e;
      }

      function Y(t, e, r, i, n, s) {
        if (!t) return _;
        var a = 1;
        if (e === g && (e = 6), i < 0 ? (a = 0, i = -i) : 15 < i && (a = 2, i -= 16), n < 1 || y < n || r !== v || i < 8 || 15 < i || e < 0 || 9 < e || s < 0 || b < s) return R(t, _);
        8 === i && (i = 9);
        var o = new H();
        return (t.state = o).strm = t, o.wrap = a, o.gzhead = null, o.w_bits = i, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = n + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + x - 1) / x), o.window = new d.Buf8(2 * o.w_size), o.head = new d.Buf16(o.hash_size), o.prev = new d.Buf16(o.w_size), o.lit_bufsize = 1 << n + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new d.Buf8(o.pending_buf_size), o.d_buf = 1 * o.lit_bufsize, o.l_buf = 3 * o.lit_bufsize, o.level = e, o.strategy = s, o.method = r, K(t);
      }

      h = [new M(0, 0, 0, 0, function (t, e) {
        var r = 65535;

        for (r > t.pending_buf_size - 5 && (r = t.pending_buf_size - 5);;) {
          if (t.lookahead <= 1) {
            if (j(t), 0 === t.lookahead && e === l) return A;
            if (0 === t.lookahead) break;
          }

          t.strstart += t.lookahead, t.lookahead = 0;
          var i = t.block_start + r;
          if ((0 === t.strstart || t.strstart >= i) && (t.lookahead = t.strstart - i, t.strstart = i, N(t, !1), 0 === t.strm.avail_out)) return A;
          if (t.strstart - t.block_start >= t.w_size - z && (N(t, !1), 0 === t.strm.avail_out)) return A;
        }

        return t.insert = 0, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : (t.strstart > t.block_start && (N(t, !1), t.strm.avail_out), A);
      }), new M(4, 4, 8, 4, Z), new M(4, 5, 16, 8, Z), new M(4, 6, 32, 32, Z), new M(4, 4, 16, 16, W), new M(8, 16, 32, 32, W), new M(8, 16, 128, 128, W), new M(8, 32, 128, 256, W), new M(32, 128, 258, 1024, W), new M(32, 258, 258, 4096, W)], r.deflateInit = function (t, e) {
        return Y(t, e, v, 15, 8, 0);
      }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function (t, e) {
        return t && t.state ? 2 !== t.state.wrap ? _ : (t.state.gzhead = e, m) : _;
      }, r.deflate = function (t, e) {
        var r, i, n, s;
        if (!t || !t.state || 5 < e || e < 0) return t ? R(t, _) : _;
        if (i = t.state, !t.output || !t.input && 0 !== t.avail_in || 666 === i.status && e !== f) return R(t, 0 === t.avail_out ? -5 : _);
        if (i.strm = t, r = i.last_flush, i.last_flush = e, i.status === C) if (2 === i.wrap) t.adler = 0, U(i, 31), U(i, 139), U(i, 8), i.gzhead ? (U(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), U(i, 255 & i.gzhead.time), U(i, i.gzhead.time >> 8 & 255), U(i, i.gzhead.time >> 16 & 255), U(i, i.gzhead.time >> 24 & 255), U(i, 9 === i.level ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), U(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (U(i, 255 & i.gzhead.extra.length), U(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (t.adler = p(t.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = 69) : (U(i, 0), U(i, 0), U(i, 0), U(i, 0), U(i, 0), U(i, 9 === i.level ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), U(i, 3), i.status = E);else {
          var a = v + (i.w_bits - 8 << 4) << 8;
          a |= (2 <= i.strategy || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6, 0 !== i.strstart && (a |= 32), a += 31 - a % 31, i.status = E, P(i, a), 0 !== i.strstart && (P(i, t.adler >>> 16), P(i, 65535 & t.adler)), t.adler = 1;
        }
        if (69 === i.status) if (i.gzhead.extra) {
          for (n = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), F(t), n = i.pending, i.pending !== i.pending_buf_size));) U(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;

          i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = 73);
        } else i.status = 73;
        if (73 === i.status) if (i.gzhead.name) {
          n = i.pending;

          do {
            if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), F(t), n = i.pending, i.pending === i.pending_buf_size)) {
              s = 1;
              break;
            }

            s = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, U(i, s);
          } while (0 !== s);

          i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), 0 === s && (i.gzindex = 0, i.status = 91);
        } else i.status = 91;
        if (91 === i.status) if (i.gzhead.comment) {
          n = i.pending;

          do {
            if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), F(t), n = i.pending, i.pending === i.pending_buf_size)) {
              s = 1;
              break;
            }

            s = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, U(i, s);
          } while (0 !== s);

          i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), 0 === s && (i.status = 103);
        } else i.status = 103;

        if (103 === i.status && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && F(t), i.pending + 2 <= i.pending_buf_size && (U(i, 255 & t.adler), U(i, t.adler >> 8 & 255), t.adler = 0, i.status = E)) : i.status = E), 0 !== i.pending) {
          if (F(t), 0 === t.avail_out) return i.last_flush = -1, m;
        } else if (0 === t.avail_in && T(e) <= T(r) && e !== f) return R(t, -5);

        if (666 === i.status && 0 !== t.avail_in) return R(t, -5);

        if (0 !== t.avail_in || 0 !== i.lookahead || e !== l && 666 !== i.status) {
          var o = 2 === i.strategy ? function (t, e) {
            for (var r;;) {
              if (0 === t.lookahead && (j(t), 0 === t.lookahead)) {
                if (e === l) return A;
                break;
              }

              if (t.match_length = 0, r = u._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, r && (N(t, !1), 0 === t.strm.avail_out)) return A;
            }

            return t.insert = 0, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : t.last_lit && (N(t, !1), 0 === t.strm.avail_out) ? A : I;
          }(i, e) : 3 === i.strategy ? function (t, e) {
            for (var r, i, n, s, a = t.window;;) {
              if (t.lookahead <= S) {
                if (j(t), t.lookahead <= S && e === l) return A;
                if (0 === t.lookahead) break;
              }

              if (t.match_length = 0, t.lookahead >= x && 0 < t.strstart && (i = a[n = t.strstart - 1]) === a[++n] && i === a[++n] && i === a[++n]) {
                s = t.strstart + S;

                do {} while (i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && n < s);

                t.match_length = S - (s - n), t.match_length > t.lookahead && (t.match_length = t.lookahead);
              }

              if (t.match_length >= x ? (r = u._tr_tally(t, 1, t.match_length - x), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (r = u._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), r && (N(t, !1), 0 === t.strm.avail_out)) return A;
            }

            return t.insert = 0, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : t.last_lit && (N(t, !1), 0 === t.strm.avail_out) ? A : I;
          }(i, e) : h[i.level].func(i, e);
          if (o !== O && o !== B || (i.status = 666), o === A || o === O) return 0 === t.avail_out && (i.last_flush = -1), m;
          if (o === I && (1 === e ? u._tr_align(i) : 5 !== e && (u._tr_stored_block(i, 0, 0, !1), 3 === e && (D(i.head), 0 === i.lookahead && (i.strstart = 0, i.block_start = 0, i.insert = 0))), F(t), 0 === t.avail_out)) return i.last_flush = -1, m;
        }

        return e !== f ? m : i.wrap <= 0 ? 1 : (2 === i.wrap ? (U(i, 255 & t.adler), U(i, t.adler >> 8 & 255), U(i, t.adler >> 16 & 255), U(i, t.adler >> 24 & 255), U(i, 255 & t.total_in), U(i, t.total_in >> 8 & 255), U(i, t.total_in >> 16 & 255), U(i, t.total_in >> 24 & 255)) : (P(i, t.adler >>> 16), P(i, 65535 & t.adler)), F(t), 0 < i.wrap && (i.wrap = -i.wrap), 0 !== i.pending ? m : 1);
      }, r.deflateEnd = function (t) {
        var e;
        return t && t.state ? (e = t.state.status) !== C && 69 !== e && 73 !== e && 91 !== e && 103 !== e && e !== E && 666 !== e ? R(t, _) : (t.state = null, e === E ? R(t, -3) : m) : _;
      }, r.deflateSetDictionary = function (t, e) {
        var r,
            i,
            n,
            s,
            a,
            o,
            h,
            u,
            l = e.length;
        if (!t || !t.state) return _;
        if (2 === (s = (r = t.state).wrap) || 1 === s && r.status !== C || r.lookahead) return _;

        for (1 === s && (t.adler = c(t.adler, e, l, 0)), r.wrap = 0, l >= r.w_size && (0 === s && (D(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), u = new d.Buf8(r.w_size), d.arraySet(u, e, l - r.w_size, r.w_size, 0), e = u, l = r.w_size), a = t.avail_in, o = t.next_in, h = t.input, t.avail_in = l, t.next_in = 0, t.input = e, j(r); r.lookahead >= x;) {
          for (i = r.strstart, n = r.lookahead - (x - 1); r.ins_h = (r.ins_h << r.hash_shift ^ r.window[i + x - 1]) & r.hash_mask, r.prev[i & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = i, i++, --n;);

          r.strstart = i, r.lookahead = x - 1, j(r);
        }

        return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = x - 1, r.match_available = 0, t.next_in = o, t.input = h, t.avail_in = a, r.wrap = s, m;
      }, r.deflateInfo = "pako deflate (from Nodeca project)";
    }, {
      "../utils/common": 41,
      "./adler32": 43,
      "./crc32": 45,
      "./messages": 51,
      "./trees": 52
    }],
    47: [function (t, e, r) {
      "use strict";

      e.exports = function () {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}],
    48: [function (t, e, r) {
      "use strict";

      e.exports = function (t, e) {
        var r, i, n, s, a, o, h, u, l, f, d, c, p, m, _, g, b, v, y, w, k, x, S, z, C;

        r = t.state, i = t.next_in, z = t.input, n = i + (t.avail_in - 5), s = t.next_out, C = t.output, a = s - (e - t.avail_out), o = s + (t.avail_out - 257), h = r.dmax, u = r.wsize, l = r.whave, f = r.wnext, d = r.window, c = r.hold, p = r.bits, m = r.lencode, _ = r.distcode, g = (1 << r.lenbits) - 1, b = (1 << r.distbits) - 1;

        t: do {
          p < 15 && (c += z[i++] << p, p += 8, c += z[i++] << p, p += 8), v = m[c & g];

          e: for (;;) {
            if (c >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s++] = 65535 & v;else {
              if (!(16 & y)) {
                if (0 == (64 & y)) {
                  v = m[(65535 & v) + (c & (1 << y) - 1)];
                  continue e;
                }

                if (32 & y) {
                  r.mode = 12;
                  break t;
                }

                t.msg = "invalid literal/length code", r.mode = 30;
                break t;
              }

              w = 65535 & v, (y &= 15) && (p < y && (c += z[i++] << p, p += 8), w += c & (1 << y) - 1, c >>>= y, p -= y), p < 15 && (c += z[i++] << p, p += 8, c += z[i++] << p, p += 8), v = _[c & b];

              r: for (;;) {
                if (c >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                  if (0 == (64 & y)) {
                    v = _[(65535 & v) + (c & (1 << y) - 1)];
                    continue r;
                  }

                  t.msg = "invalid distance code", r.mode = 30;
                  break t;
                }

                if (k = 65535 & v, p < (y &= 15) && (c += z[i++] << p, (p += 8) < y && (c += z[i++] << p, p += 8)), h < (k += c & (1 << y) - 1)) {
                  t.msg = "invalid distance too far back", r.mode = 30;
                  break t;
                }

                if (c >>>= y, p -= y, (y = s - a) < k) {
                  if (l < (y = k - y) && r.sane) {
                    t.msg = "invalid distance too far back", r.mode = 30;
                    break t;
                  }

                  if (S = d, (x = 0) === f) {
                    if (x += u - y, y < w) {
                      for (w -= y; C[s++] = d[x++], --y;);

                      x = s - k, S = C;
                    }
                  } else if (f < y) {
                    if (x += u + f - y, (y -= f) < w) {
                      for (w -= y; C[s++] = d[x++], --y;);

                      if (x = 0, f < w) {
                        for (w -= y = f; C[s++] = d[x++], --y;);

                        x = s - k, S = C;
                      }
                    }
                  } else if (x += f - y, y < w) {
                    for (w -= y; C[s++] = d[x++], --y;);

                    x = s - k, S = C;
                  }

                  for (; 2 < w;) C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;

                  w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                } else {
                  for (x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3););

                  w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                }

                break;
              }
            }
            break;
          }
        } while (i < n && s < o);

        i -= w = p >> 3, c &= (1 << (p -= w << 3)) - 1, t.next_in = i, t.next_out = s, t.avail_in = i < n ? n - i + 5 : 5 - (i - n), t.avail_out = s < o ? o - s + 257 : 257 - (s - o), r.hold = c, r.bits = p;
      };
    }, {}],
    49: [function (t, e, r) {
      "use strict";

      var I = t("../utils/common"),
          O = t("./adler32"),
          B = t("./crc32"),
          R = t("./inffast"),
          T = t("./inftrees"),
          D = 1,
          F = 2,
          N = 0,
          U = -2,
          P = 1,
          i = 852,
          n = 592;

      function L(t) {
        return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
      }

      function s() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }

      function a(t) {
        var e;
        return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = P, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new I.Buf32(i), e.distcode = e.distdyn = new I.Buf32(n), e.sane = 1, e.back = -1, N) : U;
      }

      function o(t) {
        var e;
        return t && t.state ? ((e = t.state).wsize = 0, e.whave = 0, e.wnext = 0, a(t)) : U;
      }

      function h(t, e) {
        var r, i;
        return t && t.state ? (i = t.state, e < 0 ? (r = 0, e = -e) : (r = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || 15 < e) ? U : (null !== i.window && i.wbits !== e && (i.window = null), i.wrap = r, i.wbits = e, o(t))) : U;
      }

      function u(t, e) {
        var r, i;
        return t ? (i = new s(), (t.state = i).window = null, (r = h(t, e)) !== N && (t.state = null), r) : U;
      }

      var l,
          f,
          d = !0;

      function j(t) {
        if (d) {
          var e;

          for (l = new I.Buf32(512), f = new I.Buf32(32), e = 0; e < 144;) t.lens[e++] = 8;

          for (; e < 256;) t.lens[e++] = 9;

          for (; e < 280;) t.lens[e++] = 7;

          for (; e < 288;) t.lens[e++] = 8;

          for (T(D, t.lens, 0, 288, l, 0, t.work, {
            bits: 9
          }), e = 0; e < 32;) t.lens[e++] = 5;

          T(F, t.lens, 0, 32, f, 0, t.work, {
            bits: 5
          }), d = !1;
        }

        t.lencode = l, t.lenbits = 9, t.distcode = f, t.distbits = 5;
      }

      function Z(t, e, r, i) {
        var n,
            s = t.state;
        return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new I.Buf8(s.wsize)), i >= s.wsize ? (I.arraySet(s.window, e, r - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize) : (i < (n = s.wsize - s.wnext) && (n = i), I.arraySet(s.window, e, r - i, n, s.wnext), (i -= n) ? (I.arraySet(s.window, e, r - i, i, 0), s.wnext = i, s.whave = s.wsize) : (s.wnext += n, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += n))), 0;
      }

      r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function (t) {
        return u(t, 15);
      }, r.inflateInit2 = u, r.inflate = function (t, e) {
        var r,
            i,
            n,
            s,
            a,
            o,
            h,
            u,
            l,
            f,
            d,
            c,
            p,
            m,
            _,
            g,
            b,
            v,
            y,
            w,
            k,
            x,
            S,
            z,
            C = 0,
            E = new I.Buf8(4),
            A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

        if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return U;
        12 === (r = t.state).mode && (r.mode = 13), a = t.next_out, n = t.output, h = t.avail_out, s = t.next_in, i = t.input, o = t.avail_in, u = r.hold, l = r.bits, f = o, d = h, x = N;

        t: for (;;) switch (r.mode) {
          case P:
            if (0 === r.wrap) {
              r.mode = 13;
              break;
            }

            for (; l < 16;) {
              if (0 === o) break t;
              o--, u += i[s++] << l, l += 8;
            }

            if (2 & r.wrap && 35615 === u) {
              E[r.check = 0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0), l = u = 0, r.mode = 2;
              break;
            }

            if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & u) << 8) + (u >> 8)) % 31) {
              t.msg = "incorrect header check", r.mode = 30;
              break;
            }

            if (8 != (15 & u)) {
              t.msg = "unknown compression method", r.mode = 30;
              break;
            }

            if (l -= 4, k = 8 + (15 & (u >>>= 4)), 0 === r.wbits) r.wbits = k;else if (k > r.wbits) {
              t.msg = "invalid window size", r.mode = 30;
              break;
            }
            r.dmax = 1 << k, t.adler = r.check = 1, r.mode = 512 & u ? 10 : 12, l = u = 0;
            break;

          case 2:
            for (; l < 16;) {
              if (0 === o) break t;
              o--, u += i[s++] << l, l += 8;
            }

            if (r.flags = u, 8 != (255 & r.flags)) {
              t.msg = "unknown compression method", r.mode = 30;
              break;
            }

            if (57344 & r.flags) {
              t.msg = "unknown header flags set", r.mode = 30;
              break;
            }

            r.head && (r.head.text = u >> 8 & 1), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0, r.mode = 3;

          case 3:
            for (; l < 32;) {
              if (0 === o) break t;
              o--, u += i[s++] << l, l += 8;
            }

            r.head && (r.head.time = u), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, E[2] = u >>> 16 & 255, E[3] = u >>> 24 & 255, r.check = B(r.check, E, 4, 0)), l = u = 0, r.mode = 4;

          case 4:
            for (; l < 16;) {
              if (0 === o) break t;
              o--, u += i[s++] << l, l += 8;
            }

            r.head && (r.head.xflags = 255 & u, r.head.os = u >> 8), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0, r.mode = 5;

          case 5:
            if (1024 & r.flags) {
              for (; l < 16;) {
                if (0 === o) break t;
                o--, u += i[s++] << l, l += 8;
              }

              r.length = u, r.head && (r.head.extra_len = u), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0;
            } else r.head && (r.head.extra = null);

            r.mode = 6;

          case 6:
            if (1024 & r.flags && (o < (c = r.length) && (c = o), c && (r.head && (k = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), I.arraySet(r.head.extra, i, s, c, k)), 512 & r.flags && (r.check = B(r.check, i, c, s)), o -= c, s += c, r.length -= c), r.length)) break t;
            r.length = 0, r.mode = 7;

          case 7:
            if (2048 & r.flags) {
              if (0 === o) break t;

              for (c = 0; k = i[s + c++], r.head && k && r.length < 65536 && (r.head.name += String.fromCharCode(k)), k && c < o;);

              if (512 & r.flags && (r.check = B(r.check, i, c, s)), o -= c, s += c, k) break t;
            } else r.head && (r.head.name = null);

            r.length = 0, r.mode = 8;

          case 8:
            if (4096 & r.flags) {
              if (0 === o) break t;

              for (c = 0; k = i[s + c++], r.head && k && r.length < 65536 && (r.head.comment += String.fromCharCode(k)), k && c < o;);

              if (512 & r.flags && (r.check = B(r.check, i, c, s)), o -= c, s += c, k) break t;
            } else r.head && (r.head.comment = null);

            r.mode = 9;

          case 9:
            if (512 & r.flags) {
              for (; l < 16;) {
                if (0 === o) break t;
                o--, u += i[s++] << l, l += 8;
              }

              if (u !== (65535 & r.check)) {
                t.msg = "header crc mismatch", r.mode = 30;
                break;
              }

              l = u = 0;
            }

            r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), t.adler = r.check = 0, r.mode = 12;
            break;

          case 10:
            for (; l < 32;) {
              if (0 === o) break t;
              o--, u += i[s++] << l, l += 8;
            }

            t.adler = r.check = L(u), l = u = 0, r.mode = 11;

          case 11:
            if (0 === r.havedict) return t.next_out = a, t.avail_out = h, t.next_in = s, t.avail_in = o, r.hold = u, r.bits = l, 2;
            t.adler = r.check = 1, r.mode = 12;

          case 12:
            if (5 === e || 6 === e) break t;

          case 13:
            if (r.last) {
              u >>>= 7 & l, l -= 7 & l, r.mode = 27;
              break;
            }

            for (; l < 3;) {
              if (0 === o) break t;
              o--, u += i[s++] << l, l += 8;
            }

            switch (r.last = 1 & u, l -= 1, 3 & (u >>>= 1)) {
              case 0:
                r.mode = 14;
                break;

              case 1:
                if (j(r), r.mode = 20, 6 !== e) break;
                u >>>= 2, l -= 2;
                break t;

              case 2:
                r.mode = 17;
                break;

              case 3:
                t.msg = "invalid block type", r.mode = 30;
            }

            u >>>= 2, l -= 2;
            break;

          case 14:
            for (u >>>= 7 & l, l -= 7 & l; l < 32;) {
              if (0 === o) break t;
              o--, u += i[s++] << l, l += 8;
            }

            if ((65535 & u) != (u >>> 16 ^ 65535)) {
              t.msg = "invalid stored block lengths", r.mode = 30;
              break;
            }

            if (r.length = 65535 & u, l = u = 0, r.mode = 15, 6 === e) break t;

          case 15:
            r.mode = 16;

          case 16:
            if (c = r.length) {
              if (o < c && (c = o), h < c && (c = h), 0 === c) break t;
              I.arraySet(n, i, s, c, a), o -= c, s += c, h -= c, a += c, r.length -= c;
              break;
            }

            r.mode = 12;
            break;

          case 17:
            for (; l < 14;) {
              if (0 === o) break t;
              o--, u += i[s++] << l, l += 8;
            }

            if (r.nlen = 257 + (31 & u), u >>>= 5, l -= 5, r.ndist = 1 + (31 & u), u >>>= 5, l -= 5, r.ncode = 4 + (15 & u), u >>>= 4, l -= 4, 286 < r.nlen || 30 < r.ndist) {
              t.msg = "too many length or distance symbols", r.mode = 30;
              break;
            }

            r.have = 0, r.mode = 18;

          case 18:
            for (; r.have < r.ncode;) {
              for (; l < 3;) {
                if (0 === o) break t;
                o--, u += i[s++] << l, l += 8;
              }

              r.lens[A[r.have++]] = 7 & u, u >>>= 3, l -= 3;
            }

            for (; r.have < 19;) r.lens[A[r.have++]] = 0;

            if (r.lencode = r.lendyn, r.lenbits = 7, S = {
              bits: r.lenbits
            }, x = T(0, r.lens, 0, 19, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
              t.msg = "invalid code lengths set", r.mode = 30;
              break;
            }

            r.have = 0, r.mode = 19;

          case 19:
            for (; r.have < r.nlen + r.ndist;) {
              for (; g = (C = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);) {
                if (0 === o) break t;
                o--, u += i[s++] << l, l += 8;
              }

              if (b < 16) u >>>= _, l -= _, r.lens[r.have++] = b;else {
                if (16 === b) {
                  for (z = _ + 2; l < z;) {
                    if (0 === o) break t;
                    o--, u += i[s++] << l, l += 8;
                  }

                  if (u >>>= _, l -= _, 0 === r.have) {
                    t.msg = "invalid bit length repeat", r.mode = 30;
                    break;
                  }

                  k = r.lens[r.have - 1], c = 3 + (3 & u), u >>>= 2, l -= 2;
                } else if (17 === b) {
                  for (z = _ + 3; l < z;) {
                    if (0 === o) break t;
                    o--, u += i[s++] << l, l += 8;
                  }

                  l -= _, k = 0, c = 3 + (7 & (u >>>= _)), u >>>= 3, l -= 3;
                } else {
                  for (z = _ + 7; l < z;) {
                    if (0 === o) break t;
                    o--, u += i[s++] << l, l += 8;
                  }

                  l -= _, k = 0, c = 11 + (127 & (u >>>= _)), u >>>= 7, l -= 7;
                }

                if (r.have + c > r.nlen + r.ndist) {
                  t.msg = "invalid bit length repeat", r.mode = 30;
                  break;
                }

                for (; c--;) r.lens[r.have++] = k;
              }
            }

            if (30 === r.mode) break;

            if (0 === r.lens[256]) {
              t.msg = "invalid code -- missing end-of-block", r.mode = 30;
              break;
            }

            if (r.lenbits = 9, S = {
              bits: r.lenbits
            }, x = T(D, r.lens, 0, r.nlen, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
              t.msg = "invalid literal/lengths set", r.mode = 30;
              break;
            }

            if (r.distbits = 6, r.distcode = r.distdyn, S = {
              bits: r.distbits
            }, x = T(F, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, S), r.distbits = S.bits, x) {
              t.msg = "invalid distances set", r.mode = 30;
              break;
            }

            if (r.mode = 20, 6 === e) break t;

          case 20:
            r.mode = 21;

          case 21:
            if (6 <= o && 258 <= h) {
              t.next_out = a, t.avail_out = h, t.next_in = s, t.avail_in = o, r.hold = u, r.bits = l, R(t, d), a = t.next_out, n = t.output, h = t.avail_out, s = t.next_in, i = t.input, o = t.avail_in, u = r.hold, l = r.bits, 12 === r.mode && (r.back = -1);
              break;
            }

            for (r.back = 0; g = (C = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);) {
              if (0 === o) break t;
              o--, u += i[s++] << l, l += 8;
            }

            if (g && 0 == (240 & g)) {
              for (v = _, y = g, w = b; g = (C = r.lencode[w + ((u & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l);) {
                if (0 === o) break t;
                o--, u += i[s++] << l, l += 8;
              }

              u >>>= v, l -= v, r.back += v;
            }

            if (u >>>= _, l -= _, r.back += _, r.length = b, 0 === g) {
              r.mode = 26;
              break;
            }

            if (32 & g) {
              r.back = -1, r.mode = 12;
              break;
            }

            if (64 & g) {
              t.msg = "invalid literal/length code", r.mode = 30;
              break;
            }

            r.extra = 15 & g, r.mode = 22;

          case 22:
            if (r.extra) {
              for (z = r.extra; l < z;) {
                if (0 === o) break t;
                o--, u += i[s++] << l, l += 8;
              }

              r.length += u & (1 << r.extra) - 1, u >>>= r.extra, l -= r.extra, r.back += r.extra;
            }

            r.was = r.length, r.mode = 23;

          case 23:
            for (; g = (C = r.distcode[u & (1 << r.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);) {
              if (0 === o) break t;
              o--, u += i[s++] << l, l += 8;
            }

            if (0 == (240 & g)) {
              for (v = _, y = g, w = b; g = (C = r.distcode[w + ((u & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l);) {
                if (0 === o) break t;
                o--, u += i[s++] << l, l += 8;
              }

              u >>>= v, l -= v, r.back += v;
            }

            if (u >>>= _, l -= _, r.back += _, 64 & g) {
              t.msg = "invalid distance code", r.mode = 30;
              break;
            }

            r.offset = b, r.extra = 15 & g, r.mode = 24;

          case 24:
            if (r.extra) {
              for (z = r.extra; l < z;) {
                if (0 === o) break t;
                o--, u += i[s++] << l, l += 8;
              }

              r.offset += u & (1 << r.extra) - 1, u >>>= r.extra, l -= r.extra, r.back += r.extra;
            }

            if (r.offset > r.dmax) {
              t.msg = "invalid distance too far back", r.mode = 30;
              break;
            }

            r.mode = 25;

          case 25:
            if (0 === h) break t;

            if (c = d - h, r.offset > c) {
              if ((c = r.offset - c) > r.whave && r.sane) {
                t.msg = "invalid distance too far back", r.mode = 30;
                break;
              }

              p = c > r.wnext ? (c -= r.wnext, r.wsize - c) : r.wnext - c, c > r.length && (c = r.length), m = r.window;
            } else m = n, p = a - r.offset, c = r.length;

            for (h < c && (c = h), h -= c, r.length -= c; n[a++] = m[p++], --c;);

            0 === r.length && (r.mode = 21);
            break;

          case 26:
            if (0 === h) break t;
            n[a++] = r.length, h--, r.mode = 21;
            break;

          case 27:
            if (r.wrap) {
              for (; l < 32;) {
                if (0 === o) break t;
                o--, u |= i[s++] << l, l += 8;
              }

              if (d -= h, t.total_out += d, r.total += d, d && (t.adler = r.check = r.flags ? B(r.check, n, d, a - d) : O(r.check, n, d, a - d)), d = h, (r.flags ? u : L(u)) !== r.check) {
                t.msg = "incorrect data check", r.mode = 30;
                break;
              }

              l = u = 0;
            }

            r.mode = 28;

          case 28:
            if (r.wrap && r.flags) {
              for (; l < 32;) {
                if (0 === o) break t;
                o--, u += i[s++] << l, l += 8;
              }

              if (u !== (4294967295 & r.total)) {
                t.msg = "incorrect length check", r.mode = 30;
                break;
              }

              l = u = 0;
            }

            r.mode = 29;

          case 29:
            x = 1;
            break t;

          case 30:
            x = -3;
            break t;

          case 31:
            return -4;

          case 32:
          default:
            return U;
        }

        return t.next_out = a, t.avail_out = h, t.next_in = s, t.avail_in = o, r.hold = u, r.bits = l, (r.wsize || d !== t.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== e)) && Z(t, t.output, t.next_out, d - t.avail_out) ? (r.mode = 31, -4) : (f -= t.avail_in, d -= t.avail_out, t.total_in += f, t.total_out += d, r.total += d, r.wrap && d && (t.adler = r.check = r.flags ? B(r.check, n, d, t.next_out - d) : O(r.check, n, d, t.next_out - d)), t.data_type = r.bits + (r.last ? 64 : 0) + (12 === r.mode ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0), (0 == f && 0 === d || 4 === e) && x === N && (x = -5), x);
      }, r.inflateEnd = function (t) {
        if (!t || !t.state) return U;
        var e = t.state;
        return e.window && (e.window = null), t.state = null, N;
      }, r.inflateGetHeader = function (t, e) {
        var r;
        return t && t.state ? 0 == (2 & (r = t.state).wrap) ? U : ((r.head = e).done = !1, N) : U;
      }, r.inflateSetDictionary = function (t, e) {
        var r,
            i = e.length;
        return t && t.state ? 0 !== (r = t.state).wrap && 11 !== r.mode ? U : 11 === r.mode && O(1, e, i, 0) !== r.check ? -3 : Z(t, e, i, i) ? (r.mode = 31, -4) : (r.havedict = 1, N) : U;
      }, r.inflateInfo = "pako inflate (from Nodeca project)";
    }, {
      "../utils/common": 41,
      "./adler32": 43,
      "./crc32": 45,
      "./inffast": 48,
      "./inftrees": 50
    }],
    50: [function (t, e, r) {
      "use strict";

      var D = t("../utils/common"),
          F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
          N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
          U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
          P = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];

      e.exports = function (t, e, r, i, n, s, a, o) {
        var h,
            u,
            l,
            f,
            d,
            c,
            p,
            m,
            _,
            g = o.bits,
            b = 0,
            v = 0,
            y = 0,
            w = 0,
            k = 0,
            x = 0,
            S = 0,
            z = 0,
            C = 0,
            E = 0,
            A = null,
            I = 0,
            O = new D.Buf16(16),
            B = new D.Buf16(16),
            R = null,
            T = 0;

        for (b = 0; b <= 15; b++) O[b] = 0;

        for (v = 0; v < i; v++) O[e[r + v]]++;

        for (k = g, w = 15; 1 <= w && 0 === O[w]; w--);

        if (w < k && (k = w), 0 === w) return n[s++] = 20971520, n[s++] = 20971520, o.bits = 1, 0;

        for (y = 1; y < w && 0 === O[y]; y++);

        for (k < y && (k = y), b = z = 1; b <= 15; b++) if (z <<= 1, (z -= O[b]) < 0) return -1;

        if (0 < z && (0 === t || 1 !== w)) return -1;

        for (B[1] = 0, b = 1; b < 15; b++) B[b + 1] = B[b] + O[b];

        for (v = 0; v < i; v++) 0 !== e[r + v] && (a[B[e[r + v]]++] = v);

        if (c = 0 === t ? (A = R = a, 19) : 1 === t ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, d = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === t && 852 < C || 2 === t && 592 < C) return 1;

        for (;;) {
          for (p = b - S, _ = a[v] < c ? (m = 0, a[v]) : a[v] > c ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; n[d + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u;);

          for (h = 1 << b - 1; E & h;) h >>= 1;

          if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
            if (b === w) break;
            b = e[r + a[v]];
          }

          if (k < b && (E & f) !== l) {
            for (0 === S && (S = k), d += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0);) x++, z <<= 1;

            if (C += 1 << x, 1 === t && 852 < C || 2 === t && 592 < C) return 1;
            n[l = E & f] = k << 24 | x << 16 | d - s | 0;
          }
        }

        return 0 !== E && (n[d + E] = b - S << 24 | 64 << 16 | 0), o.bits = k, 0;
      };
    }, {
      "../utils/common": 41
    }],
    51: [function (t, e, r) {
      "use strict";

      e.exports = {
        2: "need dictionary",
        1: "stream end",
        0: "",
        "-1": "file error",
        "-2": "stream error",
        "-3": "data error",
        "-4": "insufficient memory",
        "-5": "buffer error",
        "-6": "incompatible version"
      };
    }, {}],
    52: [function (t, e, r) {
      "use strict";

      var n = t("../utils/common"),
          o = 0,
          h = 1;

      function i(t) {
        for (var e = t.length; 0 <= --e;) t[e] = 0;
      }

      var s = 0,
          a = 29,
          u = 256,
          l = u + 1 + a,
          f = 30,
          d = 19,
          _ = 2 * l + 1,
          g = 15,
          c = 16,
          p = 7,
          m = 256,
          b = 16,
          v = 17,
          y = 18,
          w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
          k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
          x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
          S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
          z = new Array(2 * (l + 2));

      i(z);
      var C = new Array(2 * f);
      i(C);
      var E = new Array(512);
      i(E);
      var A = new Array(256);
      i(A);
      var I = new Array(a);
      i(I);
      var O,
          B,
          R,
          T = new Array(f);

      function D(t, e, r, i, n) {
        this.static_tree = t, this.extra_bits = e, this.extra_base = r, this.elems = i, this.max_length = n, this.has_stree = t && t.length;
      }

      function F(t, e) {
        this.dyn_tree = t, this.max_code = 0, this.stat_desc = e;
      }

      function N(t) {
        return t < 256 ? E[t] : E[256 + (t >>> 7)];
      }

      function U(t, e) {
        t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255;
      }

      function P(t, e, r) {
        t.bi_valid > c - r ? (t.bi_buf |= e << t.bi_valid & 65535, U(t, t.bi_buf), t.bi_buf = e >> c - t.bi_valid, t.bi_valid += r - c) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += r);
      }

      function L(t, e, r) {
        P(t, r[2 * e], r[2 * e + 1]);
      }

      function j(t, e) {
        for (var r = 0; r |= 1 & t, t >>>= 1, r <<= 1, 0 < --e;);

        return r >>> 1;
      }

      function Z(t, e, r) {
        var i,
            n,
            s = new Array(g + 1),
            a = 0;

        for (i = 1; i <= g; i++) s[i] = a = a + r[i - 1] << 1;

        for (n = 0; n <= e; n++) {
          var o = t[2 * n + 1];
          0 !== o && (t[2 * n] = j(s[o]++, o));
        }
      }

      function W(t) {
        var e;

        for (e = 0; e < l; e++) t.dyn_ltree[2 * e] = 0;

        for (e = 0; e < f; e++) t.dyn_dtree[2 * e] = 0;

        for (e = 0; e < d; e++) t.bl_tree[2 * e] = 0;

        t.dyn_ltree[2 * m] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0;
      }

      function M(t) {
        8 < t.bi_valid ? U(t, t.bi_buf) : 0 < t.bi_valid && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
      }

      function H(t, e, r, i) {
        var n = 2 * e,
            s = 2 * r;
        return t[n] < t[s] || t[n] === t[s] && i[e] <= i[r];
      }

      function G(t, e, r) {
        for (var i = t.heap[r], n = r << 1; n <= t.heap_len && (n < t.heap_len && H(e, t.heap[n + 1], t.heap[n], t.depth) && n++, !H(e, i, t.heap[n], t.depth));) t.heap[r] = t.heap[n], r = n, n <<= 1;

        t.heap[r] = i;
      }

      function K(t, e, r) {
        var i,
            n,
            s,
            a,
            o = 0;
        if (0 !== t.last_lit) for (; i = t.pending_buf[t.d_buf + 2 * o] << 8 | t.pending_buf[t.d_buf + 2 * o + 1], n = t.pending_buf[t.l_buf + o], o++, 0 === i ? L(t, n, e) : (L(t, (s = A[n]) + u + 1, e), 0 !== (a = w[s]) && P(t, n -= I[s], a), L(t, s = N(--i), r), 0 !== (a = k[s]) && P(t, i -= T[s], a)), o < t.last_lit;);
        L(t, m, e);
      }

      function Y(t, e) {
        var r,
            i,
            n,
            s = e.dyn_tree,
            a = e.stat_desc.static_tree,
            o = e.stat_desc.has_stree,
            h = e.stat_desc.elems,
            u = -1;

        for (t.heap_len = 0, t.heap_max = _, r = 0; r < h; r++) 0 !== s[2 * r] ? (t.heap[++t.heap_len] = u = r, t.depth[r] = 0) : s[2 * r + 1] = 0;

        for (; t.heap_len < 2;) s[2 * (n = t.heap[++t.heap_len] = u < 2 ? ++u : 0)] = 1, t.depth[n] = 0, t.opt_len--, o && (t.static_len -= a[2 * n + 1]);

        for (e.max_code = u, r = t.heap_len >> 1; 1 <= r; r--) G(t, s, r);

        for (n = h; r = t.heap[1], t.heap[1] = t.heap[t.heap_len--], G(t, s, 1), i = t.heap[1], t.heap[--t.heap_max] = r, t.heap[--t.heap_max] = i, s[2 * n] = s[2 * r] + s[2 * i], t.depth[n] = (t.depth[r] >= t.depth[i] ? t.depth[r] : t.depth[i]) + 1, s[2 * r + 1] = s[2 * i + 1] = n, t.heap[1] = n++, G(t, s, 1), 2 <= t.heap_len;);

        t.heap[--t.heap_max] = t.heap[1], function (t, e) {
          var r,
              i,
              n,
              s,
              a,
              o,
              h = e.dyn_tree,
              u = e.max_code,
              l = e.stat_desc.static_tree,
              f = e.stat_desc.has_stree,
              d = e.stat_desc.extra_bits,
              c = e.stat_desc.extra_base,
              p = e.stat_desc.max_length,
              m = 0;

          for (s = 0; s <= g; s++) t.bl_count[s] = 0;

          for (h[2 * t.heap[t.heap_max] + 1] = 0, r = t.heap_max + 1; r < _; r++) p < (s = h[2 * h[2 * (i = t.heap[r]) + 1] + 1] + 1) && (s = p, m++), h[2 * i + 1] = s, u < i || (t.bl_count[s]++, a = 0, c <= i && (a = d[i - c]), o = h[2 * i], t.opt_len += o * (s + a), f && (t.static_len += o * (l[2 * i + 1] + a)));

          if (0 !== m) {
            do {
              for (s = p - 1; 0 === t.bl_count[s];) s--;

              t.bl_count[s]--, t.bl_count[s + 1] += 2, t.bl_count[p]--, m -= 2;
            } while (0 < m);

            for (s = p; 0 !== s; s--) for (i = t.bl_count[s]; 0 !== i;) u < (n = t.heap[--r]) || (h[2 * n + 1] !== s && (t.opt_len += (s - h[2 * n + 1]) * h[2 * n], h[2 * n + 1] = s), i--);
          }
        }(t, e), Z(s, u, t.bl_count);
      }

      function X(t, e, r) {
        var i,
            n,
            s = -1,
            a = e[1],
            o = 0,
            h = 7,
            u = 4;

        for (0 === a && (h = 138, u = 3), e[2 * (r + 1) + 1] = 65535, i = 0; i <= r; i++) n = a, a = e[2 * (i + 1) + 1], ++o < h && n === a || (o < u ? t.bl_tree[2 * n] += o : 0 !== n ? (n !== s && t.bl_tree[2 * n]++, t.bl_tree[2 * b]++) : o <= 10 ? t.bl_tree[2 * v]++ : t.bl_tree[2 * y]++, s = n, u = (o = 0) === a ? (h = 138, 3) : n === a ? (h = 6, 3) : (h = 7, 4));
      }

      function V(t, e, r) {
        var i,
            n,
            s = -1,
            a = e[1],
            o = 0,
            h = 7,
            u = 4;

        for (0 === a && (h = 138, u = 3), i = 0; i <= r; i++) if (n = a, a = e[2 * (i + 1) + 1], !(++o < h && n === a)) {
          if (o < u) for (; L(t, n, t.bl_tree), 0 != --o;);else 0 !== n ? (n !== s && (L(t, n, t.bl_tree), o--), L(t, b, t.bl_tree), P(t, o - 3, 2)) : o <= 10 ? (L(t, v, t.bl_tree), P(t, o - 3, 3)) : (L(t, y, t.bl_tree), P(t, o - 11, 7));
          s = n, u = (o = 0) === a ? (h = 138, 3) : n === a ? (h = 6, 3) : (h = 7, 4);
        }
      }

      i(T);
      var q = !1;

      function J(t, e, r, i) {
        P(t, (s << 1) + (i ? 1 : 0), 3), function (t, e, r, i) {
          M(t), i && (U(t, r), U(t, ~r)), n.arraySet(t.pending_buf, t.window, e, r, t.pending), t.pending += r;
        }(t, e, r, !0);
      }

      r._tr_init = function (t) {
        q || (function () {
          var t,
              e,
              r,
              i,
              n,
              s = new Array(g + 1);

          for (i = r = 0; i < a - 1; i++) for (I[i] = r, t = 0; t < 1 << w[i]; t++) A[r++] = i;

          for (A[r - 1] = i, i = n = 0; i < 16; i++) for (T[i] = n, t = 0; t < 1 << k[i]; t++) E[n++] = i;

          for (n >>= 7; i < f; i++) for (T[i] = n << 7, t = 0; t < 1 << k[i] - 7; t++) E[256 + n++] = i;

          for (e = 0; e <= g; e++) s[e] = 0;

          for (t = 0; t <= 143;) z[2 * t + 1] = 8, t++, s[8]++;

          for (; t <= 255;) z[2 * t + 1] = 9, t++, s[9]++;

          for (; t <= 279;) z[2 * t + 1] = 7, t++, s[7]++;

          for (; t <= 287;) z[2 * t + 1] = 8, t++, s[8]++;

          for (Z(z, l + 1, s), t = 0; t < f; t++) C[2 * t + 1] = 5, C[2 * t] = j(t, 5);

          O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, d, p);
        }(), q = !0), t.l_desc = new F(t.dyn_ltree, O), t.d_desc = new F(t.dyn_dtree, B), t.bl_desc = new F(t.bl_tree, R), t.bi_buf = 0, t.bi_valid = 0, W(t);
      }, r._tr_stored_block = J, r._tr_flush_block = function (t, e, r, i) {
        var n,
            s,
            a = 0;
        0 < t.level ? (2 === t.strm.data_type && (t.strm.data_type = function (t) {
          var e,
              r = 4093624447;

          for (e = 0; e <= 31; e++, r >>>= 1) if (1 & r && 0 !== t.dyn_ltree[2 * e]) return o;

          if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return h;

          for (e = 32; e < u; e++) if (0 !== t.dyn_ltree[2 * e]) return h;

          return o;
        }(t)), Y(t, t.l_desc), Y(t, t.d_desc), a = function (t) {
          var e;

          for (X(t, t.dyn_ltree, t.l_desc.max_code), X(t, t.dyn_dtree, t.d_desc.max_code), Y(t, t.bl_desc), e = d - 1; 3 <= e && 0 === t.bl_tree[2 * S[e] + 1]; e--);

          return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
        }(t), n = t.opt_len + 3 + 7 >>> 3, (s = t.static_len + 3 + 7 >>> 3) <= n && (n = s)) : n = s = r + 5, r + 4 <= n && -1 !== e ? J(t, e, r, i) : 4 === t.strategy || s === n ? (P(t, 2 + (i ? 1 : 0), 3), K(t, z, C)) : (P(t, 4 + (i ? 1 : 0), 3), function (t, e, r, i) {
          var n;

          for (P(t, e - 257, 5), P(t, r - 1, 5), P(t, i - 4, 4), n = 0; n < i; n++) P(t, t.bl_tree[2 * S[n] + 1], 3);

          V(t, t.dyn_ltree, e - 1), V(t, t.dyn_dtree, r - 1);
        }(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1), K(t, t.dyn_ltree, t.dyn_dtree)), W(t), i && M(t);
      }, r._tr_tally = function (t, e, r) {
        return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & r, t.last_lit++, 0 === e ? t.dyn_ltree[2 * r]++ : (t.matches++, e--, t.dyn_ltree[2 * (A[r] + u + 1)]++, t.dyn_dtree[2 * N(e)]++), t.last_lit === t.lit_bufsize - 1;
      }, r._tr_align = function (t) {
        P(t, 2, 3), L(t, m, z), function (t) {
          16 === t.bi_valid ? (U(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : 8 <= t.bi_valid && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8);
        }(t);
      };
    }, {
      "../utils/common": 41
    }],
    53: [function (t, e, r) {
      "use strict";

      e.exports = function () {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}],
    54: [function (t, e, r) {
      "use strict";

      e.exports = "function" == typeof setImmediate ? setImmediate : function () {
        var t = [].slice.apply(arguments);
        t.splice(1, 0, 0), setTimeout.apply(null, t);
      };
    }, {}]
  }, {}, [10])(10);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6).Buffer, __webpack_require__(0), __webpack_require__(10).setImmediate))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__(7);

var ieee754 = __webpack_require__(8);

var isArray = __webpack_require__(9);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function () {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;

  for (var i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(11); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function (handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function (event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function (handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function (handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function (handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function (handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/jcampconverter/src/createTree.js
function createTree(jcamp, options = {}) {
  const {
    flatten = false
  } = options;

  if (typeof jcamp !== 'string') {
    throw new TypeError('the JCAMP should be a string');
  }

  let lines = jcamp.split(/[\r\n]+/);
  let flat = [];
  let stack = [];
  let result = [];
  let current;
  let ntupleLevel = 0;
  let spaces = jcamp.includes('## ');

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let labelLine = spaces ? line.replace(/ /g, '') : line;

    if (labelLine.substring(0, 9) === '##NTUPLES') {
      ntupleLevel++;
    }

    if (labelLine.substring(0, 7) === '##TITLE') {
      let title = [labelLine.substring(8).trim()];

      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].startsWith('##')) {
          break;
        } else {
          title.push(lines[j].trim());
        }
      }

      stack.push({
        title: title.join('\n'),
        jcamp: "".concat(line, "\n"),
        children: []
      });
      current = stack[stack.length - 1];
      flat.push(current);
    } else if (labelLine.substring(0, 5) === '##END' && ntupleLevel === 0) {
      current.jcamp += "".concat(line, "\n");
      let finished = stack.pop();

      if (stack.length !== 0) {
        current = stack[stack.length - 1];
        current.children.push(finished);
      } else {
        current = undefined;
        result.push(finished);
      }
    } else if (current && current.jcamp) {
      current.jcamp += "".concat(line, "\n");
      let match = labelLine.match(/^##(.*?)=(.+)/);

      if (match) {
        let canonicDataLabel = match[1].replace(/[ _-]/g, '').toUpperCase();

        if (canonicDataLabel === 'DATATYPE') {
          current.dataType = match[2].trim();
        }
      }
    }

    if (labelLine.substring(0, 5) === '##END' && ntupleLevel > 0) {
      ntupleLevel--;
    }
  }

  if (flatten) {
    flat.forEach(entry => {
      entry.children = undefined;
    });
    return flat;
  } else {
    return result;
  }
}
// CONCATENATED MODULE: ./node_modules/jcampconverter/src/complexChromatogram.js
const GC_MS_FIELDS = ['TIC', '.RIC', 'SCANNUMBER'];
function complexChromatogram(result) {
  let spectra = result.spectra;
  let length = spectra.length;
  let chromatogram = {
    times: new Array(length),
    series: {
      ms: {
        dimension: 2,
        data: new Array(length)
      }
    }
  };
  let existingGCMSFields = [];

  for (let i = 0; i < GC_MS_FIELDS.length; i++) {
    let label = convertMSFieldToLabel(GC_MS_FIELDS[i]);

    if (spectra[0][label]) {
      existingGCMSFields.push(label);
      chromatogram.series[label] = {
        dimension: 1,
        data: new Array(length)
      };
    }
  }

  for (let i = 0; i < length; i++) {
    let spectrum = spectra[i];
    chromatogram.times[i] = spectrum.pageValue;

    for (let j = 0; j < existingGCMSFields.length; j++) {
      chromatogram.series[existingGCMSFields[j]].data[i] = parseFloat(spectrum[existingGCMSFields[j]]);
    }

    if (spectrum.data) {
      chromatogram.series.ms.data[i] = [spectrum.data.x, spectrum.data.y];
    }
  }

  result.chromatogram = chromatogram;
}
function isMSField(canonicDataLabel) {
  return GC_MS_FIELDS.indexOf(canonicDataLabel) !== -1;
}
function convertMSFieldToLabel(value) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, '');
}
// CONCATENATED MODULE: ./node_modules/jcampconverter/src/convertToFloatArray.js
function convertToFloatArray(stringArray) {
  let floatArray = [];

  for (let i = 0; i < stringArray.length; i++) {
    floatArray.push(parseFloat(stringArray[i]));
  }

  return floatArray;
}
// CONCATENATED MODULE: ./node_modules/jcampconverter/src/parse/fastParseXYData.js
function fastParseXYData(spectrum, value) {
  // TODO need to deal with result
  //  console.log(value);
  // we check if deltaX is defined otherwise we calculate it
  let yFactor = spectrum.yFactor;
  let deltaX = spectrum.deltaX;
  spectrum.isXYdata = true; // TODO to be improved using 2 array {x:[], y:[]}

  let currentData = [];
  spectrum.data = currentData;
  let currentX = spectrum.firstX;
  let currentY = spectrum.firstY; // we skip the first line
  //

  let endLine = false;
  let ascii;
  let i = 0;

  for (; i < value.length; i++) {
    ascii = value.charCodeAt(i);

    if (ascii === 13 || ascii === 10) {
      endLine = true;
    } else {
      if (endLine) break;
    }
  } // we proceed taking the i after the first line


  let newLine = true;
  let isDifference = false;
  let isLastDifference = false;
  let lastDifference = 0;
  let isDuplicate = false;
  let inComment = false;
  let currentValue = 0; // can be a difference or a duplicate

  let lastValue = 0; // must be the real last value

  let isNegative = false;
  let inValue = false;
  let skipFirstValue = false;
  let decimalPosition = 0;

  for (; i <= value.length; i++) {
    if (i === value.length) ascii = 13;else ascii = value.charCodeAt(i);

    if (inComment) {
      // we should ignore the text if we are after $$
      if (ascii === 13 || ascii === 10) {
        newLine = true;
        inComment = false;
      }
    } else {
      // when is it a new value ?
      // when it is not a digit, . or comma
      // it is a number that is either new or we continue
      if (ascii <= 57 && ascii >= 48) {
        // a number
        inValue = true;

        if (decimalPosition > 0) {
          currentValue += (ascii - 48) / Math.pow(10, decimalPosition++);
        } else {
          currentValue *= 10;
          currentValue += ascii - 48;
        }
      } else if (ascii === 44 || ascii === 46) {
        // a "," or "."
        inValue = true;
        decimalPosition++;
      } else {
        if (inValue) {
          // need to process the previous value
          if (newLine) {
            newLine = false; // we don't check the X value
            // console.log("NEW LINE",isDifference, lastDifference);
            // if new line and lastDifference, the first value is just a check !
            // that we don't check ...

            if (isLastDifference) skipFirstValue = true;
          } else {
            // need to deal with duplicate and differences
            if (skipFirstValue) {
              skipFirstValue = false;
            } else {
              if (isDifference) {
                lastDifference = isNegative ? 0 - currentValue : currentValue;
                isLastDifference = true;
                isDifference = false;
              } else if (!isDuplicate) {
                lastValue = isNegative ? 0 - currentValue : currentValue;
              }

              let duplicate = isDuplicate ? currentValue - 1 : 1;

              for (let j = 0; j < duplicate; j++) {
                if (isLastDifference) {
                  currentY += lastDifference;
                } else {
                  currentY = lastValue;
                }

                currentData.push(currentX);
                currentData.push(currentY * yFactor);
                currentX += deltaX;
              }
            }
          }

          isNegative = false;
          currentValue = 0;
          decimalPosition = 0;
          inValue = false;
          isDuplicate = false;
        } // positive SQZ digits @ A B C D E F G H I (ascii 64-73)


        if (ascii < 74 && ascii > 63) {
          inValue = true;
          isLastDifference = false;
          currentValue = ascii - 64;
        } else if (ascii > 96 && ascii < 106) {
          // negative SQZ digits a b c d e f g h i (ascii 97-105)
          inValue = true;
          isLastDifference = false;
          currentValue = ascii - 96;
          isNegative = true;
        } else if (ascii === 115) {
          // DUP digits S T U V W X Y Z s (ascii 83-90, 115)
          inValue = true;
          isDuplicate = true;
          currentValue = 9;
        } else if (ascii > 82 && ascii < 91) {
          inValue = true;
          isDuplicate = true;
          currentValue = ascii - 82;
        } else if (ascii > 73 && ascii < 83) {
          // positive DIF digits % J K L M N O P Q R (ascii 37, 74-82)
          inValue = true;
          isDifference = true;
          currentValue = ascii - 73;
        } else if (ascii > 105 && ascii < 115) {
          // negative DIF digits j k l m n o p q r (ascii 106-114)
          inValue = true;
          isDifference = true;
          currentValue = ascii - 105;
          isNegative = true;
        } else if (ascii === 36 && value.charCodeAt(i + 1) === 36) {
          // $ sign, we need to check the next one
          inValue = true;
          inComment = true;
        } else if (ascii === 37) {
          // positive DIF digits % J K L M N O P Q R (ascii 37, 74-82)
          inValue = true;
          isDifference = true;
          currentValue = 0;
          isNegative = false;
        } else if (ascii === 45) {
          // a "-"
          // check if after there is a number, decimal or comma
          let ascii2 = value.charCodeAt(i + 1);

          if (ascii2 >= 48 && ascii2 <= 57 || ascii2 === 44 || ascii2 === 46) {
            inValue = true;
            if (!newLine) isLastDifference = false;
            isNegative = true;
          }
        } else if (ascii === 13 || ascii === 10) {
          newLine = true;
          inComment = false;
        } // and now analyse the details ... space or tabulation
        // if "+" we just don't care

      }
    }
  }
}
// CONCATENATED MODULE: ./node_modules/jcampconverter/src/parse/parsePeakTable.js
function parsePeakTable(spectrum, value, result) {
  let removeCommentRegExp = /\$\$.*/;
  let peakTableSplitRegExp = /[,\t ]+/;
  spectrum.isPeaktable = true;
  let values;
  let currentData = [];
  spectrum.data = currentData; // counts for around 20% of the time

  let lines = value.split(/,? *,?[;\r\n]+ */);

  for (let i = 1; i < lines.length; i++) {
    values = lines[i].trim().replace(removeCommentRegExp, '').split(peakTableSplitRegExp);

    if (values.length % 2 === 0) {
      for (let j = 0; j < values.length; j = j + 2) {
        // takes around 40% of the time to add and parse the 2 values nearly exclusively because of parseFloat
        currentData.push(parseFloat(values[j]) * spectrum.xFactor);
        currentData.push(parseFloat(values[j + 1]) * spectrum.yFactor);
      }
    } else {
      result.logs.push("Format error: ".concat(values));
    }
  }
}
// CONCATENATED MODULE: ./node_modules/jcampconverter/src/parse/parseXYA.js
function parseXYA(spectrum, value) {
  let removeSymbolRegExp = /(\(+|\)+|<+|>+|\s+)/g;
  spectrum.isXYAdata = true;
  let values;
  let currentData = [];
  spectrum.data = currentData;
  let lines = value.split(/,? *,?[;\r\n]+ */);

  for (let i = 1; i < lines.length; i++) {
    values = lines[i].trim().replace(removeSymbolRegExp, '').split(',');
    currentData.push(parseFloat(values[0]));
    currentData.push(parseFloat(values[1]));
  }
}
// EXTERNAL MODULE: ./node_modules/is-any-array/src/index.js
var src = __webpack_require__(1);
var src_default = /*#__PURE__*/__webpack_require__.n(src);

// EXTERNAL MODULE: ./node_modules/median-quickselect/lib/median-quickselect.min.js
var median_quickselect_min = __webpack_require__(2);
var median_quickselect_min_default = /*#__PURE__*/__webpack_require__.n(median_quickselect_min);

// CONCATENATED MODULE: ./node_modules/ml-array-median/lib-es6/index.js


/**
 * Computes the median of the given values
 * @param {Array<number>} input
 * @return {number}
 */

function median(input) {
  if (!src_default()(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  return median_quickselect_min_default()(input.slice());
}

/* harmony default export */ var lib_es6 = (median);
// CONCATENATED MODULE: ./node_modules/jcampconverter/src/2d/convertTo3DZ.js

function convertTo3DZ(spectra) {
  let minZ = spectra[0].data[0];
  let maxZ = minZ;
  let ySize = spectra.length;
  let xSize = spectra[0].data.length / 2;
  let z = new Array(ySize);

  for (let i = 0; i < ySize; i++) {
    z[i] = new Array(xSize);
    let xVector = spectra[i].data;

    for (let j = 0; j < xSize; j++) {
      let value = xVector[j * 2 + 1];
      z[i][j] = value;
      if (value < minZ) minZ = value;
      if (value > maxZ) maxZ = value;
    }
  }

  const firstX = spectra[0].data[0];
  const lastX = spectra[0].data[spectra[0].data.length - 2]; // has to be -2 because it is a 1D array [x,y,x,y,...]

  const firstY = spectra[0].pageValue;
  const lastY = spectra[ySize - 1].pageValue; // Because the min / max value are the only information about the matrix if we invert
  // min and max we need to invert the array

  if (firstX > lastX) {
    for (let spectrum of z) {
      spectrum.reverse();
    }
  }

  if (firstY > lastY) {
    z.reverse();
  }

  return {
    z: z,
    minX: Math.min(firstX, lastX),
    maxX: Math.max(firstX, lastX),
    minY: Math.min(firstY, lastY),
    maxY: Math.max(firstY, lastY),
    minZ: minZ,
    maxZ: maxZ,
    noise: lib_es6(z[0].map(Math.abs))
  };
}
// CONCATENATED MODULE: ./node_modules/jcampconverter/src/2d/generateContourLines.js
function generateContourLines(zData, options) {
  let noise = zData.noise;
  let z = zData.z;
  let povarHeight0, povarHeight1, povarHeight2, povarHeight3;
  let isOver0, isOver1, isOver2, isOver3;
  let nbSubSpectra = z.length;
  let nbPovars = z[0].length;
  let pAx, pAy, pBx, pBy;
  let x0 = zData.minX;
  let xN = zData.maxX;
  let dx = (xN - x0) / (nbPovars - 1);
  let y0 = zData.minY;
  let yN = zData.maxY;
  let dy = (yN - y0) / (nbSubSpectra - 1);
  let minZ = zData.minZ;
  let maxZ = zData.maxZ; // System.out.prvarln('y0 '+y0+' yN '+yN);
  // -------------------------
  // Povars attribution
  //
  // 0----1
  // |  / |
  // | /  |
  // 2----3
  //
  // ---------------------d------

  let iter = options.nbContourLevels * 2;
  let contourLevels = new Array(iter);
  let lineZValue;

  for (let level = 0; level < iter; level++) {
    // multiply by 2 for positif and negatif
    let contourLevel = {};
    contourLevels[level] = contourLevel;
    let side = level % 2;
    let factor = (maxZ - options.noiseMultiplier * noise) * Math.exp((level >> 1) - options.nbContourLevels);

    if (side === 0) {
      lineZValue = factor + options.noiseMultiplier * noise;
    } else {
      lineZValue = 0 - factor - options.noiseMultiplier * noise;
    }

    let lines = [];
    contourLevel.zValue = lineZValue;
    contourLevel.lines = lines;
    if (lineZValue <= minZ || lineZValue >= maxZ) continue;

    for (let iSubSpectra = 0; iSubSpectra < nbSubSpectra - 1; iSubSpectra++) {
      let subSpectra = z[iSubSpectra];
      let subSpectraAfter = z[iSubSpectra + 1];

      for (let povar = 0; povar < nbPovars - 1; povar++) {
        povarHeight0 = subSpectra[povar];
        povarHeight1 = subSpectra[povar + 1];
        povarHeight2 = subSpectraAfter[povar];
        povarHeight3 = subSpectraAfter[povar + 1];
        isOver0 = povarHeight0 > lineZValue;
        isOver1 = povarHeight1 > lineZValue;
        isOver2 = povarHeight2 > lineZValue;
        isOver3 = povarHeight3 > lineZValue; // Example povar0 is over the plane and povar1 and
        // povar2 are below, we find the varersections and add
        // the segment

        if (isOver0 !== isOver1 && isOver0 !== isOver2) {
          pAx = povar + (lineZValue - povarHeight0) / (povarHeight1 - povarHeight0);
          pAy = iSubSpectra;
          pBx = povar;
          pBy = iSubSpectra + (lineZValue - povarHeight0) / (povarHeight2 - povarHeight0);
          lines.push(pAx * dx + x0);
          lines.push(pAy * dy + y0);
          lines.push(pBx * dx + x0);
          lines.push(pBy * dy + y0);
        } // remove push does not help !!!!


        if (isOver3 !== isOver1 && isOver3 !== isOver2) {
          pAx = povar + 1;
          pAy = iSubSpectra + 1 - (lineZValue - povarHeight3) / (povarHeight1 - povarHeight3);
          pBx = povar + 1 - (lineZValue - povarHeight3) / (povarHeight2 - povarHeight3);
          pBy = iSubSpectra + 1;
          lines.push(pAx * dx + x0);
          lines.push(pAy * dy + y0);
          lines.push(pBx * dx + x0);
          lines.push(pBy * dy + y0);
        } // test around the diagonal


        if (isOver1 !== isOver2) {
          pAx = (povar + 1 - (lineZValue - povarHeight1) / (povarHeight2 - povarHeight1)) * dx + x0;
          pAy = (iSubSpectra + (lineZValue - povarHeight1) / (povarHeight2 - povarHeight1)) * dy + y0;

          if (isOver1 !== isOver0) {
            pBx = povar + 1 - (lineZValue - povarHeight1) / (povarHeight0 - povarHeight1);
            pBy = iSubSpectra;
            lines.push(pAx);
            lines.push(pAy);
            lines.push(pBx * dx + x0);
            lines.push(pBy * dy + y0);
          }

          if (isOver2 !== isOver0) {
            pBx = povar;
            pBy = iSubSpectra + 1 - (lineZValue - povarHeight2) / (povarHeight0 - povarHeight2);
            lines.push(pAx);
            lines.push(pAy);
            lines.push(pBx * dx + x0);
            lines.push(pBy * dy + y0);
          }

          if (isOver1 !== isOver3) {
            pBx = povar + 1;
            pBy = iSubSpectra + (lineZValue - povarHeight1) / (povarHeight3 - povarHeight1);
            lines.push(pAx);
            lines.push(pAy);
            lines.push(pBx * dx + x0);
            lines.push(pBy * dy + y0);
          }

          if (isOver2 !== isOver3) {
            pBx = povar + (lineZValue - povarHeight2) / (povarHeight3 - povarHeight2);
            pBy = iSubSpectra + 1;
            lines.push(pAx);
            lines.push(pAy);
            lines.push(pBx * dx + x0);
            lines.push(pBy * dy + y0);
          }
        }
      }
    }
  }

  return {
    minX: zData.minX,
    maxX: zData.maxX,
    minY: zData.minY,
    maxY: zData.maxY,
    segments: contourLevels
  };
}
// CONCATENATED MODULE: ./node_modules/jcampconverter/src/2d/add2D.js


function add2D(result, options) {
  let zData = convertTo3DZ(result.spectra);

  if (!options.noContour) {
    result.contourLines = generateContourLines(zData, options);
    delete zData.z;
  }

  result.minMax = zData;
}
// CONCATENATED MODULE: ./node_modules/jcampconverter/src/profiling.js
function profiling(result, action, options) {
  if (result.profiling) {
    result.profiling.push({
      action,
      time: Date.now() - options.start
    });
  }
}
// CONCATENATED MODULE: ./node_modules/jcampconverter/src/simpleChromatogram.js
function simpleChromatogram(result) {
  let data = result.spectra[0].data;
  result.chromatogram = {
    times: data.x.slice(),
    series: {
      intensity: {
        dimension: 1,
        data: data.y.slice()
      }
    }
  };
}
// CONCATENATED MODULE: ./node_modules/jcampconverter/src/postProcessing.js




function postProcessing(entriesFlat, result, options) {
  for (let entry of entriesFlat) {
    if (Object.keys(entry.ntuples).length > 0) {
      let newNtuples = [];
      let keys = Object.keys(entry.ntuples);

      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let values = entry.ntuples[key];

        for (let j = 0; j < values.length; j++) {
          if (!newNtuples[j]) newNtuples[j] = {};
          newNtuples[j][key] = values[j];
        }
      }

      entry.ntuples = newNtuples;
    }

    if (entry.twoD && options.wantXY) {
      add2D(entry, options);
      profiling(result, 'Finished countour plot calculation', options);

      if (!options.keepSpectra) {
        delete entry.spectra;
      }
    }

    if (options.chromatogram) {
      options.xy = true;
    }

    if (options.xy && options.wantXY) {
      // the spectraData should not be a oneD array but an object with x and y
      if (entry.spectra && entry.spectra.length > 0) {
        for (let spectrum of entry.spectra) {
          if (spectrum.data) {
            let data = spectrum.data;
            let newData = {
              x: new Array(data.length / 2),
              y: new Array(data.length / 2)
            };

            for (let k = 0; k < data.length; k = k + 2) {
              newData.x[k / 2] = data[k];
              newData.y[k / 2] = data[k + 1];
            }

            spectrum.data = newData;
          }
        }
      }
    } // maybe it is a GC (HPLC) / MS. In this case we add a new format


    if (options.chromatogram) {
      if (entry.spectra.length > 1) {
        complexChromatogram(entry);
      } else {
        simpleChromatogram(entry);
      }

      profiling(result, 'Finished chromatogram calculation', options);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/jcampconverter/src/prepareSpectrum.js
function prepareSpectrum(spectrum) {
  if (!spectrum.xFactor) spectrum.xFactor = 1;
  if (!spectrum.yFactor) spectrum.yFactor = 1;

  if (spectrum.observeFrequency) {
    if (spectrum.xUnit && spectrum.xUnit.toUpperCase() === 'HZ') {
      spectrum.xUnit = 'PPM';
      spectrum.xFactor = spectrum.xFactor / spectrum.observeFrequency;
      spectrum.firstX = spectrum.firstX / spectrum.observeFrequency;
      spectrum.lastX = spectrum.lastX / spectrum.observeFrequency;
      spectrum.deltaX = spectrum.deltaX / spectrum.observeFrequency;
    }
  }

  if (spectrum.shiftOffsetVal) {
    let shift = spectrum.firstX - spectrum.shiftOffsetVal;
    spectrum.firstX = spectrum.firstX - shift;
    spectrum.lastX = spectrum.lastX - shift;
  }
}
// CONCATENATED MODULE: ./node_modules/jcampconverter/src/convert.js







 // the following RegExp can only be used for XYdata, some peakTables have values with a "E-5" ...

const ntuplesSeparator = /[, \t]+/;

class Spectrum {}

const defaultOptions = {
  keepRecordsRegExp: /^$/,
  canonicDataLabels: true,
  dynamicTyping: false,
  xy: true,
  withoutXY: false,
  chromatogram: false,
  keepSpectra: false,
  noContour: false,
  nbContourLevels: 7,
  noiseMultiplier: 5,
  profiling: false
};
function convert(jcamp, options) {
  options = Object.assign({}, defaultOptions, options);
  options.wantXY = !options.withoutXY;
  options.start = Date.now();
  let entriesFlat = [];
  let result = {
    profiling: options.profiling ? [] : false,
    logs: [],
    entries: []
  };
  let tmpResult = {
    children: []
  };
  let currentEntry = tmpResult;
  let parentsStack = [];
  let spectrum = new Spectrum();

  if (typeof jcamp !== 'string') {
    throw new TypeError('the JCAMP should be a string');
  }

  profiling(result, 'Before split to LDRS', options);
  let ldrs = jcamp.replace(/[\r\n]+##/g, '\n##').split('\n##');
  profiling(result, 'Split to LDRS', options);
  if (ldrs[0]) ldrs[0] = ldrs[0].replace(/^[\r\n ]*##/, '');

  for (let ldr of ldrs) {
    // This is a new LDR
    let position = ldr.indexOf('=');
    let dataLabel = position > 0 ? ldr.substring(0, position) : ldr;
    let dataValue = position > 0 ? ldr.substring(position + 1).trim() : '';
    let canonicDataLabel = dataLabel.replace(/[_ -]/g, '').toUpperCase();

    if (canonicDataLabel === 'DATATABLE') {
      let endLine = dataValue.indexOf('\n');
      if (endLine === -1) endLine = dataValue.indexOf('\r');

      if (endLine > 0) {
        let xIndex = -1;
        let yIndex = -1; // ##DATA TABLE= (X++(I..I)), XYDATA
        // We need to find the variables

        let infos = dataValue.substring(0, endLine).split(/[ ,;\t]+/);

        if (infos[0].indexOf('++') > 0) {
          let firstVariable = infos[0].replace(/.*\(([a-zA-Z0-9]+)\+\+.*/, '$1');
          let secondVariable = infos[0].replace(/.*\.\.([a-zA-Z0-9]+).*/, '$1');
          xIndex = currentEntry.ntuples.symbol.indexOf(firstVariable);
          yIndex = currentEntry.ntuples.symbol.indexOf(secondVariable);
        }

        if (xIndex === -1) xIndex = 0;
        if (yIndex === -1) yIndex = 0;

        if (currentEntry.ntuples.first) {
          if (currentEntry.ntuples.first.length > xIndex) {
            spectrum.firstX = currentEntry.ntuples.first[xIndex];
          }

          if (currentEntry.ntuples.first.length > yIndex) {
            spectrum.firstY = currentEntry.ntuples.first[yIndex];
          }
        }

        if (currentEntry.ntuples.last) {
          if (currentEntry.ntuples.last.length > xIndex) {
            spectrum.lastX = currentEntry.ntuples.last[xIndex];
          }

          if (currentEntry.ntuples.last.length > yIndex) {
            spectrum.lastY = currentEntry.ntuples.last[yIndex];
          }
        }

        if (currentEntry.ntuples.vardim && currentEntry.ntuples.vardim.length > xIndex) {
          spectrum.nbPoints = currentEntry.ntuples.vardim[xIndex];
        }

        if (currentEntry.ntuples.factor) {
          if (currentEntry.ntuples.factor.length > xIndex) {
            spectrum.xFactor = currentEntry.ntuples.factor[xIndex];
          }

          if (currentEntry.ntuples.factor.length > yIndex) {
            spectrum.yFactor = currentEntry.ntuples.factor[yIndex];
          }
        }

        if (currentEntry.ntuples.units) {
          if (currentEntry.ntuples.units.length > xIndex) {
            spectrum.xUnit = currentEntry.ntuples.units[xIndex];
          }

          if (currentEntry.ntuples.units.length > yIndex) {
            spectrum.yUnit = currentEntry.ntuples.units[yIndex];
          }
        }

        spectrum.datatable = infos[0];

        if (infos[1] && infos[1].indexOf('PEAKS') > -1) {
          canonicDataLabel = 'PEAKTABLE';
        } else if (infos[1] && (infos[1].indexOf('XYDATA') || infos[0].indexOf('++') > 0)) {
          canonicDataLabel = 'XYDATA';
          spectrum.deltaX = (spectrum.lastX - spectrum.firstX) / (spectrum.nbPoints - 1);
        }
      }
    }

    if (canonicDataLabel === 'XYDATA') {
      if (options.wantXY) {
        prepareSpectrum(spectrum); // well apparently we should still consider it is a PEAK TABLE if there are no '++' after

        if (dataValue.match(/.*\+\+.*/)) {
          // ex: (X++(Y..Y))
          if (!spectrum.deltaX) {
            spectrum.deltaX = (spectrum.lastX - spectrum.firstX) / (spectrum.nbPoints - 1);
          }

          fastParseXYData(spectrum, dataValue, result);
        } else {
          parsePeakTable(spectrum, dataValue, result);
        }

        currentEntry.spectra.push(spectrum);
        spectrum = new Spectrum();
      }

      continue;
    } else if (canonicDataLabel === 'PEAKTABLE') {
      if (options.wantXY) {
        prepareSpectrum(spectrum);
        parsePeakTable(spectrum, dataValue, result);
        currentEntry.spectra.push(spectrum);
        spectrum = new Spectrum();
      }

      continue;
    }

    if (canonicDataLabel === 'PEAKASSIGNMENTS') {
      if (options.wantXY) {
        if (dataValue.match(/.*(XYA).*/)) {
          // ex: (XYA)
          parseXYA(spectrum, dataValue);
        }

        currentEntry.spectra.push(spectrum);
        spectrum = new Spectrum();
      }

      continue;
    }

    if (canonicDataLabel === 'TITLE') {
      let parentEntry = currentEntry;

      if (!parentEntry.children) {
        parentEntry.children = [];
      }

      currentEntry = {
        spectra: [],
        ntuples: {},
        info: {}
      };
      parentEntry.children.push(currentEntry);
      parentsStack.push(parentEntry);
      entriesFlat.push(currentEntry);
      currentEntry.title = dataValue;
    } else if (canonicDataLabel === 'DATATYPE') {
      currentEntry.dataType = dataValue;

      if (dataValue.indexOf('nD') > -1) {
        currentEntry.twoD = true;
      }
    } else if (canonicDataLabel === 'NTUPLES') {
      if (dataValue.indexOf('nD') > -1) {
        currentEntry.twoD = true;
      }
    } else if (canonicDataLabel === 'DATACLASS') {
      currentEntry.dataClass = dataValue;
    } else if (canonicDataLabel === 'XUNITS') {
      spectrum.xUnit = dataValue;
    } else if (canonicDataLabel === 'YUNITS') {
      spectrum.yUnit = dataValue;
    } else if (canonicDataLabel === 'FIRSTX') {
      spectrum.firstX = parseFloat(dataValue);
    } else if (canonicDataLabel === 'LASTX') {
      spectrum.lastX = parseFloat(dataValue);
    } else if (canonicDataLabel === 'FIRSTY') {
      spectrum.firstY = parseFloat(dataValue);
    } else if (canonicDataLabel === 'LASTY') {
      spectrum.lastY = parseFloat(dataValue);
    } else if (canonicDataLabel === 'NPOINTS') {
      spectrum.nbPoints = parseFloat(dataValue);
    } else if (canonicDataLabel === 'XFACTOR') {
      spectrum.xFactor = parseFloat(dataValue);
    } else if (canonicDataLabel === 'YFACTOR') {
      spectrum.yFactor = parseFloat(dataValue);
    } else if (canonicDataLabel === 'MAXX') {
      spectrum.maxX = parseFloat(dataValue);
    } else if (canonicDataLabel === 'MINX') {
      spectrum.minX = parseFloat(dataValue);
    } else if (canonicDataLabel === 'MAXY') {
      spectrum.maxY = parseFloat(dataValue);
    } else if (canonicDataLabel === 'MINY') {
      spectrum.minY = parseFloat(dataValue);
    } else if (canonicDataLabel === 'DELTAX') {
      spectrum.deltaX = parseFloat(dataValue);
    } else if (canonicDataLabel === '.OBSERVEFREQUENCY' || canonicDataLabel === '$SFO1') {
      if (!spectrum.observeFrequency) {
        spectrum.observeFrequency = parseFloat(dataValue);
      }
    } else if (canonicDataLabel === '.OBSERVENUCLEUS') {
      if (!spectrum.xType) {
        currentEntry.xType = dataValue.replace(/[^a-zA-Z0-9]/g, '');
      }
    } else if (canonicDataLabel === '$SFO2') {
      if (!currentEntry.indirectFrequency) {
        currentEntry.indirectFrequency = parseFloat(dataValue);
      }
    } else if (canonicDataLabel === '$OFFSET') {
      // OFFSET for Bruker spectra
      currentEntry.shiftOffsetNum = 0;

      if (!spectrum.shiftOffsetVal) {
        spectrum.shiftOffsetVal = parseFloat(dataValue);
      }
    } else if (canonicDataLabel === '$REFERENCEPOINT') {// OFFSET for Varian spectra
      // if we activate this part it does not work for ACD specmanager
      //         } else if (canonicDataLabel=='.SHIFTREFERENCE') {   // OFFSET FOR Bruker Spectra
      //                 var parts = dataValue.split(/ *, */);
      //                 currentEntry.shiftOffsetNum = parseInt(parts[2].trim());
      //                 spectrum.shiftOffsetVal = parseFloat(parts[3].trim());
    } else if (canonicDataLabel === 'VARNAME') {
      currentEntry.ntuples.varname = dataValue.split(ntuplesSeparator);
    } else if (canonicDataLabel === 'SYMBOL') {
      currentEntry.ntuples.symbol = dataValue.split(ntuplesSeparator);
    } else if (canonicDataLabel === 'VARTYPE') {
      currentEntry.ntuples.vartype = dataValue.split(ntuplesSeparator);
    } else if (canonicDataLabel === 'VARFORM') {
      currentEntry.ntuples.varform = dataValue.split(ntuplesSeparator);
    } else if (canonicDataLabel === 'VARDIM') {
      currentEntry.ntuples.vardim = convertToFloatArray(dataValue.split(ntuplesSeparator));
    } else if (canonicDataLabel === 'UNITS') {
      currentEntry.ntuples.units = dataValue.split(ntuplesSeparator);
    } else if (canonicDataLabel === 'FACTOR') {
      currentEntry.ntuples.factor = convertToFloatArray(dataValue.split(ntuplesSeparator));
    } else if (canonicDataLabel === 'FIRST') {
      currentEntry.ntuples.first = convertToFloatArray(dataValue.split(ntuplesSeparator));
    } else if (canonicDataLabel === 'LAST') {
      currentEntry.ntuples.last = convertToFloatArray(dataValue.split(ntuplesSeparator));
    } else if (canonicDataLabel === 'MIN') {
      currentEntry.ntuples.min = convertToFloatArray(dataValue.split(ntuplesSeparator));
    } else if (canonicDataLabel === 'MAX') {
      currentEntry.ntuples.max = convertToFloatArray(dataValue.split(ntuplesSeparator));
    } else if (canonicDataLabel === '.NUCLEUS') {
      if (currentEntry.twoD) {
        currentEntry.yType = dataValue.split(ntuplesSeparator)[0];
      }
    } else if (canonicDataLabel === 'PAGE') {
      spectrum.page = dataValue.trim();
      spectrum.pageValue = parseFloat(dataValue.replace(/^.*=/, ''));
      spectrum.pageSymbol = spectrum.page.replace(/[=].*/, '');
      let pageSymbolIndex = currentEntry.ntuples.symbol.indexOf(spectrum.pageSymbol);
      let unit = '';

      if (currentEntry.ntuples.units && currentEntry.ntuples.units[pageSymbolIndex]) {
        unit = currentEntry.ntuples.units[pageSymbolIndex];
      }

      if (currentEntry.indirectFrequency && unit !== 'PPM') {
        spectrum.pageValue /= currentEntry.indirectFrequency;
      }
    } else if (canonicDataLabel === 'RETENTIONTIME') {
      spectrum.pageValue = parseFloat(dataValue);
    } else if (isMSField(canonicDataLabel)) {
      spectrum[convertMSFieldToLabel(canonicDataLabel)] = dataValue;
    } else if (canonicDataLabel === 'SAMPLEDESCRIPTION') {
      spectrum.sampleDescription = dataValue;
    } else if (canonicDataLabel === 'END') {
      currentEntry = parentsStack.pop();
    }

    if (currentEntry && currentEntry.info && canonicDataLabel.match(options.keepRecordsRegExp)) {
      let label = options.canonicDataLabels ? canonicDataLabel : dataLabel;
      let value = dataValue.trim();

      if (options.dynamicTyping && !isNaN(value)) {
        value = Number(value);
      }

      if (currentEntry.info[label]) {
        if (!Array.isArray(currentEntry.info[label])) {
          currentEntry.info[label] = [currentEntry.info[label]];
        }

        currentEntry.info[label].push(value);
      } else {
        currentEntry.info[label] = value;
      }
    }
  }

  profiling(result, 'Finished parsing', options);
  postProcessing(entriesFlat, result, options);
  profiling(result, 'Total time', options);
  /*
  if (result.children && result.children.length>0) {
    result = { ...result, ...result.children[0] };
  }
  */

  result.entries = tmpResult.children;
  result.flatten = entriesFlat;
  return result;
}
// CONCATENATED MODULE: ./node_modules/jcampconverter/src/index.js
/* concated harmony reexport createTree */__webpack_require__.d(__webpack_exports__, "createTree", function() { return createTree; });
/* concated harmony reexport convert */__webpack_require__.d(__webpack_exports__, "convert", function() { return convert; });



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/iobuffer/lib-esm/text-encoding-polyfill.js
var text_encoding_polyfill = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/iobuffer/lib-esm/utf8.browser.js

const decoder = new TextDecoder('utf-8');
function decode(bytes) {
  return decoder.decode(bytes);
}
const encoder = new TextEncoder();
function encode(str) {
  return encoder.encode(str);
}
// CONCATENATED MODULE: ./node_modules/iobuffer/lib-esm/IOBuffer.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOBuffer", function() { return IOBuffer_IOBuffer; });

const defaultByteLength = 1024 * 8;
class IOBuffer_IOBuffer {
  /**
   * @param data - The data to construct the IOBuffer with.
   * If data is a number, it will be the new buffer's length<br>
   * If data is `undefined`, the buffer will be initialized with a default length of 8Kb<br>
   * If data is an ArrayBuffer, SharedArrayBuffer, an ArrayBufferView (Typed Array), an IOBuffer instance,
   * or a Node.js Buffer, a view will be created over the underlying ArrayBuffer.
   * @param options
   */
  constructor(data = defaultByteLength, options = {}) {
    let dataIsGiven = false;

    if (typeof data === 'number') {
      data = new ArrayBuffer(data);
    } else {
      dataIsGiven = true;
      this.lastWrittenByte = data.byteLength;
    }

    const offset = options.offset ? options.offset >>> 0 : 0;
    const byteLength = data.byteLength - offset;
    let dvOffset = offset;

    if (ArrayBuffer.isView(data) || data instanceof IOBuffer_IOBuffer) {
      if (data.byteLength !== data.buffer.byteLength) {
        dvOffset = data.byteOffset + offset;
      }

      data = data.buffer;
    }

    if (dataIsGiven) {
      this.lastWrittenByte = byteLength;
    } else {
      this.lastWrittenByte = 0;
    }

    this.buffer = data;
    this.length = byteLength;
    this.byteLength = byteLength;
    this.byteOffset = dvOffset;
    this.offset = 0;
    this.littleEndian = true;
    this._data = new DataView(this.buffer, dvOffset, byteLength);
    this._mark = 0;
    this._marks = [];
  }
  /**
   * Checks if the memory allocated to the buffer is sufficient to store more
   * bytes after the offset.
   * @param byteLength - The needed memory in bytes.
   * @returns `true` if there is sufficient space and `false` otherwise.
   */


  available(byteLength = 1) {
    return this.offset + byteLength <= this.length;
  }
  /**
   * Check if little-endian mode is used for reading and writing multi-byte
   * values.
   * @returns `true` if little-endian mode is used, `false` otherwise.
   */


  isLittleEndian() {
    return this.littleEndian;
  }
  /**
   * Set little-endian mode for reading and writing multi-byte values.
   */


  setLittleEndian() {
    this.littleEndian = true;
    return this;
  }
  /**
   * Check if big-endian mode is used for reading and writing multi-byte values.
   * @returns `true` if big-endian mode is used, `false` otherwise.
   */


  isBigEndian() {
    return !this.littleEndian;
  }
  /**
   * Switches to big-endian mode for reading and writing multi-byte values.
   */


  setBigEndian() {
    this.littleEndian = false;
    return this;
  }
  /**
   * Move the pointer n bytes forward.
   * @param n - Number of bytes to skip.
   */


  skip(n = 1) {
    this.offset += n;
    return this;
  }
  /**
   * Move the pointer to the given offset.
   * @param offset
   */


  seek(offset) {
    this.offset = offset;
    return this;
  }
  /**
   * Store the current pointer offset.
   * @see {@link IOBuffer#reset}
   */


  mark() {
    this._mark = this.offset;
    return this;
  }
  /**
   * Move the pointer back to the last pointer offset set by mark.
   * @see {@link IOBuffer#mark}
   */


  reset() {
    this.offset = this._mark;
    return this;
  }
  /**
   * Push the current pointer offset to the mark stack.
   * @see {@link IOBuffer#popMark}
   */


  pushMark() {
    this._marks.push(this.offset);

    return this;
  }
  /**
   * Pop the last pointer offset from the mark stack, and set the current
   * pointer offset to the popped value.
   * @see {@link IOBuffer#pushMark}
   */


  popMark() {
    const offset = this._marks.pop();

    if (offset === undefined) {
      throw new Error('Mark stack empty');
    }

    this.seek(offset);
    return this;
  }
  /**
   * Move the pointer offset back to 0.
   */


  rewind() {
    this.offset = 0;
    return this;
  }
  /**
   * Make sure the buffer has sufficient memory to write a given byteLength at
   * the current pointer offset.
   * If the buffer's memory is insufficient, this method will create a new
   * buffer (a copy) with a length that is twice (byteLength + current offset).
   * @param byteLength
   */


  ensureAvailable(byteLength = 1) {
    if (!this.available(byteLength)) {
      const lengthNeeded = this.offset + byteLength;
      const newLength = lengthNeeded * 2;
      const newArray = new Uint8Array(newLength);
      newArray.set(new Uint8Array(this.buffer));
      this.buffer = newArray.buffer;
      this.length = this.byteLength = newLength;
      this._data = new DataView(this.buffer);
    }

    return this;
  }
  /**
   * Read a byte and return false if the byte's value is 0, or true otherwise.
   * Moves pointer forward by one byte.
   */


  readBoolean() {
    return this.readUint8() !== 0;
  }
  /**
   * Read a signed 8-bit integer and move pointer forward by 1 byte.
   */


  readInt8() {
    return this._data.getInt8(this.offset++);
  }
  /**
   * Read an unsigned 8-bit integer and move pointer forward by 1 byte.
   */


  readUint8() {
    return this._data.getUint8(this.offset++);
  }
  /**
   * Alias for {@link IOBuffer#readUint8}.
   */


  readByte() {
    return this.readUint8();
  }
  /**
   * Read `n` bytes and move pointer forward by `n` bytes.
   */


  readBytes(n = 1) {
    const bytes = new Uint8Array(n);

    for (let i = 0; i < n; i++) {
      bytes[i] = this.readByte();
    }

    return bytes;
  }
  /**
   * Read a 16-bit signed integer and move pointer forward by 2 bytes.
   */


  readInt16() {
    const value = this._data.getInt16(this.offset, this.littleEndian);

    this.offset += 2;
    return value;
  }
  /**
   * Read a 16-bit unsigned integer and move pointer forward by 2 bytes.
   */


  readUint16() {
    const value = this._data.getUint16(this.offset, this.littleEndian);

    this.offset += 2;
    return value;
  }
  /**
   * Read a 32-bit signed integer and move pointer forward by 4 bytes.
   */


  readInt32() {
    const value = this._data.getInt32(this.offset, this.littleEndian);

    this.offset += 4;
    return value;
  }
  /**
   * Read a 32-bit unsigned integer and move pointer forward by 4 bytes.
   */


  readUint32() {
    const value = this._data.getUint32(this.offset, this.littleEndian);

    this.offset += 4;
    return value;
  }
  /**
   * Read a 32-bit floating number and move pointer forward by 4 bytes.
   */


  readFloat32() {
    const value = this._data.getFloat32(this.offset, this.littleEndian);

    this.offset += 4;
    return value;
  }
  /**
   * Read a 64-bit floating number and move pointer forward by 8 bytes.
   */


  readFloat64() {
    const value = this._data.getFloat64(this.offset, this.littleEndian);

    this.offset += 8;
    return value;
  }
  /**
   * Read a 1-byte ASCII character and move pointer forward by 1 byte.
   */


  readChar() {
    return String.fromCharCode(this.readInt8());
  }
  /**
   * Read `n` 1-byte ASCII characters and move pointer forward by `n` bytes.
   */


  readChars(n = 1) {
    let result = '';

    for (let i = 0; i < n; i++) {
      result += this.readChar();
    }

    return result;
  }
  /**
   * Read the next `n` bytes, return a UTF-8 decoded string and move pointer
   * forward by `n` bytes.
   */


  readUtf8(n = 1) {
    return decode(this.readBytes(n));
  }
  /**
   * Write 0xff if the passed value is truthy, 0x00 otherwise and move pointer
   * forward by 1 byte.
   */


  writeBoolean(value) {
    this.writeUint8(value ? 0xff : 0x00);
    return this;
  }
  /**
   * Write `value` as an 8-bit signed integer and move pointer forward by 1 byte.
   */


  writeInt8(value) {
    this.ensureAvailable(1);

    this._data.setInt8(this.offset++, value);

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write `value` as an 8-bit unsigned integer and move pointer forward by 1
   * byte.
   */


  writeUint8(value) {
    this.ensureAvailable(1);

    this._data.setUint8(this.offset++, value);

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * An alias for {@link IOBuffer#writeUint8}.
   */


  writeByte(value) {
    return this.writeUint8(value);
  }
  /**
   * Write all elements of `bytes` as uint8 values and move pointer forward by
   * `bytes.length` bytes.
   */


  writeBytes(bytes) {
    this.ensureAvailable(bytes.length);

    for (let i = 0; i < bytes.length; i++) {
      this._data.setUint8(this.offset++, bytes[i]);
    }

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write `value` as a 16-bit signed integer and move pointer forward by 2
   * bytes.
   */


  writeInt16(value) {
    this.ensureAvailable(2);

    this._data.setInt16(this.offset, value, this.littleEndian);

    this.offset += 2;

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write `value` as a 16-bit unsigned integer and move pointer forward by 2
   * bytes.
   */


  writeUint16(value) {
    this.ensureAvailable(2);

    this._data.setUint16(this.offset, value, this.littleEndian);

    this.offset += 2;

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write `value` as a 32-bit signed integer and move pointer forward by 4
   * bytes.
   */


  writeInt32(value) {
    this.ensureAvailable(4);

    this._data.setInt32(this.offset, value, this.littleEndian);

    this.offset += 4;

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write `value` as a 32-bit unsigned integer and move pointer forward by 4
   * bytes.
   */


  writeUint32(value) {
    this.ensureAvailable(4);

    this._data.setUint32(this.offset, value, this.littleEndian);

    this.offset += 4;

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write `value` as a 32-bit floating number and move pointer forward by 4
   * bytes.
   */


  writeFloat32(value) {
    this.ensureAvailable(4);

    this._data.setFloat32(this.offset, value, this.littleEndian);

    this.offset += 4;

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write `value` as a 64-bit floating number and move pointer forward by 8
   * bytes.
   */


  writeFloat64(value) {
    this.ensureAvailable(8);

    this._data.setFloat64(this.offset, value, this.littleEndian);

    this.offset += 8;

    this._updateLastWrittenByte();

    return this;
  }
  /**
   * Write the charCode of `str`'s first character as an 8-bit unsigned integer
   * and move pointer forward by 1 byte.
   */


  writeChar(str) {
    return this.writeUint8(str.charCodeAt(0));
  }
  /**
   * Write the charCodes of all `str`'s characters as 8-bit unsigned integers
   * and move pointer forward by `str.length` bytes.
   */


  writeChars(str) {
    for (let i = 0; i < str.length; i++) {
      this.writeUint8(str.charCodeAt(i));
    }

    return this;
  }
  /**
   * UTF-8 encode and write `str` to the current pointer offset and move pointer
   * forward according to the encoded length.
   */


  writeUtf8(str) {
    return this.writeBytes(encode(str));
  }
  /**
   * Export a Uint8Array view of the internal buffer.
   * The view starts at the byte offset and its length
   * is calculated to stop at the last written byte or the original length.
   */


  toArray() {
    return new Uint8Array(this.buffer, this.byteOffset, this.lastWrittenByte);
  }
  /**
   * Update the last written byte offset
   * @private
   */


  _updateLastWrittenByte() {
    if (this.offset > this.lastWrittenByte) {
      this.lastWrittenByte = this.offset;
    }
  }

}

/***/ })
/******/ ]);
});
//# sourceMappingURL=brukerconverter.js.map