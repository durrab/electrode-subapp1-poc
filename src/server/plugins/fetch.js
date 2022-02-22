const plugin = {pkg: { name: "fetchUserInfoPlugin"}}
const path = require('path')
const fs = require('fs')
const { default: axios } = require('axios')
const vehicles = require("./vehicles.json");

plugin.register = async (server, options) => {

  console.log(`registering public path here ${path.join(__dirname, './public')}`)
  server.register(require('fastify-static'), {
    root: path.join(__dirname, './public'),
    prefix: '/public/', // optional: default '/'
  })
    server.route({
      method: "GET",
      url: "/remote_file",
      async handler(request, reply) {
        try {
          const bufferFile = fs.readFileSync(path.resolve(__dirname,"../../static/content/js/_remote_~.poc_subapp.js"))
          reply.type("text/javascript");
          reply.send(bufferFile);
        } catch (error) {
          reply.send(error.stack);
        }
      },
    });
    server.route({
        method: "GET",
        url: "/remote",
        async handler(request, reply) {
          try {
            console.log(path.resolve(__dirname,"../../static/content/js/_remote_~.poc_subapp.js"));
            reply.type("application/json");
            reply.send({message:"Durrab Test"});
          } catch (error) {
            reply.send(error.stack);
          }
        },
      });

      server.route({
        method: "GET",
        url: "/api/cars",
        async handler(request, reply) {
          try {
           // const response = await axios.get("https://cvdt-dev2.cerencedemo.com/api/v1/car?fields=vin,imei,location");
            const cars = vehicles;//response.data.cars;
            reply.type("application/json");
            reply.send(cars);
          } catch (error) {
            reply.send(error.stack);
          }
        },
      });

}

plugin.register.attributes = {
    name:"fetchUserInfoPlugin",
    version: "1.0.0"
}

module.exports = plugin;
