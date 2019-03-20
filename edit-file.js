'use strict';

let fs = require('fs');
let file = `${__dirname}/files/test.txt`;
let cliFile = process.argv[2];

  let readTheStupidFile = (err,data) => {
    if (err) {
      throw err;
    }
    console.log(data.toString());
  };
  
  process.argv.forEach((val, index) => {
  });

fs.readFile(cliFile, readTheStupidFile);