const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname + '/project-dist', 'bundle.css');
const srcPath = path.resolve(__dirname, 'styles');
fs.readdir(srcPath, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  else {
    fs.stat(filePath, function (err, stat) {
      if (err == null) {
        fs.unlink(filePath, (err) => {
          if (err) console.log(err);
        });
        ad(files);
      } else if (err.code == 'ENOENT') {
        ad(files);
      } else {
        console.log('Some other error: ', err.code);
      }
    });
  }
});
function ad(files) {
files.forEach((file) => {
  if (file.isFile()) {
    if (path.parse(`${srcPath}/${file.name}`).ext === '.css') {
      fs.readFile(path.resolve(srcPath, file.name), 'utf8', (err, data) => {
        if (err) {
          throw err;
        } else {
          fs.appendFile(filePath, data, (err) => {
            if (err) {
              throw err;
            }
          });
        }
      });
    }
  }
});
}