// check: add to app.jsx;
const fs = require('fs');

const modified = (files) => files.filter(
  (file) => fs.readFile(`${process.cwd()}/${file}`,
    (err, fileContent) => fs.readFile(`${__dirname}/templates/${file}`,
      (err, templateContent) => fileContent !== templateContent,
    ),
  ),
);

export default modified;
