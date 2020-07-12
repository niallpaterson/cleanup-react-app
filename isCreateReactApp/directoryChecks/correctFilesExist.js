import fs from 'fs';

const checkExistenceOf = {
  missingFiles: [],
  theReadme() {
    if (!fs.existsSync('./README.md')) {
      this.missingFiles.push('README.md');
    }
    return this;
  },
};

export default checkExistenceOf;
