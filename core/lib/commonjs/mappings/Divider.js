"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = [{
  name: "Divider",
  tag: "Divider",
  category: _types.COMPONENT_TYPES.layout,
  description: "A horizontal line used to divide content",
  preview_image_url: "{CLOUDINARY_URL}/Divider.png",
  supports_list_render: false,
  props: {
    color: {
      group: _types.GROUPS.basic,
      label: "Color",
      description: "The color of the divider",
      editable: true,
      required: false,
      defaultValue: "divider",
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME
    }
  },
  layout: {
    height: 1
  }
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Divider.js.map