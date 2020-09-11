import fs from 'fs';

const remove = (file) => fs.unlink(`./${file}`, (err) => {
  if (err) console.warn(`Warning: cannot unlink missing resource '${file}'`);
});

export default remove;
