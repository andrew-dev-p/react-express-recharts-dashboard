# Description

This is an **Interactive Dashboard** built with **Recharts**, **React**, **TypeScript**, and **Express**, designed to help users visualize and analyze data with a focus on predicting future trends using machine learning regression charts.

## Features

- **Data Visualization**: Display interactive charts and graphs to track metrics such as performance, sales, and user engagement.

- **Responsive Design**: Optimized for both desktop and mobile devices, providing a seamless experience across all platforms.

- **Machine Learning Regression Chart**: A predictive chart that uses machine learning to analyze past data and forecast next year's changes in key metrics.

## Technologies Used

- **React**: A JavaScript library for building user interfaces, providing an efficient and declarative way to build interactive UIs.

- **Recharts**: A composable charting library for building customizable and responsive charts with React.

- **TypeScript**: A strongly typed superset of JavaScript to improve code quality and maintainability.

- **Express**: A minimal web application framework for Node.js, used to handle server-side operations.

- **MongoDB / Mongoose**: MongoDB is a NoSQL database used for storing and managing data, and Mongoose is an ODM (Object Data Modeling) library that makes working with MongoDB easier in Node.js.

- **RTK Query**: A powerful data-fetching and caching tool, integrated with Redux Toolkit, for fetching and caching data seamlessly.

- **Material-UI (MUI)**: A React UI library providing pre-built components that are easy to customize, ensuring a clean and modern UI design.

- **React Router**: A standard library for routing in React applications, providing navigation and managing URLs within the app.

## Installation

To run the app, you'll need to set up both the client and server directories.

### Client (Frontend)

1. Navigate to the **client** directory and install the dependencies:

```bash
$ cd client
$ npm install
### Client (Frontend)
```

### Server (Backend)

1. Navigate to the server directory and install the dependencies:

```bash
$ cd server
$ npm install
```

## Running the App

### Client

Start the development server for the frontend:

```bash
$ cd client
$ npm run dev
```

### Server

Start the development server for the backend:

```bash
$ cd server
$ npm run dev
```

The client will run on http://localhost:5173 by default, and the server will run on http://localhost:3000.

## Set up your .env files

### Client (client/.env.local)

Create a .env.local file in the client directory and configure the following environment variable:

```bash
VITE_BASE_URL=http://localhost:3000
```

### Server (server/.env.local)

Create a .env.local file in the server directory and configure the following environment variables:

```bash
MONGO_URL=your_mongo_database_url
PORT=3000
```
