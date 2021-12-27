"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Icon",
  tag: "Icon",
  description: "An icon",
  category: _types.COMPONENT_TYPES.basic,
  layout: {},
  props: {
    name: (0, _types.createIconProp)(),
    color: (0, _types.createColorProp)(),
    size: (0, _types.createNumberProp)({
      group: _types.GROUPS.basic,
      label: "Size",
      description: "Width and height of your icon",
      defaultValue: 24,
      min: 16,
      max: 128,
      step: 1,
      precision: 0
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Icon.js.map