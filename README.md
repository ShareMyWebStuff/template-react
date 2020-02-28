
## Environment Setup

In the root directory of my project I have two environment files which will be read at startup. The NODE_ENV variable will automatically be set to reflect your environment ( development / production ) and hence this is used to determine which of the two environment files is loaded in and what environment variables are set.

* .env.development
* .env.production

**.env.development**

This file needs to have the definition of the API url for the development server.

REACT_APP_API_URL='http://localhost:3002/'

**.env.production**

This file needs to have the definition of the API url for the production server.

REACT_APP_API_URL='https://api.sharemytutoring.com/prod/'

## React Project Structure

These are the following directories in the repository at the root level. 

> public
> src
> Utils
> .env
> .gitignore
> jsconfig.json
> package.json

**Public Directory**

The public directory contains the usual react items.
> favicon.ico
> index.html
> manifest.json
> robots.txt

You will want to replace the favicon.ico with your own.

**Src Directory**

The src directory is where we keep all our code and tests for our code. 

> src
    > __ tests __
    > actions
    > components
    > icons
    > images
    > reducers
    > sass
    > index.js
    > Root.js
    > setupTests.js

**Utils Directory**

The utils directory contains code to help with the enzyme tests.

> index.js


## END

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
