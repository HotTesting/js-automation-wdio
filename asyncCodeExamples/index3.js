const fs = require("fs");
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function printFile () {
    let content
    try {
        content = await readFile('./data/3.txt', {encoding: 'UTF8'})
    } catch (err) {
        console.log('OH NO GOT ERROR!')
        console.log(err)
    }
    
    //console.log(typeof content)
    //console.log(content)
    // return content
}

async function myFunc () {
    let a = await printFile()

    console.log(typeof a)
    console.log(a)
}
