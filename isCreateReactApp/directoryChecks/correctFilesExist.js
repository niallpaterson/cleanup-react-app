import fs from 'fs';

const checkExistenceOf = {
  missingFiles: [],
  theReadme() {
    if (!fs.existsSync('./README.md')) {
      this.missingFiles.push('README.md');
    }
    return this;
  },
  theYarnLock() {
    if (!fs.existsSync('./yarn.lock')) {
      this.missingFiles.push('yarn.lock');
    }
    return this;
  },
};

export default checkExistenceOf;
