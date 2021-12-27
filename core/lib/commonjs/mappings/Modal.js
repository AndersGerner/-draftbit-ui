"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Modal",
  tag: "Modal",
  description: "A basic Modal Component",
  category: _types.COMPONENT_TYPES.container,
  props: {
    animationType: {
      group: _types.GROUPS.basic,
      label: "Animation Type",
      description: "Animation Type",
      options: ["slide", "fade", "none"],
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "none"
    },
    transparent: (0, _types.createBoolProp)({
      group: _types.GROUPS.basic,
      label: "Transparent",
      description: "Determines whether the modal will fill the entire view. Setting this to true will render the modal over a transparent background"
    }),
    visible: (0, _types.createBoolProp)({
      group: _types.GROUPS.data,
      label: "Visible",
      description: "Determines whether the modal is visible"
    }),
    presentationStyle: {
      group: _types.GROUPS.basic,
      label: "Presentation Style",
      description: "Presentation Style",
      options: ["fullScreen", "pageSheet", "formSheet", "overFullScreen"],
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: null
    }
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Modal.js.map