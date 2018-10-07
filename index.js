"use strict";



//  P A C K A G E

const fp = require("fastify-plugin");



//  E X P O R T

module.exports = exports = fp((fastify, opts, next) => {
  const WebSocketServer = require("ws").Server;
  const wss = new WebSocketServer({ server: fastify.server });

  fastify.decorate("ws", wss);
  fastify.addHook("onClose", (fastify, done) => fastify.ws.close(done));

  next();
}, {
  fastify: "1.x",
  name: "fastify-ws"
});
