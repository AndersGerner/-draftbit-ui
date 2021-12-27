"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "SafeAreaView",
  tag: "SafeAreaView",
  description: "A basic View that handles safe area",
  category: _types.COMPONENT_TYPES.deprecated,
  props: {
    edges: {
      group: _types.GROUPS.basic,
      name: "edges",
      label: "edges",
      description: "Provides edges to be used by safe area view",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      options: ["right", "bottom", "left", "top"],
      defaultValue: ["right", "bottom", "left", "top"]
    },
    mode: {
      group: _types.GROUPS.basic,
      name: "mode",
      label: "mode",
      description: "Mode used by safe area view",
      editable: true,
      required: false,
      options: ["padding", "margin"],
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "padding"
    }
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=SafeAreaView.js.map