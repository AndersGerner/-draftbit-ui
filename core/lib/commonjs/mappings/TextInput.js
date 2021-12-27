"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA_PROPS = exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA_PROPS = {
  style: {
    group: _types.GROUPS.basic,
    label: "Style",
    description: "Text Style",
    editable: false,
    required: false,
    formType: _types.FORM_TYPES.typeStyle,
    propType: _types.PROP_TYPES.THEME,
    defaultValue: null
  },
  clearButtonMode: {
    group: _types.GROUPS.basic,
    label: "Clear Button Mode",
    description: "Enables a button within the textInput to clear the data entered",
    editable: true,
    required: false,
    options: ["never", "while-editing", "unless-editing", "always"],
    defaultValue: null,
    formType: _types.FORM_TYPES.flatArray,
    propType: _types.PROP_TYPES.STRING
  },
  clearTextOnFocus: {
    group: _types.GROUPS.basic,
    label: "Clear Text on Focus",
    description: "If true, clears the text field automatically when its focused.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: _types.FORM_TYPES.boolean,
    propType: _types.PROP_TYPES.BOOLEAN
  },
  enablesReturnKeyAutomatically: {
    group: _types.GROUPS.basic,
    label: "Enables Return Key Automatically",
    description: "If true, the keyboard disables the return key when there is no text and automatically enables it when there is (Default: false)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: _types.FORM_TYPES.boolean,
    propType: _types.PROP_TYPES.BOOLEAN
  },
  underlineColorAndroid: {
    group: _types.GROUPS.basic,
    label: "Underline color",
    description: "(Android Only) The color of the underline(the line underneath the text when finished typing.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: _types.FORM_TYPES.color,
    propType: _types.PROP_TYPES.THEME
  },
  fieldName: { ..._types.FIELD_NAME,
    defaultValue: "textInputValue",
    handlerPropName: "onChangeText"
  }
};
exports.SEED_DATA_PROPS = SEED_DATA_PROPS;
const SEED_DATA = [{
  name: "Text Input",
  tag: "TextInput",
  description: "An input field that allows users to type in data.",
  category: _types.COMPONENT_TYPES.input,
  preview_image_url: "https://res.cloudinary.com/altos/image/upload/draftbit/Jigsaw/TextInput.png",
  supports_list_render: false,
  layout: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "divider",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8
  },
  triggers: [_types.Triggers.OnChangeText],
  props: { ..._types.TEXT_INPUT_PROPS,
    ...SEED_DATA_PROPS,
    multiline: {
      group: _types.GROUPS.basic,
      label: "Multiple Lines",
      description: "Allows multiple lines of input, useful for situations where the user may be typing in a lot of data.",
      editable: true,
      required: false,
      defaultValue: null,
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN
    },
    numberOfLines: {
      group: _types.GROUPS.basic,
      label: "Number of Lines",
      description: "Sets the number of lines for the input (Multiple Lines needs to be true)",
      editable: true,
      required: false,
      defaultValue: null,
      min: 0,
      step: 1,
      precision: 0,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER
    },
    scrollEnabled: {
      group: _types.GROUPS.basic,
      label: "Scroll Enabled",
      description: "If false, scrolling of the input will be disabled. Only works when Multiple Lines is true",
      editable: true,
      required: false,
      defaultValue: null,
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN
    },
    spellcheck: {
      group: _types.GROUPS.basic,
      label: "Disable Spell Check",
      description: "If false, disables spell-check style (red underlines). Default comes from Auto Correct",
      editable: true,
      required: false,
      defaultValue: null,
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN
    },
    textContentType: {
      group: _types.GROUPS.advanced,
      label: "Text Content Type",
      description: "Give the keyboard and system about what it should do with the input. For example, if its an address, autofill from address book",
      editable: true,
      required: false,
      defaultValue: null,
      options: ["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password"],
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING
    },
    textBreakStrategy: {
      group: _types.GROUPS.advanced,
      label: "Text Break Strategy",
      description: "(Android Only) Set the text break strategy. (Default: simple)",
      editable: true,
      required: false,
      defaultValue: null,
      options: ["simple", "highQuality", "balanced"],
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING
    }
  }
}, {
  name: "Number Input",
  tag: "NumberInput",
  description: "An input field that allows users to type in data.",
  category: _types.COMPONENT_TYPES.input,
  preview_image_url: "https://res.cloudinary.com/altos/image/upload/draftbit/Jigsaw/TextInput.png",
  supports_list_render: false,
  layout: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "divider",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8
  },
  triggers: [_types.Triggers.OnChangeText],
  props: { ..._types.NUMBER_INPUT_PROPS,
    ...SEED_DATA_PROPS
  }
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=TextInput.js.map