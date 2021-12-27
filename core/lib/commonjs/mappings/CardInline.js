"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Inline Card",
  tag: "CardInline",
  description: "An elevated card with image and a title and description overlayed, that takes up the full width of its container.",
  category: _types.COMPONENT_TYPES.card,
  layout: {},
  props: {
    image: {
      group: _types.GROUPS.data,
      label: "Image",
      description: "Image",
      formType: _types.FORM_TYPES.image,
      propType: _types.PROP_TYPES.ASSET,
      defaultValue: null,
      editable: true,
      required: false
    },
    title: {
      group: _types.GROUPS.data,
      label: "Title",
      description: "Text to display",
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "Beautiful West Coast Villa",
      editable: true,
      required: false
    },
    subtitle: {
      group: _types.GROUPS.data,
      label: "Subtitle",
      description: "Subtitle text",
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "San Diego",
      editable: true,
      required: false
    },
    aspectRatio: {
      group: _types.GROUPS.basic,
      label: "Aspect ratio",
      description: "Aspect ratio of the image",
      formType: _types.FORM_TYPES.aspectRatio,
      propType: _types.PROP_TYPES.NUMBER,
      defaultValue: 1.5,
      editable: true,
      required: false
    },
    elevation: (0, _types.createElevationType)(2)
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=CardInline.js.map