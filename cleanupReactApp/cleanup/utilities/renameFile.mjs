import fs from 'fs';

const rename = (file, to) => fs.rename(`./${file}`, `./${to}`, (err) => {
  if (err) console.warn(`Warning: cannot rename missing resource '${file}'`);
});

export default rename;
