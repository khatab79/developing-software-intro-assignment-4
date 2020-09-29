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

* Run the following commands to setup [ESLint] in your *TypeScript project*.

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
  - `npm run build:lint`
  - `npm run start`
---

### *3. Adding [prettier] to the project*

#### *_Installation and setup_*

* Run the following commands to setup [prettier] in your *TypeScript project*.

```
npm install --save-dev --save-exact prettier
```

* Then, create an empty config file to let editors and other tooling know you are using Prettier:

```
echo {}> .prettierrc.json
```
adding the following script to new **.prettierrc.json**

```
{
    "tabWidth": 4,
    "bracketSpacing": true
}
```
* Next, create a .prettierignore file and add the following:
```
dist
node_modules
coverge
```
*_add `coverge` to all ignores files in your project_*

* finally update the package.json to let pritter running.




---


## Running the Application


To **build** the application
```
tsc
```
To **run** the application and only compile (without running [prettier] and  [ESLint] ) 

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
  - `npm run build:prettier`
  - `npm run build:lint`
  - `npm run start`

---

### *4. Adding [testing] (mocha and chai) to the project*

#### *_Installation and setup_*

* Run the following commands to setup [testing] in your *TypeScript project*.

```
npm install chai mocha ts-node @types/chai @types/mocha --save-dev
```

* add new folder to the project named **tests**
* add new file **hello.spec.ts** under folder **test**
* add new file for hello function under **src** 
* write the following to each files:

1. hello fun
```
export const hello = () => "Hello world!";
```

2. index

```
import { hello } from "./hello";

const message = hello();
console.log(message);
```
3. hello.spec.ts

```
import { hello } from "../src/hello";
import { expect } from "chai";
import "mocha";

describe("Hello function", () => {
    it("should return hello world", () => {
        const result = hello();
        expect(result).to.equal("Hello world!");
    });
});

```

* finally update the package.json to let test running.




---


## Running the Application


To **build** the application
```
tsc
```
To **run** the application and only compile (without running [testing], [prettier] and  [ESLint] ) 

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
   - `npm run build:test`
  - `npm run build:prettier`
  - `npm run build:lint`
  - `npm run start`

---




[npm]: https://docs.npmjs.com/cli/install

[ESLint]: https://khalilstemmler.com/blogs/typescript/eslint-for-typescript/

[prettier]: https://prettier.io/docs/en/install.html

[testing]: https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2




