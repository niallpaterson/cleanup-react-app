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
    <p>
      Cleanedup React App
    </p>
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
    {
      path: 'public/manifest.json',
      newContent:
`{
"short_name": "React App",
"name": "Create React App Sample",
"icons": [
  {
    "src": "",
    "sizes": "64x64 32x32 24x24 16x16",
    "type": "image/x-icon"
  },
  {
    "src": "",
    "type": "image/png",
    "sizes": "192x192"
  },
  {
    "src": "",
    "type": "image/png",
    "sizes": "512x512"
  }
],
"start_url": ".",
"display": "standalone",
"theme_color": "#000000",
"background_color": "#ffffff"
}
`,
    },
    {
      path: 'src/App.test.js',
      newContent:
`import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders cleanup react app message', () => {
  const { getByText } = render(<App />);
  const cleanupMessage = getByText(/Cleanedup React App/i);
  expect(cleanupMessage).toBeInTheDocument();
});
`,
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
