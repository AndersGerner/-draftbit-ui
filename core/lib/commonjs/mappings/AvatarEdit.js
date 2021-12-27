"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Avatar Edit",
  tag: "AvatarEdit",
  description: "An avatar with an edit icon in the top right",
  category: _types.COMPONENT_TYPES.deprecated,
  layout: {
    width: 64,
    height: 64
  },
  props: {
    size: {
      group: _types.GROUPS.basic,
      label: "Size",
      description: "Size of avatar / width, height",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      min: 0,
      max: 300,
      precision: 0,
      step: 1,
      defaultValue: 80
    },
    image: {
      group: _types.GROUPS.data,
      label: "Image",
      description: "Name of the image",
      editable: true,
      required: true,
      formType: _types.FORM_TYPES.image,
      propType: _types.PROP_TYPES.ASSET,
      defaultValue: "brightness-5"
    }
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=AvatarEdit.js.map