// callback

/**
 * Synchronous callback
 */

function greeting(name) {
    console.log('Hello ' + name);
}

function processOutput(callback) {
    callback('Jhony');
}

processOutput(greeting);

/**
 * Asynchronous callback
 */
const fs = require('fs');

console.log(1);

fs.readFile('./in1.txt', (err, contents) => {
    fs.readFile('./in2.txt', (err2, contents2) => {
        console.log(err, String(contents));
        console.log(err2, String(contents2));
    });
});

console.log(2);

console.log(3);