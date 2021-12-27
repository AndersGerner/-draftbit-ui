"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = [{
  name: "Short Card (Left)",
  tag: "CardContainerShortImage",
  description: "An elevated card with a left aligned image and a title and subtitle",
  category: _types.COMPONENT_TYPES.card,
  preview_image_url: "{CLOUDINARY_URL}/Card_ContainerShortLeftImage.png",
  supports_list_render: true,
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
      description: "Title to display",
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "Beautiful West Coast Villa",
      editable: true,
      required: false
    },
    subtitle: {
      group: _types.GROUPS.data,
      label: "Subtitle",
      description: "Subtitle to display",
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
      propType: _types.PROP_TYPES.STRING,
      defaultValue: null,
      editable: true,
      required: false
    },
    elevation: (0, _types.createElevationType)(2),
    mode: {
      group: _types.GROUPS.uncategorized,
      label: "Image Side",
      description: "The side on which the image is on (left or right)",
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "left",
      options: ["left", "right"],
      editable: false,
      required: false
    }
  },
  layout: {}
}, {
  name: "Short Card (Right)",
  tag: "CardContainerShortImage",
  description: "An elevated card with a right aligned image and a title and subtitle",
  category: _types.COMPONENT_TYPES.card,
  preview_image_url: "{CLOUDINARY_URL}/Card_ContainerShortRightImage.png",
  supports_list_render: true,
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
      description: "Title to display",
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "Beautiful West Coast Villa",
      editable: true,
      required: false
    },
    subtitle: {
      group: _types.GROUPS.data,
      label: "Subtitle",
      description: "Subtitle to display",
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "San Diego",
      editable: true,
      required: false
    },
    elevation: (0, _types.createElevationType)(2),
    mode: {
      label: "Mode",
      description: "Mode",
      group: _types.GROUPS.uncategorized,
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "right",
      editable: false,
      required: false
    }
  },
  layout: {}
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=CardContainerShortImage.js.map