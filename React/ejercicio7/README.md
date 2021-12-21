# Movies World

Author: Martin I. Lupa Groppelli, December 2021.

Movie search responsive React SPA, with watchlist and search functionalities.

## Repository

https://github.com/MartinLupa/Movies-World-React-SPA

## How to use

Navigate to project folder and run:

```bash
npm install
npm start
```

## How to build

```bash
npm run build
npx serve-s build
```

## Project info

Tested with Node v14.16.1 and npm 6.14.12.

React-based responsive SPA.

Bootstrap.

Hooks: useState, useEffect, useContext, custom hook (useFetch).

Use of a global context to keep states while navigating between pages (I don´t use any database here).

Router: routing, conditional rendering of components with useLocation (Delete button only rendered on watch list page | Add to playlist button only rendered on the main page).

.env file to store keys.
