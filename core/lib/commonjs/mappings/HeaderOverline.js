"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = [{
  name: "Header Overline",
  tag: "HeaderOverline",
  description: "A small header with an optional touchable right aligned text and icon.",
  category: _types.COMPONENT_TYPES.header,
  preview_image_url: "{CLOUDINARY_URL}/Header_OverlineIconText.png",
  supports_list_render: false,
  props: {
    title: {
      group: _types.GROUPS.data,
      label: "Title",
      description: "Text to display",
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "Title",
      editable: true,
      required: false
    },
    buttonText: {
      group: _types.GROUPS.data,
      label: "Button text",
      description: "Right aligned button text to display",
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "See All",
      editable: true,
      required: false
    },
    icon: {
      group: _types.GROUPS.basic,
      label: "Icon",
      description: "Name of icon to display",
      formType: _types.FORM_TYPES.icon,
      propType: _types.PROP_TYPES.ASSET,
      defaultValue: null,
      editable: true,
      required: false
    },
    onPress: {
      group: _types.GROUPS.basic,
      label: "Action",
      description: "Action to execute when button pressed",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.action,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: null
    }
  },
  layout: {}
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=HeaderOverline.js.map