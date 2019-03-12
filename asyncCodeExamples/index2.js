const fs = require("fs");
const util = require('util');

let readFile = util.promisify(fs.readFile);


readFile('./data/1.json', {encoding: 'UTF8'})
.then(function (content) {
    console.log(content)
})

