const path = require('path');
const fs = require('fs');
const file = 'text.txt';
const filePath = path.resolve(__dirname, file);

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});
