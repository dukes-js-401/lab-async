'use strict';

let fs = require('fs');
let file = `${__dirname}/files/test.txt`;
let newWords = 'the brown dog ate the stupid fox'
let cliFile = process.argv[2];

//code for bringing in the file name from the command line found at https://nodejs.org/docs/latest/api/process.html#process_process_argv
  process.argv.forEach((val, index) => {
  });

  let readTheStupidFile = (err,data) => {
    if (err) {
      throw err;
    }
    console.log(data.toString());
    fs.writeFile(cliFile, newWords, (err) => {
        if (err) {
            throw err;
        }
        fs.readFile(cliFile, (err,data) => {
            if (err) {
                throw err;
              }
            console.log(data.toString());
        })
    })
};


  
fs.readFile(cliFile, readTheStupidFile);