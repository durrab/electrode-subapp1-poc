"use strict";

export const pageTitle = "Vehicle App";

export default {
  '/':
  {
    pageTitle: 'Vehicle Home Page',
    subApps: [["./02.main-body"]],
    templateFile: "./templates/main"
  },
  '/vehicle*': {
    pageTitle: 'Vehicle Home Page',
    subApps: [["./vehicle"]],
    templateFile: "./templates/vehicle"
  },
  '/suspense': {
    pageTitle: 'Suspense Demo',
    subApps: [["./06.suspense-demo"]],
    templateFile: "./templates/suspense"
  },
  '/products*': {
    pageTitle: 'Products',
    subApps: [["./02.main-body"]],
    templateFile: "./templates/main"
  }
};


/*
path: [
    "/",
    { "/home": ["post"] },
    "/products*",
    "/deals",
    "/stores",
    "/contact",
    "/account",
    "/cart",
    "/vehicle*"
  ],
  pageTitle: "Online Store Home",
  // Specify the HTML index generation template
  // since using JSX template, don't include the extension
  // because babel transpiled it to .js in prod mode
  // but in dev mode we still need to be able to load the
  // .jsx version directly through @babel/register.
  templateFile: "index"
*/
