import { GROUPS, COMPONENT_TYPES, FORM_TYPES, PROP_TYPES, FIELD_NAME, TEXT_INPUT_PROPS, NUMBER_INPUT_PROPS, Triggers } from "@draftbit/types";
export const SEED_DATA_PROPS = {
  style: {
    group: GROUPS.basic,
    label: "Style",
    description: "Text Style",
    editable: false,
    required: false,
    formType: FORM_TYPES.typeStyle,
    propType: PROP_TYPES.THEME,
    defaultValue: null
  },
  clearButtonMode: {
    group: GROUPS.basic,
    label: "Clear Button Mode",
    description: "Enables a button within the textInput to clear the data entered",
    editable: true,
    required: false,
    options: ["never", "while-editing", "unless-editing", "always"],
    defaultValue: null,
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING
  },
  clearTextOnFocus: {
    group: GROUPS.basic,
    label: "Clear Text on Focus",
    description: "If true, clears the text field automatically when its focused.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  },
  enablesReturnKeyAutomatically: {
    group: GROUPS.basic,
    label: "Enables Return Key Automatically",
    description: "If true, the keyboard disables the return key when there is no text and automatically enables it when there is (Default: false)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  },
  underlineColorAndroid: {
    group: GROUPS.basic,
    label: "Underline color",
    description: "(Android Only) The color of the underline(the line underneath the text when finished typing.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.THEME
  },
  fieldName: { ...FIELD_NAME,
    defaultValue: "textInputValue",
    handlerPropName: "onChangeText"
  }
};
export const SEED_DATA = [{
  name: "Text Input",
  tag: "TextInput",
  description: "An input field that allows users to type in data.",
  category: COMPONENT_TYPES.input,
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
  triggers: [Triggers.OnChangeText],
  props: { ...TEXT_INPUT_PROPS,
    ...SEED_DATA_PROPS,
    multiline: {
      group: GROUPS.basic,
      label: "Multiple Lines",
      description: "Allows multiple lines of input, useful for situations where the user may be typing in a lot of data.",
      editable: true,
      required: false,
      defaultValue: null,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN
    },
    numberOfLines: {
      group: GROUPS.basic,
      label: "Number of Lines",
      description: "Sets the number of lines for the input (Multiple Lines needs to be true)",
      editable: true,
      required: false,
      defaultValue: null,
      min: 0,
      step: 1,
      precision: 0,
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER
    },
    scrollEnabled: {
      group: GROUPS.basic,
      label: "Scroll Enabled",
      description: "If false, scrolling of the input will be disabled. Only works when Multiple Lines is true",
      editable: true,
      required: false,
      defaultValue: null,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN
    },
    spellcheck: {
      group: GROUPS.basic,
      label: "Disable Spell Check",
      description: "If false, disables spell-check style (red underlines). Default comes from Auto Correct",
      editable: true,
      required: false,
      defaultValue: null,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN
    },
    textContentType: {
      group: GROUPS.advanced,
      label: "Text Content Type",
      description: "Give the keyboard and system about what it should do with the input. For example, if its an address, autofill from address book",
      editable: true,
      required: false,
      defaultValue: null,
      options: ["none", "URL", "addressCity", "addressCityAndState", "addressState", "countryName", "creditCardNumber", "emailAddress", "familyName", "fullStreetAddress", "givenName", "jobTitle", "location", "middleName", "name", "namePrefix", "nameSuffix", "nickname", "organizationName", "postalCode", "streetAddressLine1", "streetAddressLine2", "sublocality", "telephoneNumber", "username", "password"],
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING
    },
    textBreakStrategy: {
      group: GROUPS.advanced,
      label: "Text Break Strategy",
      description: "(Android Only) Set the text break strategy. (Default: simple)",
      editable: true,
      required: false,
      defaultValue: null,
      options: ["simple", "highQuality", "balanced"],
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING
    }
  }
}, {
  name: "Number Input",
  tag: "NumberInput",
  description: "An input field that allows users to type in data.",
  category: COMPONENT_TYPES.input,
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
  triggers: [Triggers.OnChangeText],
  props: { ...NUMBER_INPUT_PROPS,
    ...SEED_DATA_PROPS
  }
}];
//# sourceMappingURL=TextInput.js.map