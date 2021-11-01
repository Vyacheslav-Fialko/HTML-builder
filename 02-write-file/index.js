const path = require('path');
const fs = require('fs');
const process = require('process');
const filePath = path.resolve(__dirname, 'testFile.txt');

const inpuText = (input) => {
  input.trim().slice(-4) == 'exit' ? readline.close() : fileWrite(input);
};

const fileWrite = (text) => {
  text = `${text} \n`;
  fs.appendFile(filePath, text, (err) => {
    if (err) {
      throw err;
    }
  });
};

const goodBay = () => {
  console.log('===================================');
  console.log('Good bay');
  console.log('===================================');
};

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.setPrompt(`write your text \n`);
readline.prompt();
readline.on('line', inpuText);
readline.on('close', goodBay);


