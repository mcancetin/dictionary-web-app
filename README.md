# React Starter Template

This project allows users to quickly start a React project without dealing with configurations for React, Vite, ESLint, Prettier, TailwindCSS, and Vitest.

## Features

-   **React**: A JavaScript library for building user interfaces.
-   **Vite**: A fast build tool and development server.
-   **ESLint**: A tool for identifying and fixing problems in JavaScript code.
-   **Prettier**: An opinionated code formatter.
-   **TailwindCSS**: A utility-first CSS framework.
-   **Vitest**: A Vite-native unit test framework.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Project Structure

-   [src/](src/): Contains the source code.

    -   [`App.jsx`](src/App.jsx): Main application component.
    -   [`main.jsx`](src/main.jsx): Entry point of the application.
    -   [`assets/`](src/assets/): Static assets like images and fonts.
    -   [`index.css`](src/index.css): Global CSS file.
    -   [tests/](src/tests/): Contains unit tests.
        -   [`App.test.jsx`](src/tests/App.test.jsx): Unit tests for `App.jsx`.
        -   [`setup.js`](src/tests/setup.js): Test setup file.

-   [public/](public/): Contains static files that are served directly.

-   Configuration files:
    -   [`.prettierrc`](.prettierrc): Prettier configuration.
    -   [`eslint.config.js`](eslint.config.js): ESLint configuration.
    -   [`tailwind.config.js`](tailwind.config.js): TailwindCSS configuration.
    -   [`vite.config.js`](vite.config.js): Vite configuration.
    -   [`postcss.config.js`](postcss.config.js): PostCSS configuration.

## License

This project is licensed under the MIT License.
