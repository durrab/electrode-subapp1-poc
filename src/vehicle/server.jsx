import React from "react";
import subApp from "./vehicle";
import { StaticRouter } from "react-router-dom";
import Promise from "bluebird";
import Fs from "fs";
import axios from "axios";
import vehicleData from "./vehicles.json"

let filterImages;
let cars;

export default {
  prepare: (request, context) => {
    cars = vehicleData;//response.data.cars;
    if (!filterImages) {
      const natureImages = JSON.parse(Fs.readFileSync("static/nature-images.json"));
      filterImages = natureImages.value.map(x => {
        return {
          contentUrl: x.contentUrl,
          featured: x.featured,
          thumbnail: x.thumbnail,
          thumbnailUrl: x.thumbnailUrl,
          name: x.name
        };
      });
    }

    const initialState = {
      imagesData: filterImages,
      cars: cars
    };
    return Promise.delay(50 + Math.random() * 500)
    .return(initialState)
    .then(initial => {
      console.log("hello from prepare vehicle server.jsx");
      return {transactionDetails: initial};
    });
  },
  StartComponent: props => {
    return (
      <StaticRouter {...props}>
        <subApp.Component />
      </StaticRouter>
    );
  }
};

console.log("hello from vehicle server.jsx");
