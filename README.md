# GOG Game Store - Angular Application

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
