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

server.get("/", (req, res) => res.send("Hello World"));

const PORT = 1337;

server.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
