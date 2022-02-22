
# Electrode SubApp1 POC



Electrode SubApp1 POC is using Electrode Framework https://www.electrode.io/


# Getting Started

### Installation

1. Clone the repo
```sh
   git clone https://github.com/durrab/electrode-subapp1-poc.git
```
2. Make sure to install Node.js (minimum is v12 required) 
and then install fyn - (fyn is just like npm with more features)
https://www.npmjs.com/package/fyn

```sh
   npm i -g fyn
```
3. Then run fyn command
```sh
   fyn
```
4. Once fyn download all the dependencies then run this command for dev
```sh
   fun dev or npm run dev or fyn run dev
```
All of them will work

5. For production you can't run npm run start because it needs
a proper SSL certificate and domain name - But if we need to check
production version then we can run another script
```sh
   npm run mock or fyn run mock or fun mock
```

6. If you want to expose sub app as remote microsite
then you need to export it under xrun-tasks.js file
here is the sample

```sh
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
```

7. subAppsToExpose: ["Deal", "Extras", "MainBody","Vehicle"] 
This is where we expose our remote sub apps
8. Once we expose the subapps then we need to run another
build script to copy the javascript contents for our content
content server
```sh
   npm run build:remote or fyn run build:remote or fun build:remote
```
The above script will generated the remove sub apps url
copy it to public directory for our content server and serve it

Now if we run

```sh
   npm run dev or fyn run dev or fun dev
```
```sh
[app] Content Server is now listening on http://127.0.0.1:3800
[app] INFO: subapp-server disabled SSR metrics. options.report: {"enable":false}
[proxy] Electrode dev proxy listening on http port 3001
[proxy] 
[proxy] http://localhost:3001 (proxy) 
[proxy]   ├─http://localhost:57968 (app)
[proxy]   └─http://localhost:57959 (webpackDev)
[proxy] 
[proxy] View status at http://localhost:3001/__proxy_admin/status
[proxy] You can access your app at http://localhost:3001
[wds] webpack compiled successfully
+ [DEV ADMIN]: Press M show/hide menu | Q exit | L set App Log Show Level:  all  | webpack bundle is now VALID
     ┌──────────────────────────────────────────────────────────────────────┐
     │                   Electrode Dev Admin Console                        │
     │                                                                      │
     │   For your app server [app]                                          │
     │                                                                      │
     │     A - Restart D - inspect-brk mode I - inspect mode K - Kill       │
     │   For Electrode webpack dev server  [wds]                            │
     │     W - Restart E - inspect-brk mode R - inspect mode X - Kill       │
     │   L - Change App Log Show Level Z - Show/Hide App Log Alert          │
     │   P - Restart Dev Proxy M - Show this menu Q - Shutdown              │
     │                                                                      │
     │            App URL: http://localhost:3001                            │
     │        App Log URL: http://localhost:3001/__electrode_dev/log        │
     │      DEV dashboard: http://localhost:3001/__electrode_dev            │
     │   WebPack reporter: http://localhost:3001/__electrode_dev/reporter   │
     └──────────────────────────────────────────────────────────────────────┘
```
Check this out Content Server is now listening on http://127.0.0.1:3800
and this url is available like this

http://localhost:3800/public/js/_remote_~.poc_subapp.js

Our Application will run independently as well as served as
Remote Microsite App or we can call it Remote Sub App
## Electrode SubApps
This repo is extensively using Electrode Sub SubApps
Following below are more details of how to create Electrode SubApps

# subapp poc sample

## The Concept

- What is a subapp?

  At its core, a subapp is just a component, and if React is used, a React component.

  The goal is to not limit subapps to a framework, but at the moment React is the primary focus.

- What makes a subapp special?

  Electrode provide enhancements to make subapps special:

  - `Code splitting` - Automatically detect subapps and configure webpack to split your JS by subapps.
  - `Composable` - Create routes/pages that are composed of multiple subapps.
  - `Lazy loading` - Dynamically lazy load and create multiple instances of subapps on a page.
  - `Initial Props` - Automatically retrieve initial props before rendering subapps.
  - `Async data fetch` - Use React suspense to enable single pass async data fetch within components.
  - `Server Side Rendering` - Independently enable server side render for each subapp.
  - `Redux` - Automatically facilitate, initialize, and hydrate SSR data using Redux.
  - `React Router` - Automatically setup component routing using [react-router].
  - `Hot module Reload` - Automatically support Hot Module Reload during development.

## Introduction

**How do I create a subapp?**

- Electrode automatically look under the directory `src` for subapps.
- To create a subapp, create a directory for it and an entry file with `subapp-` prefix, or just `subapp.js`.
- Load your subapp with the `loadSubApp` API.

- The simplest sample of a subapp:

```js
import React from "react";
import { loadSubApp } from "subapp-web";

const Home = () => <div>Home</div>;

export default loadSubApp({
  name: "Home",
  Component: Home
});
```

And that's it! **TBD**: Electrode will detect your subapps and generate a route for each subapp base on its name. The `home` subapp will be used for the default route.

## Flexible Server Routing

To control server routes, you can create a `src/routes.js` file that specify the server routes.

Example:

```js
export const favicon = "static/favicon.png";

export default {
  "/": {
    pageTitle: "Home",
    subApps: ["./home", "./demo1"]
  },
  about: {
    pageTitle: "About us",
    subApps: ["./about"]
  }
};
```

## Initial Props

Your subapp can provide a `prepare` method that retrieves `props`.

Example:

```js
import React from "react";
import { loadSubApp } from "subapp-web";

const Demo1 = props => <div>Demo1 props: {JSON.stringify(props)}</div>;

export default loadSubApp({
  name: "Demo1",
  Component: Home,
  prepare() {
    return fetch("/api/demo-data");
  }
});
```

## Server Side Rendering

### Enable SSR for a subapp

When you create an instance of a subapp, you can specify attributes for that instance. To enable SSR, set the `serverSideRendering` attribute.

Example in `routes.js`:

```js
export const favicon = "static/favicon.png";

export default {
  "/": {
    pageTitle: "Home",
    subApps: [["./home", { serverSideRendering: true }], "./demo1"]
  },
  about: {
    pageTitle: "About us",
    subApps: ["./about"]
  }
};
```

### Server Side Data Fetching

You can have data fetching that only runs on server side, and send that to the client for hydration if you use Redux.

To enable server side only data fetching, create a file `server.js` under your subapp's directory, and have it exports a `prepare` method.

Example:

```js
export default {
  prepare: ({ request, context }) => {
    return fetch("remote-service-url/api/data").then(result => {
      return { initialState: result };
    });
  }
};
```

### Other SSR attributes

You can also control how your subapp works from server side to client side for each instance.

Some of the attributes supported:

- `hydrate` - Enable client side hydration of initial state from server. ie: Use `React.hydrate` API.
- `useStream` - Use the stream SSR APIs. ie: `ReactDomServer.renderToNodeStream`.
- `suspenseSsr` - Support suspense in SSR. No stream support.

## React Router and SPA

In addition to the basic server routes, your subapps can have its own routing using [react-router].

To enable, set the `useReactRouter` flag when loading your subapp and wrap your component with a router.

Example:

```js
import React from "react";
import { loadSubApp } from "subapp-web";
import { Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Main} {...props} />
        <Route path="/products" component={About} {...props} />
        <Route path="/contact" component={Contact} {...props} />
      </Switch>
    </div>
  );
};

export default loadSubApp({
  name: "Home",
  Component: withRouter(Home),
  useReactRouter: true
});
```

Electrode will automatically ensure your subapp is integrated with `StaticRouter` when doing SSR and `DynamicRouter` with `history` when running in the browser.

**SPA** Further, you can have other subapps on the same page, and those will stay persistent while your subapp that is enabled with [react-router] will change. When loading each of the [react-router] routes, your page will be properly server side rendered.

## Redux

Electrode enables automatic integration with Redux for your subapps. To enable, add `redux` and `react-redux` to your dependencies, and use `reduxLoadSubApp` from the module `subapp-redux`, and provide reducers or `reduxCreateStore` for the subapp.

Example:

```js
import React from "react";
import { reduxLoadSubApp } from "subapp-redux";
import { connect } from "react-redux";
import reducers from "./reducers";

const Home = props => <div>Home</div>;

const mapStateToProps = state => state;

export default reduxLoadSubApp({
  name: "Home",
  Component: connect(mapStateToProps, dispatch => ({ dispatch }))(Home),
  reduxCreateStore(initialState) {
    return createStore(reducers, initialState);
  }
});
```

## License

Apache-2.0 ©

[react-router]: https://www.npmjs.com/package/react-router
