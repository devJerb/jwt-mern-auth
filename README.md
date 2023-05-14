# JWT MERN Google Auth

Yariga as a full stack MERN dashboard app made using CRUD, google auth, charts from a Refine boilerplate.

This project dives deep on the web app JWT using google authentication and providing a dashboard with charts and outputs.

## Folder Structure

Here's the folder structure found on the repository of both client and server directories

```

jwt-mern-auth/
|- client
  |-- src/
    |-- assets/
    |-- components/
    |-- agent/
    |-- charts/
    |-- common/
    |-- home/
    |-- layout/
    |-- constants/
    |-- contexts/
    |-- interfaces/
    |-- pages/
    |-- utils/
    |-- App.tsx
  |-- public/
  |-- .env
  |- server
    |-- controllers/
    |-- mongodb/
    |-- routes/
    |-- models/
    |-- .env

```

## Client Directory

**src/components**

`agent/` `charts/` `common/` `home/` `layout/`

These folders contained in the component directory are all the UI to be found on the web app with the usage of `react-apexcharts` with Yariga serving to reduce any repetitive code while using `material-ui`.

**src/assets**

`index.js`

This contains the logo for Yariga and its variants.

**src/constants**

`index.ts`

The following is a block of JavaScript code which declares an array consisting of objects known as `propertyReferralsInfo`. These objects symbolize different sources of referrals for a property, such as a real estate property. The array comprises five objects that correspond to five diverse referral sources: Social Media, Marketplace, Websites, Digital Ads, and Others. Each object includes the percentage of referrals that are generated by the corresponding source and an individual color code that represents the referral source.

**src/interfaces**

`agent.d.ts` `common.d.ts` `google.d.ts` `home.d.ts` `property.d.ts` `theme.d.ts` 

In Refine, the interfaces directory serves as a storage location for TypeScript interfaces. These interfaces define the various data types used within the application. By doing so, the TypeScript compiler can make use of type information, which enables type-checking and better autocompletion and error messages.

The interfaces directory typically consists of one or more .ts files, with each file exporting one or more interfaces. These interfaces describe the structure of the data used in the application. For instance, if the application uses data from an external API, it can define an interface that outlines the structure of the API response.

By keeping interfaces in a separate directory, the codebase is more structured and simpler to maintain. It also promotes sound coding practices by facilitating the definition and enforcement of types throughout the application.

The file `theme.d.ts` remains customizable

```

import "@refinedev/mui";
export interface CustomTheme {
    // Add custom variables here like below:
    // status: {
    //   danger: string;
    // };
}

declare module "@mui/material/styles" {
    // @ts-ignore
    interface Theme extends import("@mui/material/styles").Theme, CustomTheme {}
    interface ThemeOptions
        // @ts-ignore
        extends import("@mui/material/styles").ThemeOptions,
            CustomTheme {}
}

```

**src/pages**

`agent-profile.tsx` `agent.tsx``all-properties.tsx` `create-property.tsx` `edit-property.tsx` `home.tsx` `index.ts` `login.tsx` `my-profile.tsx` `property-details.tsx`

The directory is utilized to hold the React components that correspond to the various pages of the application. These components usually make use of Refine's built-in components and hooks to provide a comprehensive user interface for interacting with the data in the application.

**src/utils**

`parse-jwt.tsx`

The code provided defines a function known as `parseJwt`. It accepts a JSON Web Token (JWT) string as input and returns the decoded payload in the form of an object of type `UserPayload`. This `UserPayload` type is imported from an external file called google.`ts` in the interfaces directory.

In the `parseJwt` function, the JWT is split into its three components: header, payload, and signature. The payload is then extracted and decoded from base64 to JSON format. The resulting JSON string is parsed into a JavaScript object that includes the properties defined in the UserPayload type.

## Server Directory

**/controllers**

`property.controller.js` `user.controller.js`

The controllers folder plays a critical role in managing incoming HTTP requests and generating corresponding HTTP responses. Each file contained within the controllers folder usually represents a logical entity or resource in the application and includes functions that manage different HTTP methods, such as GET, POST, PUT, and DELETE, for that entity.

The primary function of the `controllers` is to encapsulate the business logic and data manipulation necessary for various HTTP requests that the application processes. To accomplish this, the controller functions usually accept the request object as input, extract essential data from the request, such as query parameters or request body, and execute the required operations on the data, such as reading from or writing to the database. Following this, the functions generate a suitable HTTP response, which can be a JSON object or an HTTP status code, and transmit it back to the client. By doing this, `controllers` ensure that the application's business logic and data manipulation are modular, easily maintainable, and reusable across various parts of the application.

**/models**

`property.js` `user.js`

This contains the Schema for every client HTTP requests of user and property with its model as 

For `user.js`

| id     | type   | required |
|--------|--------|----------|
| name   | String | true     |
| email  | String | true     |
| avatar | String | true     |

For `property.js`

| id           | type     | required |
|--------------|----------|----------|
| title        | String   | true     |
| description  | String   | true     |
| propertyType | String   | true     |
| location     | String   | true     |
| price        | Number   | true     |
| photo        | String   | true     |
| creator      | ObjectId | 'User'   |

**/mongodb**

`/models` `connect.js` 

The `mongodb` folder serves the purpose of defining and maintaining the connection to a MongoDB database. This directory houses a `connect.js` file, which exports a function to initiate a connection to a MongoDB database utilizing the Mongoose library.

The models folder, found within the MongoDB directory, is used to create Mongoose models for MongoDB collections. A Mongoose model is a wrapper around a MongoDB collection that simplifies and structures the way data in that collection can be interacted with. It provides a more convenient way to manipulate and retrieve data from the collection by allowing developers to interact with the data in a structured and logical manner.

**/routes**

`property.routes.js` `user.routes.js`

The routes folder serves the purpose of defining the API endpoints or routes that the server will respond to. Typically, each file in the routes folder represents a resource or set of related endpoints for a particular domain of the application.

To define the routes, the Express.js routing API is used, which maps HTTP methods like GET, POST, PUT, DELETE to specific URL paths and controller functions that handle the request and response. The files in the routes folder may also define any middleware or validation logic required to be applied to the requests.

## Environment Variables

```

REACT_APP_GOOGLE_CLIENT_ID=<GOOGLE_CLIENT_ID>
REACT_APP_GOOGLE_CLIENT_SECRET=<GOOGLE_CLIENT_SECRET>
REACT_APP_SERVER_URL=<SERVER_URL>

MONGODB_URL=<MONGODB_URL>

CLOUDINARY_CLOUD_NAME=<CLOUD_NAME>
CLOUDINARY_API_KEY=<API_KEY>
CLOUDINARY_API_SECRET=<API_SECRET>

```

## Installation

You can start by cloning or downloading the repository

`git clone https://github.com/<username>/jwt-mern-auth.git`

Make sure to change directory before installing the necessary dependencies for the web app

On the client directory start by

```

cd client
npm install

```

And for the server directory

```

cd client
npm install

```

You can then start running the front end client directory on a localhost server by

`npm run dev`

On the server side, the back end will run on the port `localhost:8080`

`npm start`
