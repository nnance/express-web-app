express-web-app
===============

This example uses a gulp web build and served by express using ejs templates.

Installation
```
npm install
bower install
```
To build

```
gulp build
```
To serve
```
node app.js
```
Development
```
gulp watch (first terminal window)
nodemon app.js (second terminal window)
```
Important directories
- **app** - contains all the static content and is the source of the web build system
- **public** - is the directory where the web build writes to and is the directory the
express app serves files.

Important files
- **.html** - template files that are rendered by the express/ejs template engine
- **gulpfile.js** - is the build file that uses the app directory and app/*.ejs files as the source
