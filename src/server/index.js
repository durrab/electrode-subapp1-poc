"use strict";

/* eslint-disable global-require */

process.on("SIGINT", () => {
  process.exit(0);
});

const electrodeConfippet = require("electrode-confippet");
const { loadRuntimeSupport } = require("@xarc/app");
const fastify = require('fastify')(
  {logger: true}
)
const path = require('path')

const electrodeServer = require("@xarc/fastify-server");

//
// sample to show electrode server startup events
// https://github.com/electrode-io/electrode-server#listener-function
//
function setupElectrodeServerEvents(emitter) {
  emitter.on("config-composed", (data, next) => next());
  emitter.on("server-created", (data, next) => next());
  emitter.on("connection-set", (data, next) => next());
  emitter.on("plugins-sorted", (data, next) => next());
  emitter.on("plugins-registered", (data, next) => next());
  emitter.on("server-started", (data, next) => next());
  emitter.on("complete", (data, next) => next());
}

const startServer = config => {

  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, './public'),
    prefix: '/public/', // optional: default '/'
  })

  // Run content the server!
  const contentServer = config.connections.contentServer;
  fastify.listen(contentServer.port || 3900, function (err, address) {
     console.log(`Content Server is now listening on ${address}`)
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }

  })

  if (!config.listener) {
    config.listener = setupElectrodeServerEvents;
  }

  return electrodeServer(config);
};

//

module.exports = async () => {
  await loadRuntimeSupport({
    awaitReady: false,
    isomorphicCdnOptions: {
      prodOnly: true
    }
  });
  const config = electrodeConfippet.config;
  const server = await startServer(config);
  return server;
};

if (require.main === module) {
  module.exports();
}
