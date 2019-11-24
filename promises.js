// promises

/**
 * Asynchronous callback
 */
const fs = require('fs');

const readFile = (file) => new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if (err) {
            reject(err)
        } else {
            resolve(contents);
        }
    });
});

console.log(1);

readFile('./in1.txt')
    .then((contents) => {
        console.log(String(contents))
    });

console.log(2);

console.log(3);

