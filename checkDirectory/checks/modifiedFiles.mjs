import * as fs from 'fs';

const modified = (files, root) => files.toCheckContentOf.filter((file) => {
  if (!fs.existsSync(`./${file}`)) {
    return false;
  }
  const fileContent = fs.readFileSync(`${process.cwd()}/${file}`, 'utf8');
  const templateContent = fs.readFileSync(`${root}/templates/${file}`, 'utf8');
  return fileContent !== templateContent;
});

export default modified;
