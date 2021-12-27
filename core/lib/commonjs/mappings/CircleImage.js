"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Circle Image",
  tag: "CircleImage",
  description: "A circle image",
  category: _types.COMPONENT_TYPES.media,
  props: {
    source: (0, _types.createImageProp)(),
    size: {
      group: _types.GROUPS.basic,
      label: "Size",
      description: "Size of your circle image",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      min: 0,
      max: 300,
      precision: 0,
      step: 1,
      defaultValue: 60
    }
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=CircleImage.js.map