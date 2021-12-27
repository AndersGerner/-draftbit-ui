"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA_PROPS = {
  icon: {
    group: _types.GROUPS.basic,
    label: "Icon Name",
    description: "Name of the icon",
    editable: true,
    required: true,
    formType: _types.FORM_TYPES.icon,
    propType: _types.PROP_TYPES.ASSET,
    defaultValue: null
  },
  label: {
    group: _types.GROUPS.basic,
    label: "Label",
    description: "Button label",
    required: true,
    editable: true,
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: "GET STARTED"
  },
  color: {
    group: _types.GROUPS.basic,
    label: "Color Override",
    description: "Override the background color of the button",
    editable: true,
    required: false,
    formType: _types.FORM_TYPES.color,
    propType: _types.PROP_TYPES.THEME,
    defaultValue: null
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
};
const SEED_DATA = [{
  name: "FAB Mini",
  tag: "FAB",
  category: _types.COMPONENT_TYPES.deprecated,
  description: "A round, mini FAB",
  preview_image_url: "{CLOUDINARY_URL}/Button_FABMini.png",
  props: { ...SEED_DATA_PROPS,
    type: {
      group: _types.GROUPS.uncategorized,
      label: "Type",
      description: "Button type",
      editable: false,
      required: true,
      formType: _types.FORM_TYPES.icon,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "standard"
    },
    label: {
      group: _types.GROUPS.data,
      label: "Label",
      description: "Button label",
      required: false,
      editable: false,
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: null
    }
  },
  layout: {}
}, {
  name: "FAB Outline",
  tag: "FAB",
  category: _types.COMPONENT_TYPES.deprecated,
  preview_image_url: "{CLOUDINARY_URL}/Button_FABMini.png",
  props: { ...SEED_DATA_PROPS,
    type: {
      group: _types.GROUPS.uncategorized,
      label: "Type",
      description: "Button type",
      editable: false,
      required: true,
      propType: _types.PROP_TYPES.STRING,
      formType: _types.FORM_TYPES.string,
      defaultValue: "outline"
    },
    label: {
      group: _types.GROUPS.uncategorized,
      label: "Label",
      description: "Button label",
      required: false,
      editable: false,
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: null
    }
  },
  layout: {}
}, {
  name: "FAB Extended",
  tag: "FAB",
  category: _types.COMPONENT_TYPES.deprecated,
  preview_image_url: "{CLOUDINARY_URL}/Button_FABExtended.png",
  props: { ...SEED_DATA_PROPS,
    type: {
      group: _types.GROUPS.uncategorized,
      label: "Type",
      description: "Button type",
      editable: false,
      required: true,
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "extended"
    }
  },
  layout: {}
}, {
  name: "FAB Fixed",
  tag: "FAB",
  category: _types.COMPONENT_TYPES.deprecated,
  preview_image_url: "{CLOUDINARY_URL}/Button_FABFixed.png",
  props: { ...SEED_DATA_PROPS,
    type: {
      group: _types.GROUPS.uncategorized,
      label: "Type",
      description: "Button type",
      editable: false,
      required: true,
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "fixed"
    }
  },
  layout: {}
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=DeprecatedFAB.js.map