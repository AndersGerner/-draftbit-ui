"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Blur View",
  tag: "BlurView",
  description: "Expo Blur View",
  doc_link: "https://docs.expo.io/versions/latest/sdk/blur-view/",
  code_link: "https://github.com/expo/expo/blob/master/packages/expo/src/effects/BlurView.d.ts",
  category: _types.COMPONENT_TYPES.layout,
  layout: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0
  },
  props: {
    tint: {
      label: "Tint",
      description: "The tint of the blur view",
      editable: true,
      required: true,
      defaultValue: "default",
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      options: ["default", "light", "dark"],
      group: _types.GROUPS.basic
    },
    intensity: {
      label: "Intensity",
      description: "A number from 1 to 100 that controls the intensity of the blur effect",
      editable: true,
      required: true,
      defaultValue: 50,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      min: 0,
      max: 100,
      step: 1,
      precision: 0,
      group: _types.GROUPS.basic
    }
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=BlurView.js.map