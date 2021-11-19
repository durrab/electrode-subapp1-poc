import React from "react";
import subApp from "./vehicle";
import { StaticRouter } from "react-router-dom";
import Promise from "bluebird";
import Fs from "fs";
import axios from "axios";

let filterImages;
let cars;

export default {
  initialize: async () => {
     const response = await axios.get("https://cvdt-dev2.cerencedemo.com/api/v1/car?fields=vin,imei,location");
     cars = response.data.cars;
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
  },
  prepare: (request, context) => {
    const initialState = {
      imagesData: filterImages,
      cars: cars
    };
    const store = subApp.reduxCreateStore(initialState);
    return Promise.delay(50 + Math.random() * 500).return({
      initialState,
      store
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
