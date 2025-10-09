# Project Overview

This is a Next.js application called ProfileMe.dev that helps developers create a GitHub profile. The application is built with Next.js and uses TailwindCSS for styling. It allows users to add an introduction, skills, social links, badges, and support links to their profile. The application state is managed using React's Context API and a `useReducer` hook, with state persistence to `localStorage`.

# Building and Running

To build and run this project, you can use the following npm scripts:

*   **`npm run dev`**: Starts the development server.
*   **`npm run build`**: Creates a production build of the application.
*   **`npm run start`**: Starts the production server.
*   **`npm run lint`**: Lints the code using ESLint.

# Development Conventions

*   **Styling**: The project uses TailwindCSS for styling. Utility classes are used directly in the JSX.
*   **State Management**: Global state is managed using React's Context API and a `useReducer` hook. The state is defined in `pages/_app.js`.
*   **Components**: Components are organized in the `components` directory.
*   **Pages**: The application uses the `pages` directory for routing.
*   **Linting**: The project uses ESLint for code quality. The configuration is in `.eslintrc.json`.
