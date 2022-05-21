const { loadDevTasks, xrun } = require("@xarc/app-dev");

exports.xrun = xrun;
console.log(`checking port from cloud:===> ${process.env.PORT}`);

xrun.updateEnv(
  {
    HOST: "samba.azurewebsites.net",
    //WEBPACK_DEV_PORT: 3200,
    //APP_SERVER_PORT: 3100,
    PORT: process.env.PORT || 80,
    WEBPACK_DEV_MIDDLEWARE: true
  },
  { override: true }
);

if (process.env.REMOTE) {
  console.log(`got REMOTE `);
  /*const deps = require("./package.json").dependencies;

  const remote = {
    name: "poc-subapp",
    subAppsToExpose: ["Deal", "Extras", "MainBody", "Vehicle"],
    shared: {
      react: {
        requiredVersion: deps.react,
        import: "react",
        shareKey: "react",
        shareScope: "default",
        singleton: true
      },
      "react-dom": {
        requiredVersion: deps["react-dom"],
        singleton: true
      },
      history: {
        requiredVersion: deps["history"],
        singleton: true
      },
      "subapp-web": {
        requiredVersion: deps["subapp-web"],
        singleton: true
      },
      "@babel/runtime": {
        requiredVersion: deps["@babel/runtime"],
        singleton: true
      }
    }
  };*/

  loadDevTasks(xrun, {
    webpackOptions: {
      cssModuleSupport: "all",
      minify: true,
     // v1RemoteSubApps: remote
    }
  });
} else {
  loadDevTasks(xrun, {
    webpackOptions: {
      cssModuleSupport: "all",
      minify: true
    }
  });
}

xrun.load("app", {
  webpackOptions: {
    cssModuleSupport: "all",
    minify: true
  }
});
