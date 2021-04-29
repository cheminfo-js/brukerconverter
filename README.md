#brukerconverter

It is able to extract NMR spectra from a zip file that contain the bruker folders.

## Installation

### Node JS

```
npm install brukerconverter
```

### Use as a module

####Node JS
As brukerconverter use jszip to load the zip binary, the method return a promise.
```javascript
const converter = require('brukerconverter');
const zip = require('fs').readFileSync('path/to/jcamp.dx');

const result = await converter.convertZip(zip);
```

#### AMD

```javascript
require(['brukerconverter'], (brukerConverter) => {
  // zip is the binary of the zip file.
  brukerConverter
    .convertZip(zip, { xy: true, keepRecordsRegExp: /.*/ })
    .then((result) => {
      // Do something with result
    });
});
```

## [API Documentation](https://cheminfo.github.io/brukerconverter/)
