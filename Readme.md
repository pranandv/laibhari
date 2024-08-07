# Laibhari

**Laibhari** is a minimalist JavaScript framework for building HTTP servers. It is designed with Marathi method names and error messages for an immersive Marathi programming experience. This framework allows you to define middlewares, routes, and handle requests and errors in Marathi.

## Features

- **Middleware Support**: Define and use middlewares to process requests.
- **Route Handling**: Define GET and POST routes for your server.
- **Custom Error Handling**: Customize error responses.
- **Charset Support**: Automatically sets charset to UTF-8 for all responses.
- **Custom Logging**: Use the `पहा` function for logging messages.

## Installation

To install the package, use npm:

```bash
npm install laibhari

# Usage
# Here is a basic example of how to use Laibhari:


const Laibhari = require('laibhari');
const app = new Laibhari();

app.वापरा((req, res, next) => {
  पाहा(`${req.method} ${req.url}`);
  next();
});

app.मिळवा('/', (req, res) => {
  res.end('नमस्कार, हे माझं API आहे');
});

app.मिळवा('/about', (req, res) => {
  res.end('हा API बद्दल पृष्ठ आहे');
});

app.मिळवा('/users', (req, res) => {
  const users = [
    { id: 1, name: 'अमोल' },
    { id: 2, name: 'प्रणव' },
  ];
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(users));
});

app.सर्वर_बनवा(3000, () => {
  पाहा('सर्व्हर 3000 वर चालू आहे');
});

```

API Methods
- **वापरा(middleware):** Adds a middleware function to the application.
- **मिळवा(path, handler):** Defines a GET route.
- **पोस्ट(path, handler):** Defines a POST route.
- **विनंती_हाताळा(req, res):** Handles incoming requests (internal use).
- **चुक_हाताळा(err, req, res):** Handles errors (internal use).
- **सर्वर_बनवा(port, callback):** Starts the server on the specified port.
- **पहा(message):** Logs messages to the console.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Contributions are welcome! Please feel free to open an issue or submit a pull request.

Contact


### `INSTRUCTIONS.md`

```markdown
# Laibhari Instructions

## Overview

**Laibhari** is a Marathi-based JavaScript framework for building HTTP servers. It includes methods and functionalities with Marathi terminology. Follow the instructions below to get started with using **Laibhari**.

## Setting Up

1. **Install the Package**

   Install the `laibhari` package using npm:

   ```bash
   npm install laibhari



const http = require('http');

/*
  Laibhari is a Marathi-based JavaScript framework for building HTTP servers. It includes methods and functionalities with Marathi terminology for a localized programming experience.
*/

/*
  ## Setting Up

  1. **Install the Package**

     Install the `laibhari` package using npm:

     ```bash
     npm install laibhari
     ```

  2. **Create Your Application**

     Create a new JavaScript file (e.g., `app.js`) and require the `laibhari` package:

     ```javascript
     const Laibhari = require('laibhari');
     ```

  3. **Initialize the App**

     Create a new instance of `Laibhari`:

     ```javascript
     const app = new Laibhari();
     ```

  ## Using the Framework

  1. **Add Middleware**

     Use the `वापरा` method to add middleware functions:

     ```javascript
     app.वापरा((req, res, next) => {
       पाहा(`${req.method} ${req.url}`);
       next();
     });
     ```

  2. **Define Routes**

     Define GET and POST routes using `मिळवा` and `पोस्ट` methods:

     ```javascript
     app.मिळवा('/', (req, res) => {
       res.end('नमस्कार, हे माझं API आहे');
     });

     app.पोस्ट('/submit', (req, res) => {
       res.end('डेटा सबमिट झाला');
     });
     ```

  3. **Start the Server**

     Use `सर्वर_बनवा` to start the server:

     ```javascript
     app.सर्वर_बनवा(3000, () => {
       पाहा('सर्व्हर 3000 वर चालू आहे');
     });
     ```

  ## Error Handling

  The framework automatically handles errors using the `चुक_हाताळा` method. Customize error messages and handling in your routes and middleware.

  ## Logging

  Use the global `पहा` function for logging messages to the console:

  ```javascript
  पाहा('सर्व्हर प्रारंभ झाला');

```

License
The package is licensed under the MIT License. Refer to the LICENSE file for details.
