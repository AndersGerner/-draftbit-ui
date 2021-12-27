"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA_PROPS = { ..._types.TEXT_INPUT_PROPS,
  label: {
    group: _types.GROUPS.data,
    label: "Label",
    description: "The label to be displayed on the text field",
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: true
  },
  assistiveText: {
    group: _types.GROUPS.basic,
    label: "Assistive text",
    description: "Helper text to display below the input",
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: false
  },
  error: {
    group: _types.GROUPS.data,
    label: "Error",
    description: "Whether the input should display the error state",
    formType: _types.FORM_TYPES.boolean,
    propType: _types.PROP_TYPES.BOOLEAN,
    defaultValue: null,
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
    defaultValue: null
    /* inset */
    ,
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
    handlerPropName: "onChangeText",
    defaultValue: "textFieldValue"
  }
};
const SEED_DATA_TRIGGERS = [_types.Triggers.OnChangeText];
const SEED_DATA = [{
  name: "Styled Text Field",
  tag: "TextField",
  description: "A text input with a solid border or underline",
  category: _types.COMPONENT_TYPES.input,
  preview_image_url: "{CLOUDINARY_URL}/Textfield.png",
  supports_list_render: false,
  triggers: SEED_DATA_TRIGGERS,
  props: { ...SEED_DATA_PROPS,
    type: {
      label: "Appearance",
      description: "Type of Datepicker",
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "solid",
      options: ["solid", "underline"],
      editable: true,
      required: true,
      group: _types.GROUPS.basic
    },
    underlineColor: (0, _types.createColorProp)({
      label: "Underline Color",
      defaultValue: "light"
    }),
    secureTextEntry: {
      group: _types.GROUPS.basic,
      label: "Password field",
      description: "If true, this turns the field into a password field, hiding the text",
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      defaultValue: null,
      editable: true,
      required: false
    }
  },
  layout: {}
}, {
  name: "Styled Text Area",
  tag: "TextField",
  description: "A text area with a solid border or underline",
  category: _types.COMPONENT_TYPES.input,
  preview_image_url: "{CLOUDINARY_URL}/TextArea.png",
  supports_list_render: false,
  triggers: SEED_DATA_TRIGGERS,
  props: { ...SEED_DATA_PROPS,
    placeholder: { ..._types.TEXT_INPUT_PROPS.placeholder,
      defaultValue: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    type: {
      label: "Appearance",
      description: "Type of Datepicker",
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "solid",
      options: ["solid", "underline"],
      editable: true,
      required: true,
      group: _types.GROUPS.basic
    },
    multiline: {
      label: "Multiline",
      description: "Multiline",
      group: _types.GROUPS.uncategorized,
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      defaultValue: true,
      editable: false,
      required: false
    },
    numberOfLines: (0, _types.createNumberProp)({
      label: "Number of Lines",
      description: "Number of Lines for Multiline Field",
      defaultValue: 4,
      group: _types.GROUPS.basic
    }),
    fieldName: (0, _types.createFieldNameProp)({
      defaultValue: "textAreaValue"
    })
  },
  layout: {}
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=TextField.js.map