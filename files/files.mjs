import {
  AppJsx,
  AppCss,
  README,
  indexCss,
} from '../templates/replacements/index.mjs';

const files = {
  toRemove: [
    'public/favicon.ico',
    'public/logo192.png',
    'public/logo512.png',
    'src/logo.svg',
  ],
  toModify: [
    {
      path: 'src/App.css',
      newContent: AppCss,
    },
    {
      path: 'src/App.jsx',
      newContent: AppJsx,
    },
    {
      path: 'src/index.css',
      newContent: indexCss,
    },
    {
      path: 'README.md',
      newContent: README,
    },
  ],
  toRename: [
    {
      oldPath: 'src/App.js',
      newPath: 'src/App.jsx',
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
    'public/index.html',
    'public/manifest.json',
    'README.md',
    'serviceWorker.js',
  ],
};

export default files;
