const fs = require('fs');

const missingFiles = (files) => files.filter((file) => !fs.existsSync(`./${file}`));

export default missingFiles;
