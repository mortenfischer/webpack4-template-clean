var fs = require('fs-extra');


// move JS file to solution

var sourceJS = './build/app.js';
var destJS = './copytarget/js/app.js';

fs.copy(sourceJS, destJS, function (err) {

    if (err)
    {
        return console.error(err);
    }

    console.log('Copied app.js to ' + destJS);

});

// move polyfill JS file to solution

var sourcePOLY = './build/polyfill.js';
var destPOLY = './copytarget/js/polyfill.js';

fs.copy(sourcePOLY, destPOLY, function (err) {

    if (err)
    {
        return console.error(err);
    }

    console.log('Copied polyfill.js to ' + destPOLY);

});

// move style CSS file to solution

var sourceCSS = './build/styling.css';
var destCSS = './copytarget/css/styling.css';

fs.copy(sourceCSS, destCSS, function (err) {

    if (err)
    {
        return console.error(err);
    }

    console.log('Copied styling.js to ' + destCSS);

});

// move bootstrap CSS file to solution

var sourceBS = './build/bootstrap.css';
var destBS = './copytarget/css/bootstrap.css';

fs.copy(sourceBS, destBS, function (err) {

    if (err)
    {
        return console.error(err);
    }

    console.log('Copied bootstrap.js to ' + destBS);

});

