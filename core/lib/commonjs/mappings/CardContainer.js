"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA_PROPS = {
  image: {
    label: "Image",
    description: "Image",
    formType: _types.FORM_TYPES.image,
    propType: _types.PROP_TYPES.ASSET,
    defaultValue: null,
    editable: true,
    required: true,
    group: _types.GROUPS.data
  },
  title: {
    label: "Title",
    description: "Text to display",
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: "Beautiful West Coast Villa",
    editable: true,
    required: false,
    group: _types.GROUPS.data
  },
  leftDescription: {
    label: "Left description",
    description: "Text to display on the left",
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: "San Diego",
    editable: true,
    required: false,
    group: _types.GROUPS.data
  },
  rightDescription: {
    label: "Right description",
    description: "Text to display on the right",
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: "$100",
    editable: true,
    required: false,
    group: _types.GROUPS.data
  },
  icon: {
    label: "Icon",
    description: "Icon to display on the top right",
    formType: _types.FORM_TYPES.icon,
    propType: _types.PROP_TYPES.STRING
    /* OR ASSET TODO TEST ME */
    ,
    defaultValue: null,
    editable: true,
    required: false,
    group: _types.GROUPS.basic
  },
  aspectRatio: {
    label: "Aspect ratio",
    description: "Aspect ratio of the image",
    formType: _types.FORM_TYPES.aspectRatio,
    propType: _types.PROP_TYPES.NUMBER,
    defaultValue: 1.5,
    editable: true,
    required: false,
    group: _types.GROUPS.basic
  },
  textCentered: {
    label: "Centered Text",
    description: "Whether to center the text",
    formType: _types.FORM_TYPES.boolean,
    propType: _types.PROP_TYPES.BOOLEAN,
    defaultValue: false,
    editable: true,
    required: false,
    group: _types.GROUPS.basic
  },
  elevation: (0, _types.createElevationType)(2)
};
const SEED_DATA = [{
  name: "Medium Card",
  tag: "CardContainer",
  description: "An elevated card with a title and description, that takes up half of its container.",
  category: _types.COMPONENT_TYPES.card,
  layout: null,
  props: { ...SEED_DATA_PROPS,
    numColumns: (0, _types.createNumColumnsType)({
      defaultValue: 2
    })
  }
}, {
  name: "Large Card",
  tag: "CardContainer",
  description: "An elevated card with a title and description, that takes up its full container.",
  category: _types.COMPONENT_TYPES.card,
  layout: null,
  props: { ...SEED_DATA_PROPS,
    numColumns: (0, _types.createNumColumnsType)({
      defaultValue: 3
    })
  }
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=CardContainer.js.map