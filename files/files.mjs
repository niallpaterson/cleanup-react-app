const files = {
  toRemove: [
    'public/favicon.io',
    'public/logo192.png',
    'public/logo512.png',
    'src/logo.svg',
  ],
  toModify: [
    {
      path: 'src/App.css',
      newContent: '__dirname/templates/replacements/App.css',
    },
    {
      path: 'src/App.js',
      newContent: '__dirname/templates/replacements/App.js',
    },
    {
      path: 'src/index.css',
      newContent: '__dirname/templates/replacements/index.css',
    },
    {
      path: 'src/README.md',
      newContent: '__dirname/templates/replacements/README.md',
    },
  ],
  toRename: [
    {
      oldPath: 'app.js',
      newPath: 'app.jsx',
    },
  ],
  toCheckforExistence: [
    'node_modules',
    'public',
    'public/favicon.ico',
    'public/index.html',
    'public/logo192.png',
    'public/logo512.png',
    'public/manifest.json',
    'public/robots.txt',
    'src',
    'src/App.js',
    'src/App.test.js',
    'src/index.css',
    'src/index.js',
    'src/logo.svg',
    'src/serviceWorker.js',
    'src/setupTests.js',
    '.gitignore',
    'package.json',
    'README.md',
    'yarn.lock',
  ],
  toCheckcontentOf: [
    'src/App.js',
    'src/App.css',
    'src/index.js',
    'src/index.html',
    'public/manifest.json',
    'README.md',
    'serviceWorker.js',
  ],
};

export default files;
