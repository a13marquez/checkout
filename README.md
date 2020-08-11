# Checkout Example

Beer store checkout page with some discounts applied. Live version [here](https://www.checkout.a13marquez.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To run this project you only need [Node and NPM](https://nodejs.org/es/download/package-manager/) installed on your machine.

Also you need git to clone the project.

### Installing

Inside the project folder run:

```bash
  npm ci
```

Once installed to run the project use:

```bash
  npm run dev
```

## Running the tests

To run the test use the following command:

```bash
  npm run test
```

If you prefer to keep the tests running and watching the files run:

```bash
  npm run test:watch
```

## Deployment

To deploy the project first is needed to build the production files using the following command:

```bash
  npm run build
```

This will create a dist folder that can be deployed in any server. Right 
now the project is deployed in Netlify.

## Built With

* [React](https://reactjs.org/) - The UI library used
* [Redux](https://redux.js.org/) - State Management
* [Typescript](https://www.typescriptlang.org/) - Typing
* [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) - Testing
* [Bit](https://bit.dev/) - Components Repository
* [Netlify](https://www.netlify.com) - Deployment Platform

## Authors

* **Álvaro Márquez** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
