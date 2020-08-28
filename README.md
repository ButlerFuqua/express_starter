# Express Starter

A REST API built using Node.js, Express.js, In-memory MongoDB and Mongoose.


## Table of Contents

- [Express Starter](#express-starter)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
- [Dependencies](#dependencies)
- [Install and run app](#install-and-run-app)
- [Test app](#test-app)
- [App Structure](#app-structure)

## Requirements

* [Node.js](https://nodejs.org/dist/v12.14.0/) v12.14.0 or higher
* [yarn](https://classic.yarnpkg.com/en/docs/install/)
  * > You can also use npm, but the app was built using yarn and that is what the documentation will reflect.

# Dependencies

* [Express.js](https://expressjs.com/)
* In-memory database using [mongodb-memory-server](https://github.com/nodkz/mongodb-memory-server)
  * > This database does not persist.
  * > It's just there to get up and running quickly and for testig
* Interface with database with [Mongoose](https://mongoosejs.com/docs/)
* Password hashing with [bcrypt.js](https://www.npmjs.com/package/bcrypt) _// Not yet impemented_
* Cross Origin Request using [cors](https://www.npmjs.com/package/cors)
* Reading environment variables using [dotenv](https://www.npmjs.com/package/dotenv)
* Testing with [Jest](https://jestjs.io/docs/en/getting-started)
* Dev server using [nodemon](https://www.npmjs.com/package/nodemon)

# Install and run app

> **IMPORTANT**: The MongoDB binaries will be downloaded to the node_modules directory the first time the server is ran. This may cause a delay in seeing a response from the database.
> This is done from the dev dependency `mongodb-memory-server` that uses an in-memory database.


```
git clone https://github.com/ButlerFuqua/express_starter.git
cd express_starter
yarn
yarn dev
```

That's it!

The app should be listening at `http://localhost:8080`. Alternatively you can create a `.env` file in the root and assign a different port with the `PORT` variable.

> NOTE: An environment variable named `PORT` will override the default port of `8080`

Run `yarn start` instead of `yarn dev` in a production environment. `yarn dev` listens for changes using nodemon.

# Test app

Simply run `yarn test` from the root of the application to run the scripted tests.

The testing files can be found in the `tests` directory. Jest automatically runs all files with the `.test.js` extension.

# App Structure 

* `src`
  * `api`
    * handle routes and middleware
  * `database`
    * connect to and seed database
  * `models`
    * model schema and database logic layer
  * `services`
    * business logic layer
  * `validation` 
    * handle validation
  * app.js - entry point of app
* `tests`
  * contains jest tests
* jest-mongo-config - configuration for temp mongoDB used for testing
* jest-config - configuration file for testing
* package.json - app info, list of dependencies and scripts
* README.md - overview of app

