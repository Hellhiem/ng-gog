# GOG Game Store - Angular Playground

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.13. 

Before you start be sure to install the Angular CLI globally from the link above.
## How to run the project
To run this Angular project, follow these steps:

1. Install the necessary dependencies by running:

```bash
   npm install
 ```


2. Start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## E2E Testing
E2E tests are set up using [Cypress](https://www.cypress.io/). To run the E2E tests, follow these steps:

1. Run the application in development mode:

```bash
ng serve
```
2. Open a new terminal window and run the following command to start Cypress:

```bash 
npx cypress open
```
3. Select `E2E Testing` from the Cypress dashboard, and then choose the `base-app-flow` tests.
## Scripts

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

To run Eslint and check for code quality issues, use:

```bash
ng lint
```

To run TypeScript compiler checks, use:

```bash
npm type-check
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Architecture
The project is structured into several modules, each responsible for different parts of the application.

The folder structure follows flat architecture for readability.

### Structure
- `components`: Contains reusable components used across the application.
- `pages`: Contains the main pages of the application.
- `services`: Contains services for handling data and business logic.
- `types`: Contains TypeScript interfaces and types used throughout the application.
- `mocks`: Contains mock data for testing and development purposes.
- `assets`: Contains static assets like images and i18n internationalization files.
- `root/cypress`: Contains Cypress end-to-end tests.
- `root/husky`: Contains Husky hooks for pre-commit and pre-push checks.
