'use strict';

let fs = require('fs');
let file = `${__dirname}/files/test.txt`;

  let readTheStupidFile = (err,data) => {
    if (err) {
      throw err;
    }
    console.log(data.toString());
  };
  

fs.readFile(file, readTheStupidFile);