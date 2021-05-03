#brukerconverter

It is able to extract NMR spectra from a zip file that contain the bruker folders.

## Installation

### Node JS

```
npm install brukerconverter
```

### Use as a module

####Node JS
As brukerconverter uses jszip to load the zip binary, the method returns a promise. You need the zip file loaded in memory as arrayBuffer or base64 passing option base64 with a boolean value of ```true```.

```javascript
const { convertZip } = require('brukerconverter');
const { bruker } = require('bruker-data-test');

convertZip(bruker['aspirin-1h.zip'], { keepOriginal: true, xy: true })
  .then((result) => {
    console.log(result);
    //...{ spectra, meta, source }
  });
```
It is possible to use the converter if you have the files already loaded in memory as an ```object```.
```javascript
const { convertFolder } = require('brukerconverter');

let result = convertFolder(brukerFiles, { keepOriginal: true, xy: true});
console.log(result);
//...{ spectra, meta, source }
```

## [API Documentation](https://cheminfo.github.io/brukerconverter/)
