const fs = require("fs");

function readFileAsync(name) {
  return new Promise((resolve, reject) => {
    fs.readFile(`./data/${name}`, { encoding: "UTF8" }, function(err, content) {
      if (err) {
        reject(err);
      }
      resolve(content);
    });
  });
}

let promise = readFileAsync("1.json");
promise
  .then(function(content) {
    console.log("GOT FILE 1");
    console.log(content);
  })
  .catch(function(err) {
    console.log(err);
  });

readFileAsync("2.json")
  .then(function(content2) {
    console.log("GOT FILE 1");
    console.log(content2);
  })
  .catch(function(err) {
    console.log(err);
  });

  
readFileAsync("1.json")
  .then(function(content) {
    console.log("GOT FILE 1");
    console.log(content);
    return readFileAsync("2.json");
  })
  .then(function(content2) {
    console.log("GOT FILE 1");
    console.log(content2);
  })
  .catch(function(err) {
    console.log(err);
  });
