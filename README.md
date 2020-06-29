Cien Lunas is a React web application using AWS services such as Amplify for hosting. 
To see how the project was initialied follow the [Amazon AWS Starter Page](https://docs.amplify.aws/cli/start/install).

## AWS Hosting and Continuous Deployment CD

Using AWS Amplify CLI you can add AWS features one of which is hosting and CD. Once you init your project and select your profile with the correct promissions you can use

## Amplify Init

In order to begin adding hosting along with the option to add continuos deployment through github. For the source directory path leave it default src which should be how the create-react-app sets up your workspace. For the build command I used npm run build which is the command I use to compile my React app after having it in a decent state. The start command for me is npm start since that's how I test using local:host. I selected the default profile I made earlier. 

(Getting started with AWS Hosting)[https://docs.aws.amazon.com/amplify/latest/userguide/getting-started.html]

## Add Hosting

* amplify add hosting

Once the initialization of the project is complete it's time to add hosting. After using amplify add hosting just follow the terminal commands until you're asked to add your github through a web browser. Continue on until you reach selecting your backend enviroment which is where you'll create one or use an existing eviroment. Add an existing role and then you can move on to the next screen to save and deploy.

After you deploy you could go back to the terminal hit enter see you're amplify app url as well on the browser see the deployment process happening automatically. This is an improvement over firebase where you have to manuall do an npm run build, firebase deploy and then still add the project to github. This method handles everything with a git hub push.

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
