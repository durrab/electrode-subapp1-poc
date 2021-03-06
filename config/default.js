"use strict";

const defaultListenPort = 3000;
require('fastify-static');
const path = require("path")

const portFromEnv = () => {
  const x = parseInt(process.env.APP_SERVER_PORT || process.env.PORT, 10);
  /* istanbul ignore next */
  return x !== null && !isNaN(x) ? x : defaultListenPort;
};

console.log(`checking HOST: ${process.env.HOST}`);
console.log(`checking HOST IP: ${process.env.HOST_IP}`);
console.log(`checking PORT: ${portFromEnv()}`);

module.exports = {

  plugins: {
    "@xarc/app-dev": {
      enable: process.env.WEBPACK_DEV === "true"
    },
    "subapp-server": { options: { insertTokenIds: true } },
    fetchUserInfoPlugin: {
      module: "./{{env.APP_SRC_DIR}}/server/plugins/fetch"
    }
  },
  connections: {
    contentServer:{
      port: 3800,
      host: "localhost"
    },
    default: {
      host: process.env.HOST,
      address: process.env.HOST_IP || "0.0.0.0",
      port: portFromEnv(),
      routes: {
        cors: false
      },
      state: {
        ignoreErrors: true
      }
    }
  }
};
