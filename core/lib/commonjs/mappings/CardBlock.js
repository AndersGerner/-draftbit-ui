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
  titleCentered: {
    group: _types.GROUPS.basic,
    label: "Title centered",
    description: "Whether to center the title",
    formType: _types.FORM_TYPES.boolean,
    propType: _types.PROP_TYPES.BOOLEAN,
    defaultValue: false,
    editable: true,
    required: false
  },
  elevation: (0, _types.createElevationType)(2)
};
const SEED_DATA = [{
  name: "Small Card",
  tag: "CardBlock",
  description: "An elevated card with a title and description, that takes up one third of its container.",
  category: _types.COMPONENT_TYPES.card,
  props: { ...SEED_DATA_PROPS,
    numColumns: (0, _types.createNumColumnsType)({
      defaultValue: 1
    })
  }
}, {
  name: "Medium Block Card",
  tag: "CardBlock",
  description: "An elevated card with a title and description, that takes up one half of its container.",
  category: _types.COMPONENT_TYPES.card,
  props: { ...SEED_DATA_PROPS,
    icon: {
      group: _types.GROUPS.basic,
      label: "Icon",
      description: "Icon to display on the top right",
      formType: _types.FORM_TYPES.icon,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: null,
      editable: true,
      required: true
    },
    numColumns: (0, _types.createNumColumnsType)({
      defaultValue: 2
    })
  }
}, {
  name: "Large Block Card",
  tag: "CardBlock",
  description: "An elevated card with a title and description, that takes up the full width its container.",
  category: _types.COMPONENT_TYPES.card,
  props: { ...SEED_DATA_PROPS,
    icon: {
      group: _types.GROUPS.basic,
      label: "Icon",
      description: "Icon to display on the top right",
      formType: _types.FORM_TYPES.icon,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: null,
      editable: true,
      required: true
    },
    numColumns: (0, _types.createNumColumnsType)({
      defaultValue: 3
    })
  }
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=CardBlock.js.map