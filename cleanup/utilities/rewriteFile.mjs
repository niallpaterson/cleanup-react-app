import * as fs from 'fs';

const rewrite = (file, data) => fs.writeFile(`./${file}`, `./${data}`, (err) => { if (err) throw err; });

export default rewrite;
