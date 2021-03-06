# Express Flowtype stack
This is a minimal boilerplate to start writing API services in Node.js with all the goodies of ES6+ and static typechecking.

## How do I start?
`yarn install` then `yarn run start:watch`

## What's in here?
- [x] ES6+ features
 + Minimal transpilation required with `babel-preset-env` (we could drop babel, when native async arrives to Node.js)
 + ES6 imports
 + Stripped down Flow annotations
- [x] ESlint (airbnb-base) + Flowtype
- [x] Type definitions for common packages
- [x] Jest testing engine
- [x] Debugging through Chrome DevTools
- [x] Sequelize ORM (promise-based - works great with `async/await`)

## What's more to cover/consider?
- [ ] Logging library. Currently [Debug](https://github.com/visionmedia/debug) is included, but does it meet our needs? What do we expect from such logging utility?
- [ ] Deployment process -  CircleCI, docker?
- [ ] Config files - should these be handled by `.env` file or maybe we should store config for different enviroments in a single JSON file
- [ ] Migrations
- [ ] Boilerplate code generation through CLI?
- [ ] Consider swapping out `babel-preset-env` with explicit plugin list
- [ ] Post-install download Flowtype definitions for external packages
- [ ] Write example tests

## Scripts

+ `start` - starts the server
+ `start:watch` - runs the server in watch mode (using nodemon), the code is linted before being runned.
+ `flow` - runs flow typechecker (however you probably won't have to use this as that's being covered by `eslint-plugin-flowtype` during linting process
+ `flow:download` - downloads Flowtype definitions for external packages
+ `test` - runs tests (through jest)
+ `test:watch` - runs tests in watch mode (re-run tests on changes)
+ `lint` - lints source files and tests
+ `lint:fix` - lints source files and tests, tries to automatically fix issues
