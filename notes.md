# How to make a full stack app with Keystone.js, Typescript, ESModules, express, and react

## Setting up node

use `npx n` to install version 13.5.0 of node for ESModules

Let's start by creating the directory and initializing a node project to get a project.json file. the -Y takes all the defaults for the node project. Then install express

```bash
mkdir spotification && cd spotification
npm init -Y
```

now go into package.json and add:

```json
  "type": "module",
```

now instead of require:

```js
const app = require('./app');
```

we can use the import syntax, just like in our frontend projects

```js
import app from './app.js';
```

_note: we do need the .js for now since we don't have a build process (like webpack or tsc) to figure that out for us._

## Setting up express

Let's install express

```bash
npm i express
```

now we are going to create a basic express app. I've moved my app decloration do a separate file since there is more we are going to do there.
add an `index.js` file.

**index.js**

```js
import app from './app.js';

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});
```

## TODO Explain this

lets create that `app.js` file

**app.js**

```js
import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

export default app;
```

## TODO Explain this

in our `package.json` file lets add a start script, lets also install nodeman for easy development

```bash
npm i nodemon
```

**package.json**

```json
  "scripts": {
    "start": "nodemon src/index.js"
  }
```

now if we run `npm start` we should see

```
Listening: http://localhost:5001
```

## Setting up linting, Typescript and Prettier with Poetic

TODO: Explain what Poetic is

Run Poetic

```bash
npx poetic
```

in tsconfig.json:
change the module property to `commonjs` and remove `"noEmit": true`

change the extension of `app.js` and `index.js` to `.ts`

now when we run `tsc` in the terminal we will see the outputed js in the dist folder

```
- dist
  - app.js
  - index.js
```

to have a better dev experience, we need to tsc -w and nodemon at the same time, and we need nodemon to look in the dist folder for changes
we can use concurrently to run the commands at the same time (...concurrently)

```bash
npm i -D concurrently
```

then change the start script to be
**package.json**

```json
  "scripts": {
    "start": "concurrently \"tsc -w\" \"nodemon dist/index.js\"",
  }
```

to see it in action run `npm start` then go change the response message in app.js

**app.js**

```js
import express from 'express';
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'This is an API 🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

export default app;
```

then check out `localhost:5001` and see the updated message
