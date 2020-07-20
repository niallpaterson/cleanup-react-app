import * as fs from 'fs';

const rewrite = (file, data) => fs.writeFile(`./${file}`, data, (err) => { if (err) consile.log(err); });

export default rewrite;
