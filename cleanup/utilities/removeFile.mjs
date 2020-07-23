import * as fs from 'fs';

const remove = (file) => fs.unlink(`./${file}`, (err) => {
  if (err) console.log(`Warning: cannot unlink missing resource '${file}'`);
});

export default remove;
