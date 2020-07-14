const fs = require('fs');

const modifiedFiles = (files) => files.filter(
  (file) => fs.readFile(
    `./${file}`,
    (err, fileContent) => fs.readFile(
      `${__dirname}/templates/template.${file}`,
      (err, templateContent) => fileContent !== templateContent,
    ),
  ),
);

export default modifiedFiles;
