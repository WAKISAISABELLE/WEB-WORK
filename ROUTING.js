//Routing is the way how an application’s endpoints (URIs) respond to client requests.


// we define routing using methods of the Express app object that correspond to HTTP methods; 

// for example,
  
//app.get(), this is used to handle GET requests.

//app.post, i s used to handle POST requests.

//app.all(), is used to handle all HTTP methods.
//app.use(), is used to specify middleware as the callback function.


//A query string is a set of characters tacked onto the end of a URL.
//The query string begins after the question mark (?) and can have one or more parameters. 
// where each parameter is represented by a unique key-value pair or a set of two linked data items.
//  An equals sign (=) is the one which separates each key and value for example https://www.google.com/search?q=education.

// characteristics of Query Parameters

//they positioned to the right of the question mark (?)
//Can be neglected since they aren’t part of the URL
//they are used to sort and filter resource

//why are Query strings  important

//They pass information to the web server, telling it what content to deliver or action to take. 

//They also pass information to other applications thus improving the user experience.

//They are important from a marketing perspective since they can be used to track website traffic and also monitor the search terms on the website.


//ii. Demonstrating Routes for Different HTTP Methods:
// const express = require('express')
// const app = express()

//get method route
//the respond will be "hello world" when a GET request is made to the homepage
// const user=[
// //   {name:'irene' , course:'data_science'}
// // ]
// // app.get('/user', (req, res) => {
// //   res.send(user)
// // })

// // app.listen(3004,()=>{
// //   console.log(`the server is running on port 3004
// //     `)
// // })


// const irene=[{name:'priscilla', age: 43}
// ]

// // POST method route
// app.post('/irene', (req, res) => {
//   res.send(irene)
// })

// app.listen(3002,()=>{
//   console.log(`the application on server is running on 3002`)
// })


// // PUT route
// app.put('/users/:id', (req, res) => {
//   res.send(`Update user with ID ${req.params.id}`);
// })


// // DELETE route
// app.delete('/users/:id', (req, res) => {
//   res.send(`Delete user with ID ${req.params.id}`);
// })


// // Explain the concept of middleware functions, including application-level, route-level, and errorhandling middleware.
// //Middleware functions are functions that run before a request is completed hence allowing the developer to modify the response.

// //TYPES OF MIDDLEWARE:

// //Application-level middleware:
// //Function: this executes for any incoming request to the application regardless of the route. 
// //Use case: Ideal for global tasks like logging request details, setting default headers, performing initial authentication checks. 
// //Example: Implementing a logger to record every incoming request to the console. 


// //Route-level middleware:

// //Function:this deals with a specific route or group of routes within an application.

// // Use case: Useful for route-specific validation, authorization checks and  modifying request data based on the route being accessed. 
// // Example: Checking if a user is logged in before accessing a protected route. 


// // Error-handling middleware:

// // Function:this was specifically designed to handles errors that occur during request processing and provide a controlled response to the client.

// // Key feature: Typically takes an additional parameter for the error object, allowing you to handle errors gracefully. 

// // Example: Logging errors to a file, sending a generic error message to the user and also performing custom error handling based on the error type


// //iv. Show how routing and middleware are used together to handle common web application tasks like
// //user authentication or API endpoint creation.

// //In web development, routing determines which part of your application handles a specific URL request and middleware acts as a middle layer that runs before the request reaches the designated route handler
// // thus allowing the developer to perform pre-processing tasks like authentication and authorization. 
// //in summary routing directs the traffic and middleware manages the "in-between" operations on that traffic.

// //example of using routing and middleware together
// const express = require('express');
// const app = express();

// // Application-level middleware
// app.use((req, res, next) => {
//     console.log('Application-level middleware');
//     next();
// });

// // Route-level middleware
// const authenticate = (req, res, next) => {
//     console.log('Route-level middleware: authenticate');
//     next();
// };

// app.get('/users', authenticate, (req, res) => {
//     res.send('Get to all users');
// });

// // Error-handling middleware
// // app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

// // Define the port the server will listen to (e.g., port 3000)
// const port = 3000;

// // Start the server on the defined port
// app.listen(port, () => {
//     console.log(`Server is running on ${port}`);
// });



// //v
// const express = require('express');
// const app = express();

// // Log requests
// app.use((req, res, next) => {
//   console.log(`Request: ${req.method} ${req.url}`);
//   next();
// });

// // Routes
// app.get('/', (req, res) => res.send('Hello, Irene'));
// app.get('/users', (req, res) => res.send(`hey,its me your friend`));

// // Error handling
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(200).send('i am on ucu main campus');
// });

// // Start server
// const port = 3007;
// app.listen(port, () => console.log(`the application is running on server ${port}`));
