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
      newContent: '',
    },
    {
      path: 'src/App.jsx',
      newContent:
`import React from 'react';
import './App.css';

function App() {
  return (
    <>
    </>
  );
}

export default App;
`,
    },
    {
      path: 'src/index.css',
      newContent: '',
    },
    {
      path: 'README.md',
      newContent: '',
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
  toCheckContentOf: [
    'src/App.js',
    'src/App.css',
    'src/index.css',
    'src/index.js',
    'public/index.html',
    'public/manifest.json',
    'README.md',
    'serviceWorker.js',
  ],
};

export default files;
