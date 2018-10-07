"use strict";



//  P A C K A G E

const fastify = require("fastify")();



//  P R O G R A M

fastify.register(require("../."));

fastify.ready(err => {
  if (err) throw err;
  console.log("Server started"); // eslint-disable-line

  fastify.ws.on("connection", socket => {
    console.log("Client connected"); // eslint-disable-line

    socket.on("message", msg => socket.send(msg)); // creates an echo server
    socket.on("close", () => console.log("Client disconnected")); // eslint-disable-line
  });
});

fastify.listen(8888);
