"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Map Marker",
  tag: "MapMarker",
  description: "A marker to show inside map view",
  category: _types.COMPONENT_TYPES.deprecated,
  layout: {},
  props: {
    latitude: (0, _types.createNumberProp)({
      label: "Latitude",
      description: "The latitude in which the marker is located",
      required: true,
      precision: 6,
      min: -90,
      max: 90
    }),
    longitude: (0, _types.createNumberProp)({
      label: "Longitude",
      description: "The longitude in which the marker is located",
      required: true,
      precision: 6,
      min: -180,
      max: 180
    }),
    title: (0, _types.createTextProp)({
      label: "Title",
      description: "Title to show along with the marker",
      defaultValue: null
    }),
    description: (0, _types.createTextProp)({
      label: "Description",
      description: "Optional description for the marker",
      defaultValue: null
    }),
    flat: (0, _types.createBoolProp)({
      label: "Flat",
      description: "Sets whether this marker should be flat against the map (if true) or a billboard facing the camera (if false)",
      group: _types.GROUPS.basic,
      defaultValue: false
    }),
    pinColor: (0, _types.createColorProp)({
      label: "Pin Color",
      description: "Sets the color of the marker"
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=MapMarker.js.map