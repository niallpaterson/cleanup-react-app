import fs from 'fs';

const checkExistenceOf = {
  missingFiles: [],
  theGitignore() {
    if (!fs.existsSync('./.gitignore')) {
      this.missingFiles.push('.gitignore');
    }
    return this;
  },
  thePackageJSON() {
    if (!fs.existsSync('./package.json')) {
      this.missingFiles.push('package.json');
    }
    return this;
  },
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
