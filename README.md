Remaining Steps
- build your own backend in NodeJS & Express
- backend tests with mocked calls
- call the backend from your frontend
- testing with more realistic data (stub the calls)
- introduce Redux (to store all the previous selections -> have that used for the final table generate button (todo: create a button) instead of the current way via props)
- 404 page
- hook up cosmodb database
- css modules
- host via Azure

When you add the -D flag, or --save-dev, you are installing it as a development dependency, which adds it to the devDependencies list.

`npm run start-user-interface`
`npm run start-server`

-
Single responsibility principle simply means giving only one responsibility to a component and letting it execute it perfectly, be it saving data, running the application logic or ensuring the delivery of the messages throughout the system.

This approach gives us a lot of flexibility and makes management easier, like when upgrading a database server.

We can also have dedicated teams and code repositories for every component, which keeps things cleaner.

The single responsibility principle is then reason why I was never a fan of stored procedures.

Stored procedures enable us to add business logic to the database, which is a big no for me. What if, in the future, we want to plug in a different database? Where do we take the business logic? Do we take it to the new database? Or do we try to refactor the application code and squeeze in the stored procedure logic somewhere?

A database should not hold business logic. It should only take care of persisting the data. This is what the single responsibility principle is, and this is why we have separate tiers for separate components.
-

Separation of concerns kind of means the same thing, be concerned about your work only and stop worrying about the rest of the stuff.

These principles act at all the levels of the service, both at the tier level and the code level.

Keeping the components separate makes them reusable. Different services can use the same database, messaging server or any component as long as they are not tightly coupled with each other.

Having loosely coupled components is the way to go. The approach makes scaling the service easy in the future when things grow beyond a certain level.
-

Difference between layers & tiers
Note: Don’t confuse tiers with the layers of the application. Some prefer to use them interchangeably. However, in the industry, layers of an application typically means the user interface layer, business layer, service layer, or the data access layer.

The difference between layers and tiers is that layers represent the conceptual organization of the code and its components, whereas, tiers represent the physical separation of components.

All these layers together can be used in any tiered application. Be it single, two, three or n-tier. I’ll discuss these layers in detail in the course ahead.
-


A tier is the logical separation of components in an application or a service. The components are the database, backend application server, user interface, messaging, and caching.

When should we choose a single tier architecture for our application?
- When we do not want any network latency.

Which of the following are the correct reasons to choose a two-tier architecture for our application?
- When we need to minimize the network latency.
    - When the business logic resides on the client there are fewer network calls to the backend server which keeps the latency of the application low.
- When we need control over data in our application.
    - All the data in the application is stored in the database server hosted by the business. The business has complete control over the database component.

Which of the following are correct reasons to choose a three-tier architecture for our application?
- When we need control over the code/business logic of our application and want it to be secure.
  - In a three-tier architecture, the business logic resides in the backend server. No client has access to the backend code, and this makes the code secure. Also, the business has complete control over it.
- When we need control over data in our application.
  - All the data in the application is stored in the database server hosted by the business. The business has complete control over the database component.

Why do software applications have different tiers? Which of the following option(s) are correct?
- To assign dedicated roles/tasks to different components for a loosely coupled architecture.
- To make the management, maintenance of the system and the introduction of new features in the application easier.

Do layers and tiers in an application have the same meaning?
- No!! Tiers and layers in software architecture have different meanings and cannot be used interchangeably.
 - Tiers are the logical separation of components in an application or a service. The components are the database, backend application server, user interface, messaging, and caching.
 - Layers in an application mean the logical separation at the code level. The layers are the user interface layer, business layer, service layer, and data access layer.

# note that if you don't want to use create-react-app then you need to know how to build a website from scratch using webpack or parcel 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
