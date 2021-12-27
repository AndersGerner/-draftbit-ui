"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA_PROPS = {
  label: {
    group: _types.GROUPS.data,
    label: "Label",
    description: "The label to be displayed on the picker",
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: true
  },
  placeholder: {
    group: _types.GROUPS.basic,
    label: "Placeholder",
    description: "The placeholder text of the picker",
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: "Select an option",
    editable: true,
    required: false
  },
  placeholderTextColor: {
    group: _types.GROUPS.basic,
    label: "Placeholder Text Color",
    description: "The color of the placeholder text.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: _types.FORM_TYPES.color,
    propType: _types.PROP_TYPES.STRING
  },
  assistiveText: {
    group: _types.GROUPS.basic,
    label: "Assistive text",
    description: "Helper text to display below the picker",
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: false
  },
  options: {
    group: _types.GROUPS.data,
    label: "Options",
    description: "Array of picker options. An array of objects containing a label and value.",
    editable: true,
    required: false,
    formType: _types.FORM_TYPES.array,
    propType: _types.PROP_TYPES.OBJECT,
    options: [],
    defaultValue: null
  },
  disabled: {
    group: _types.GROUPS.basic,
    label: "Disabled",
    description: "Whether the picker should be disabled. Will prevent selection and show a greyed out state.",
    formType: _types.FORM_TYPES.boolean,
    propType: _types.PROP_TYPES.BOOLEAN,
    defaultValue: false,
    editable: true,
    required: false
  },
  error: {
    group: _types.GROUPS.data,
    label: "Error",
    description: "Whether the picker should display the error state",
    formType: _types.FORM_TYPES.boolean,
    propType: _types.PROP_TYPES.BOOLEAN,
    defaultValue: false,
    editable: true,
    required: false
  },
  leftIconName: {
    group: _types.GROUPS.basic,
    label: "Left icon name",
    description: "The icon to display on the left",
    formType: _types.FORM_TYPES.icon,
    propType: _types.PROP_TYPES.ASSET,
    defaultValue: null,
    editable: true,
    required: false
  },
  leftIconMode: {
    group: _types.GROUPS.basic,
    label: "Left icon mode",
    description: "The mode of the icon to display on the left. 'inset' or 'outset'.",
    formType: _types.FORM_TYPES.flatArray,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: "inset",
    options: ["inset", "outset"],
    editable: true,
    required: true
  },
  rightIconName: {
    group: _types.GROUPS.basic,
    label: "Right icon name",
    description: "The icon to display on the right",
    formType: _types.FORM_TYPES.icon,
    propType: _types.PROP_TYPES.ASSET,
    defaultValue: null,
    editable: true,
    required: false
  },
  fieldName: { ..._types.FIELD_NAME,
    defaultValue: "pickerValue",
    handlerPropName: "onValueChange"
  }
};
const SEED_DATA_TRIGGERS = [_types.Triggers.OnValueChange];
const SEED_DATA = [{
  name: "Picker",
  tag: "Picker",
  description: "A component used to pick a value from a set of options",
  category: _types.COMPONENT_TYPES.input,
  preview_image_url: "{CLOUDINARY_URL}/Picker.png",
  supports_list_render: false,
  triggers: SEED_DATA_TRIGGERS,
  props: { ...SEED_DATA_PROPS,
    type: {
      label: "Appearance",
      description: "Type of Picker",
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "solid",
      options: ["solid", "underline"],
      editable: true,
      required: true,
      group: _types.GROUPS.basic
    }
  },
  layout: {}
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Picker.js.map