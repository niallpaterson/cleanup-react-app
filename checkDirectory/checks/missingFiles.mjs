const fs = require('fs');

const missing = (files) => files.filter((file) => !fs.existsSync(`./${file}`));

export default missing;
