// async / await

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

const init = async () => {
    try {
        const content = await readFile('./in1.txt');
        const content2 = await readFile('./in2.txt');

        console.log(String(content), String(content2));
    } catch (err) {
        console.log(err);
    }
}

console.log(init());

console.log(2);

console.log(3);

