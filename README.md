# 🧼 Cleanup-react-app

Cleanup your create-react-app. Removes commonly deleted files and boilerplate content from templates generated by create-react-app.

Similar packages exist. The contribution of this package is that it is simple, careful, and thorough. For example, the package performs checks to ensure the application being cleaned is an instance of create-react-app.

## Instructions

Global installation is reccomended:

````shell
npm i -g cleanup-react-app
````

or

````shell
yarn global add cleanup-react-app
````

To use the package navigate to the directory to be cleaned up and run:

````shell
cleanup-react-app
````

## Intended use

It is intended that the package is run directly after running create-react-app.

````shell

create-react-app app-name

cd app-name

cleanup-react-app
````

## Operations

The package performs four operations.

### 1. Directory checks

To ensure the directory being cleaned is an instance of create-react-app, its contents are checked.

If missing or modified files are detected, a warning is thrown:

````shell
⚠️ Warning: Directory does not match create-react-app template.

Missing files:

<list of missing files>

Modified files:

<list of modified files>

Attempting to cleanup: /directory/being/cleaned
````

Pay attention to the printed directory if this warning is thrown. Attempting to clean a directory that is not a template instance of create-react-app may result in unintended files being overwritten or deleted.

The package checks the existence of:

>node_modules  
>public  
>public/favicon.ico  
>public/index.html  
>public/logo192.png  
>public/logo512.png  
>public/manifest.json  
>public/robots.txt  
>src  
>src/App.js  
>src/App.test.js  
>src/index.css  
>src/index.js  
>src/logo.svg  
>src/serviceWorker.js  
>src/setupTests.js  
>.gitignore  
>package.json  
>README.md  
>yarn.lock

and the content of:

>src/App.js  
>src/App.css  
>src/index.js  
>public/index.html  
>public/manifest.json  
>README.md  
>serviceWorker.js

### 2. Remove files

It removes:

> public/favicon.ico  
> public/logo192.png  
> public/logo512.png  
> src/logo.svg

### 3. Rename files

It renames:

> App.js

to

> App.jsx

### 4. Rewrite files

It empties the content of:

> src/App.css  
> src/index.css  
> README.md

It removes most of the boilerplate from:

> src/App.jsx

The new content is:

````jsx
import React from 'react';
import './App.css';
  
  function App() {
    return (
      <>
      </>
    );
  }

export default App;
````
