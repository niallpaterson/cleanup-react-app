import * as fs from 'fs';

const remove = (file) => fs.unlink(`./${file}`, (err) => { if (err) console.log(err); });

export default remove;
