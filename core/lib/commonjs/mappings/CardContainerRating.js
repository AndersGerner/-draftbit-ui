"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA_PROPS = {
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
  leftDescription: {
    group: _types.GROUPS.data,
    label: "Left description",
    description: "Text to display on the left",
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: "San Diego",
    editable: true,
    required: false
  },
  rightDescription: {
    group: _types.GROUPS.data,
    label: "Right description",
    description: "Text to display on the right",
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: "$100",
    editable: true,
    required: false
  },
  icon: {
    group: _types.GROUPS.basic,
    label: "Icon",
    description: "Icon to display on the top right",
    formType: _types.FORM_TYPES.icon,
    propType: _types.PROP_TYPES.ASSET,
    defaultValue: null,
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
  rating: {
    group: _types.GROUPS.data,
    label: "Rating",
    description: "Number of stars to show. A number 0-5.",
    formType: _types.FORM_TYPES.number,
    propType: _types.PROP_TYPES.NUMBER,
    defaultValue: 5,
    min: 0,
    max: 5,
    step: 1,
    precision: 0,
    editable: true,
    required: false
  },
  elevation: (0, _types.createElevationType)(2)
};
const SEED_DATA = [{
  name: "Medium Card (Rating)",
  tag: "CardContainerRating",
  description: "An elevated card with a title and description, that takes up half of its container.",
  category: _types.COMPONENT_TYPES.card,
  preview_image_url: "{CLOUDINARY_URL}/Card_ContainerRating_2col.png",
  supports_list_render: true,
  props: { ...SEED_DATA_PROPS,
    numColumns: {
      label: "Number of Columns",
      description: "Numbre of columns",
      group: _types.GROUPS.uncategorized,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      defaultValue: 2,
      editable: false,
      required: false
    }
  },
  layout: {}
}, {
  name: "Large Card (Rating)",
  tag: "CardContainerRating",
  description: "An elevated card with a title and description, that takes up its full container.",
  category: _types.COMPONENT_TYPES.card,
  preview_image_url: "{CLOUDINARY_URL}/Card_ContainerRating_3col.png",
  supports_list_render: true,
  props: { ...SEED_DATA_PROPS,
    numColumns: {
      label: "Number of Columns",
      description: "Numbre of columns",
      group: _types.GROUPS.uncategorized,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      defaultValue: 3,
      editable: false,
      required: false
    }
  },
  layout: {}
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=CardContainerRating.js.map