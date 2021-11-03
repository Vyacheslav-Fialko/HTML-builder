const fs = require('fs');
const path = require('path');
const srcFolder = path.resolve(__dirname, 'files');
const distFolder = path.resolve(__dirname, 'files-copy');
let isDist = fs.existsSync(distFolder);


fs.readdir(srcFolder, (err, files) => {
  if (err) console.log(err);
  else {
    if (!isDist) {
      fs.mkdir(distFolder, (err) => {
        if (err) {
          return console.error(err);
        }
      });
    }
    files.forEach((file) => {
      fs.copyFile(path.resolve(srcFolder, file), path.resolve(distFolder, file), (err) => {
        if (err) {
          console.log(err);
          }
        });
      });
  }
});

