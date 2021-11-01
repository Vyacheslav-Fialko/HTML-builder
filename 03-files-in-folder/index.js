const fs = require('fs');
const path = require('path');
const folderPath = path.resolve(__dirname, 'secret-folder');
fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err);
  else {
    files.forEach((file) => {
      if (file.isFile()) {
        const fileName = path.parse(`${folderPath}/${file.name}`).name;
        const fileExt = path.parse(`${folderPath}/${file.name}`).ext.slice(1);
        const fileF = path.parse(`${folderPath}/${file.name}`).base;
        fs.stat(`${folderPath}/${file.name}`, (err, stats) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(`${fileName}-${fileExt}-${stats.size/1024}.kb`);
        });

      };
    });
  }
});
