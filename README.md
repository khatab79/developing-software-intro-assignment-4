# Focus College ACSD Assignment 4                        

This respository is intended for the use of Focus College Students enrolled in the 
Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---


## Get started 

### *1. TypeScript Project*

Make sure you have the latest version of node and npm.

```
node -v
v10.19.0
```
and
```
npm -v
6.14.4
```
**_If you do not install any of them, you can not run the application_**

To install npm & node please, check this link [npm]

---


## Running the Application


To **build** the application
```
tsc
```
To **run** the application using node

```
node dist/index.js 
```
To **build & run** the application using npm
```
npm start 
```

---

### *2. Adding [ESLint] to the project*

#### *_Installation and setup_*

* Run the following commands to setup ESLint in your *TypeScript project*.

```
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
* Create an .eslintrc file(either by touching command or by adding new file from your vitual studio). And add the following:

```
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
```
* Create an .eslintignore in order to prevent [ESLint] from linting stuff we don't want it by adding the following:

```
node_modules
dist
```

Adding a lint script in your project **package.json** by writing 

**_for further information about the installation and adding plugins please click [ESLint]_**

---


## Running the Application


To **build** the application
```
tsc
```
To **run** the application and only compile (without running [ESLint] ) 

```
npm run start notest
```
or

```
npm run start:dev:notest
```
- This script will run:
  - `npm run build`
  - `npm run start`



To **build & run** the application using npm and lint

```
npm run start:dev
```

- This script will run:
  - `npm run build:lint:fix`
  - `npm run start`
---







[npm]: https://docs.npmjs.com/cli/install

[ESLint]: https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/





