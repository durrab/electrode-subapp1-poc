const { loadDevTasks, xrun } = require("@xarc/app-dev");

exports.xrun = xrun;

xrun.updateEnv(
  {
    WEBPACK_DEV_PORT: 0,
    APP_SERVER_PORT: 0,
    HOST: "localhost",
    PORT: 3001
  },
  { override: true }
);

const deps = require("./package.json").dependencies;

const  remote = {
  name: "poc-subapp",
  subAppsToExpose: ["Deal", "Extras", "MainBody","Vehicle"],
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
}

loadDevTasks(xrun, {
  webpackOptions: {
    cssModuleSupport: "all",
    minify: true,
    v1RemoteSubApps : process.env.REMOTE ? remote : null,
  }
});

xrun.load("app", {
  webpackOptions: {
    cssModuleSupport: false,
    minify: true,
    v1RemoteSubApps : process.env.REMOTE ? remote : null,
  }
})

