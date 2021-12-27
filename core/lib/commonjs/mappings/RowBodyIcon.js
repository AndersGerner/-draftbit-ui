"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = [{
  name: "Row Single Line Body Icon",
  tag: "RowBodyIcon",
  description: "A row with left aligned body text and a right aligned icon",
  category: _types.COMPONENT_TYPES.row,
  preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_BodyIcon.png",
  supports_list_render: true,
  props: {
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
    icon: {
      group: _types.GROUPS.basic,
      label: "Icon",
      description: "Icon to display",
      formType: _types.FORM_TYPES.icon,
      propType: _types.PROP_TYPES.ASSET,
      defaultValue: null,
      editable: true,
      required: false
    }
  },
  layout: {}
}, {
  name: "Row Double Line Body Icon",
  tag: "RowBodyIcon",
  description: "A row with left aligned body text and subtitle text and a right aligned icon",
  category: _types.COMPONENT_TYPES.row,
  preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_BodyIcon.png",
  supports_list_render: true,
  props: {
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
      description: "Subtitle text to display",
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "San Diego",
      editable: true,
      required: false
    },
    icon: {
      group: _types.GROUPS.basic,
      label: "Icon",
      description: "Icon to display",
      formType: _types.FORM_TYPES.icon,
      propType: _types.PROP_TYPES.ASSET,
      defaultValue: null,
      editable: true,
      required: false
    }
  },
  layout: {}
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=RowBodyIcon.js.map