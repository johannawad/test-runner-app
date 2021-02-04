# Getting Started with Test Runner App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Initialise the project by running: (the prequisite is for this is to have Node and Yarn globally installed): -> https://classic.yarnpkg.com/en/docs/install/

### `yarn` 

To run the project locally:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### About the application
The application uses the Redux, a library that follows the flux pattern. This library adapts a few design patterns and implements a 
unidirectional flow of data within the application. The flow incorporates a fewsoftware design patters. The State of the application 
uses the Singleton pattern. This means that there can only be instance of the State. This allows for a centralized state management 
ensuring that all changes to the state are applied to one place, making it easier to track and understand. The processing and flow 
of data is achieved with the use of Actions, Reducers and Dispatchers. The application also uses Redux Saga for handling side-effects.
Styling is implemented using the styled-component library. The application defines global and shared styles which can be extended in
the future. 
