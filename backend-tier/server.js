/*
The primary task of a web server is to receive the requests from the client
and provide the response after executing the business logic based on the request parameters received from the client.

The client and the server have a request-response model.
The client sends the request and the server responds with the data.

*/

const express = require('express');
const server = express();

/*
Middleware is any function that is invoked by the Express.js before your final request handler is,
and thus sits in the middle between a raw request and the final intended route.

Here's the general form:
app.use([[function here]]) registers some function to run for each incoming request.

One of the most popular logging middlewares is morgan, created by the express team.
Passing it to app.use() makes it intercept all request and responses
- every time you send a response, Morgan logs the request and response information.
Morgan is also very configurable, with lot's of "modes" (I reccomend using the "dev" mode during development).
*/
server.use(morgan('dev'));


/*
The entire communication happens over the HTTP protocol.
It is the protocol for data exchange over the World Wide Web.
HTTP protocol is a request-response protocol that defines how information is transmitted across the web.

It’s a stateless protocol, and every process over HTTP is executed independently
and has no knowledge of previous processes.

With the availability of the endpoints, the backend service does not have to worry about the client implementation. It just calls out to its multiple clients and says “Hey everyone! Here is the URL address of the resource/information you need. Hit it when you need it. Any client with the required authorization to access a resource can access it”.

Developers can have different implementations with separate codebases, for different clients, on a mobile browser, a desktop browser, a tablet or an API testing tool. Introducing new types of clients or modifying the client code has no effect on the functionality of the backend service.

This means the clients and the backend service are decoupled.
*/
server.get("/", (req, res) => res.send("Hello World"));

const PORT = 1337;

server.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
