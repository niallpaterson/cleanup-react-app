import fs from 'fs';

const rewrite = (file, data) => fs.writeFile(`./${file}`, data, (err) => {
  if (err) console.warn(`Warning: cannot write missing resource '${file}'`);
});

export default rewrite;
