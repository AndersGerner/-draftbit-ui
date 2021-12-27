"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA_PROPS = {
  onPress: (0, _types.createActionProp)(),
  icon: {
    group: _types.GROUPS.basic,
    label: "Icon Name",
    description: "Name of the icon",
    editable: true,
    required: true,
    formType: _types.FORM_TYPES.icon,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: null
  },
  children: {
    group: _types.GROUPS.data,
    label: "Label",
    description: "Button label",
    required: true,
    editable: true,
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: "Get Started"
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
  labelColor: {
    group: _types.GROUPS.basic,
    label: "Label Color Override",
    description: "Override the label color of the button",
    editable: true,
    required: false,
    formType: _types.FORM_TYPES.color,
    propType: _types.PROP_TYPES.THEME,
    defaultValue: null
  },
  disabled: {
    group: _types.GROUPS.basic,
    label: "Disabled",
    description: "Whether the button should be disabled",
    editable: true,
    required: false,
    formType: _types.FORM_TYPES.boolean,
    propType: _types.PROP_TYPES.BOOLEAN,
    defaultValue: null
  },
  loading: {
    group: _types.GROUPS.data,
    label: "Loading",
    description: "Whether to show a loading indicator",
    editable: true,
    required: false,
    formType: _types.FORM_TYPES.boolean,
    propType: _types.PROP_TYPES.BOOLEAN,
    defaultValue: null
  }
};
const SEED_DATA = [{
  name: "Button Outline",
  tag: "Button",
  category: _types.COMPONENT_TYPES.deprecated,
  triggers: [_types.Triggers.OnPress],
  props: { ...SEED_DATA_PROPS,
    type: {
      group: _types.GROUPS.uncategorized,
      label: "Type",
      description: "Button type",
      editable: false,
      required: true,
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "outline"
    }
  },
  layout: {}
}, {
  name: "Button Solid",
  tag: "Button",
  category: _types.COMPONENT_TYPES.deprecated,
  triggers: [_types.Triggers.OnPress],
  props: { ...SEED_DATA_PROPS,
    type: {
      group: _types.GROUPS.uncategorized,
      label: "Type",
      description: "Button type",
      editable: false,
      required: true,
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "solid"
    }
  },
  layout: {}
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=DeprecatedButton.js.map