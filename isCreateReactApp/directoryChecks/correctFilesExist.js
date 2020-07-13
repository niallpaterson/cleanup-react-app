import fs from 'fs';

const checkExistenceOf = {
  missingFiles: [],
  thePublicDirectory() {
    if (!fs.existsSync('./public')) {
      this.missingFiles.push('public');
    }
    return this;
  },
  theFavicon() {
    if (!fs.existsSync('./public/favicon.ico')) {
      this.missingFiles.push('public/favicon.ico');
    }
    return this;
  },
  theIndexHtml() {
    if (!fs.existsSync('./public/index.html')) {
      this.missingFiles.push('public/index.html');
    }
    return this;
  },
  theLogo192() {
    if (!fs.existsSync('./public/logo192.png')) {
      this.missingFiles.push('public/logo192.png');
    }
    return this;
  },
  theLogo512() {
    if (!fs.existsSync('./public/logo512.png')) {
      this.missingFiles.push('public/logo512.png');
    }
    return this;
  },
  theManifestJson() {
    if (!fs.existsSync('./public/manifest.json')) {
      this.missingFiles.push('public/manifest.json');
    }
    return this;
  },
  theSrcDirectory() {
    if (!fs.existsSync('./src')) {
      this.missingFiles.push('src');
    }
    return this;
  },
  theAppCss() {
    if (!fs.existsSync('./src/App.css')) {
      this.missingFiles.push('src/App.css');
    }
    return this;
  },
  theAppJs() {
    if (!fs.existsSync('./src/App.js')) {
      this.missingFiles.push('src/App.js');
    }
    return this;
  },
  theAppTestJs() {
    if (!fs.existsSync('./src/App.test.js')) {
      this.missingFiles.push('src/App.test.js');
    }
    return this;
  },
  theindexCss() {
    if (!fs.existsSync('./src/index.css')) {
      this.missingFiles.push('src/index.css');
    }
    return this;
  },
  theindexJs() {
    if (!fs.existsSync('./src/index.js')) {
      this.missingFiles.push('src/index.js');
    }
    return this;
  },
  logoSVG() {
    if (!fs.existsSync('./src/logo.svg')) {
      this.missingFiles.push('src/logo.svg');
    }
    return this;
  },
  serviceWorker() {
    if (!fs.existsSync('./src/serviceWorker.js')) {
      this.missingFiles.push('src/serviceWorker.js');
    }
    return this;
  },
  setupTests() {
    if (!fs.existsSync('./src/setupTests.js')) {
      this.missingFiles.push('src/setupTests.js');
    }
    return this;
  },
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
