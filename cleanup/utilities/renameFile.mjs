import * as fs from 'fs';

const rename = (file, to) => fs.rename(`./${file}`, `./${to}`, (err) => { if (err) console.log(err); });

export default rename;
