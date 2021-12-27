"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Linear Gradient",
  tag: "LinearGradient",
  doc_link: "https://docs.expo.io/versions/latest/sdk/linear-gradient/",
  code_link: "https://github.com/expo/expo/blob/master/packages/expo/src/effects/LinearGradient.d.ts",
  category: _types.COMPONENT_TYPES.layout,
  supports_list_render: false,
  layout: {},
  props: {
    colors: {
      group: _types.GROUPS.basic,
      label: "Colors",
      description: "The colors required for your gradient",
      editable: true,
      required: true,
      defaultValue: null,
      formType: _types.FORM_TYPES.color
    }
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=LinearGradient.js.map