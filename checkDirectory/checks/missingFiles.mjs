import fs from 'fs';

const missing = (files) => files.toCheckforExistence.filter((file) => !fs.existsSync(`./${file}`));

export default missing;
