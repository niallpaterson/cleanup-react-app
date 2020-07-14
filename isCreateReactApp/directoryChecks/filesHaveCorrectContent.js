const fs = require('fs');

const checkContentOf = {
  filesToCheck: [
    "src/App.js",
    "src/App.css",
    "src/index.js",
    "src/index.html",
    "public/manifest.json",
    "README.md",
    "serviceWorker.js",
  ],
  filesWithIncorrectContent: [],
  checksFailed: false,
  files() {
    this.filesToCheck.forEach((file) => {
      fs.readFile(`${process.cwd()}/${file}`, (err, fileContent) => {
        if (err) throw err;
        fs.readFile(`./templates/template.${file}`, (err, templateContent) => {
          if (err) throw err;
          if (fileContent !== templateContent) {
            this.checksFailed = true;
          }
        });
      });
    });
  },
  filesDidPass() {
    return !!this.filesWithIncorrectContent.length;
  },
};

export default checkContentOf;
