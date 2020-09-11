const directory = {
  files: {},
  set(newFiles) {
    this.files = { ...newFiles };
  },
  get() {
    return this.files;
  },
  setCorrectFiles() {
    this.files = { ...this.correctFiles };
  },
  setPartiallyCorrectFiles() {
    this.files = { ...this.correctFiles };
    delete this.files['./src/App.js'];
    delete this.files['./public/index.html'];
  },
  setIncorrectContent() {
    this.setCorrectFiles();
    this.files['./src/App.js'] = 'incorrect content';
    this.files['./src/App.css'] = 'incorrect content';
    this.files['./src/index.css'] = 'incorrect content';
    this.files['./src/index.js'] = 'incorrect content';
    this.files['./public/index.html'] = 'incorrect content';
    this.files['./public/manifest.json'] = 'incorrect content';
    this.files['./README.md'] = 'incorrect content';
    this.files['./serviceWorker.js'] = 'incorrect content';
  },
  setPartialIncorrectContent() {
    this.setCorrectFiles();
    this.files['./src/App.js'] = 'incorrect content';
    this.files['./src/App.css'] = 'incorrect content';
  },
  correctFiles: {
    './node_modules': 'dir',
    './public': 'dir',
    './public/favicon.ico': 'img',
    './public/index.html': `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <!--
          manifest.json provides metadata used when your web app is installed on a
          user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
        -->
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <!--
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the \`public\` folder during the build.
          Only files inside the \`public\` folder can be referenced from the HTML.
    
          Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
          work correctly both with client-side routing and a non-root public URL.
          Learn how to configure a non-root public URL by running \`npm run build\`.
        -->
        <title>React App</title>
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
        <!--
          This HTML file is a template.
          If you open it directly in the browser, you will see an empty page.
    
          You can add webfonts, meta tags, or analytics to this file.
          The build step will place the bundled scripts into the <body> tag.
    
          To begin the development, run \`npm start\` or \`yarn start\`.
          To create a production bundle, use \`npm run build\` or \`yarn build\`.
        -->
      </body>
    </html>
    `,
    './public/logo192.png': 'img',
    './public/logo512.png': 'img',
    './public/manifest.json': `{
      "short_name": "React App",
      "name": "Create React App Sample",
      "icons": [
        {
          "src": "favicon.ico",
          "sizes": "64x64 32x32 24x24 16x16",
          "type": "image/x-icon"
        },
        {
          "src": "logo192.png",
          "type": "image/png",
          "sizes": "192x192"
        },
        {
          "src": "logo512.png",
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
    './public/robots.txt': 'content',
    './src': 'dir',
    './src/favicon.io': 'content',
    './src/App.css': `.App {
      text-align: center;
    }
    
    .App-logo {
      height: 40vmin;
      pointer-events: none;
    }
    
    @media (prefers-reduced-motion: no-preference) {
      .App-logo {
        animation: App-logo-spin infinite 20s linear;
      }
    }
    
    .App-header {
      background-color: #282c34;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: calc(10px + 2vmin);
      color: white;
    }
    
    .App-link {
      color: #61dafb;
    }
    
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    `,
    './src/App.js': `import React from 'react';
    import logo from './logo.svg';
    import './App.css';
    
    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }
    
    export default App;
    `,
    './src/App.test.js': 'content',
    './src/index.css': `body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    `,
    './src/index.js': `import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import * as serviceWorker from './serviceWorker';
    
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
    `,
    './src/logo.svg': 'img',
    './src/serviceWorker.js': `// This optional code is used to register a service worker.
    // register() is not called by default.
    
    // This lets the app load faster on subsequent visits in production, and gives
    // it offline capabilities. However, it also means that developers (and users)
    // will only see deployed updates on subsequent visits to a page, after all the
    // existing tabs open on the page have been closed, since previously cached
    // resources are updated in the background.
    
    // To learn more about the benefits of this model and instructions on how to
    // opt-in, read https://bit.ly/CRA-PWA
    
    const isLocalhost = Boolean(
      window.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === '[::1]' ||
        // 127.0.0.0/8 are considered localhost for IPv4.
        window.location.hostname.match(
          /^127(?:\\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
    );
    
    export function register(config) {
      if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
          // Our service worker won't work if PUBLIC_URL is on a different origin
          // from what our page is served on. This might happen if a CDN is used to
          // serve assets; see https://github.com/facebook/create-react-app/issues/2374
          return;
        }
    
        window.addEventListener('load', () => {
          const swUrl = \`${process.env.PUBLIC_URL}/service-worker.js\`;
    
          if (isLocalhost) {
            // This is running on localhost. Let's check if a service worker still exists or not.
            checkValidServiceWorker(swUrl, config);
    
            // Add some additional logging to localhost, pointing developers to the
            // service worker/PWA documentation.
            navigator.serviceWorker.ready.then(() => {
              console.log(
                'This web app is being served cache-first by a service ' +
                  'worker. To learn more, visit https://bit.ly/CRA-PWA'
              );
            });
          } else {
            // Is not localhost. Just register service worker
            registerValidSW(swUrl, config);
          }
        });
      }
    }
    
    function registerValidSW(swUrl, config) {
      navigator.serviceWorker
        .register(swUrl)
        .then(registration => {
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker == null) {
              return;
            }
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // At this point, the updated precached content has been fetched,
                  // but the previous service worker will still serve the older
                  // content until all client tabs are closed.
                  console.log(
                    'New content is available and will be used when all ' +
                      'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
                  );
    
                  // Execute callback
                  if (config && config.onUpdate) {
                    config.onUpdate(registration);
                  }
                } else {
                  // At this point, everything has been precached.
                  // It's the perfect time to display a
                  // "Content is cached for offline use." message.
                  console.log('Content is cached for offline use.');
    
                  // Execute callback
                  if (config && config.onSuccess) {
                    config.onSuccess(registration);
                  }
                }
              }
            };
          };
        })
        .catch(error => {
          console.error('Error during service worker registration:', error);
        });
    }
    
    function checkValidServiceWorker(swUrl, config) {
      // Check if the service worker can be found. If it can't reload the page.
      fetch(swUrl, {
        headers: { 'Service-Worker': 'script' },
      })
        .then(response => {
          // Ensure service worker exists, and that we really are getting a JS file.
          const contentType = response.headers.get('content-type');
          if (
            response.status === 404 ||
            (contentType != null && contentType.indexOf('javascript') === -1)
          ) {
            // No service worker found. Probably a different app. Reload the page.
            navigator.serviceWorker.ready.then(registration => {
              registration.unregister().then(() => {
                window.location.reload();
              });
            });
          } else {
            // Service worker found. Proceed as normal.
            registerValidSW(swUrl, config);
          }
        })
        .catch(() => {
          console.log(
            'No internet connection found. App is running in offline mode.'
          );
        });
    }
    
    export function unregister() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready
          .then(registration => {
            registration.unregister();
          })
          .catch(error => {
            console.error(error.message);
          });
      }
    }
    `,
    './src/setupTests.js': 'content',
    './.gitignore': 'content',
    './package.json': 'content',
    './README.md': `This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

    ## Available Scripts
    
    In the project directory, you can run:
    
    ### \`yarn start\`
    
    Runs the app in the development mode.<br />
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    
    The page will reload if you make edits.<br />
    You will also see any lint errors in the console.
    
    ### \`yarn test\`
    
    Launches the test runner in the interactive watch mode.<br />
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
    
    ### \`yarn build\`
    
    Builds the app for production to the \`build\` folder.<br />
    It correctly bundles React in production mode and optimizes the build for the best performance.
    
    The build is minified and the filenames include the hashes.<br />
    Your app is ready to be deployed!
    
    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
    
    ### \`yarn eject\`
    
    **Note: this is a one-way operation. Once you \`eject\`, you can’t go back!**
  
    If you aren’t satisfied with the build tool and configuration choices, you can \`eject\` at any time. This command will remove the single build dependency from your project.
    
    Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except \`eject\` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
    
    You don’t have to ever use \`eject\`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
    
    ## Learn More
    
    You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
    
    To learn React, check out the [React documentation](https://reactjs.org/).
    
    ### Code Splitting
    
    This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting
    
    ### Analyzing the Bundle Size
    
    This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size
    
    ### Making a Progressive Web App
    
    This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
    
    ### Advanced Configuration
    
    This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration
    
    ### Deployment
    
    This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
    
    ### \`yarn build\` fails to minify
    
    This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
    `,
    './yarn.lock': 'content',
  },
};

export default directory;
