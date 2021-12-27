"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTextStyle = exports.createTextProp = exports.createTextEnumProp = exports.createStaticNumberProp = exports.createStaticBoolProp = exports.createSourceProp = exports.createRowDirectionProp = exports.createResizeModeProp = exports.createNumberProp = exports.createNumColumnsType = exports.createImageProp = exports.createIconSizeProp = exports.createIconProp = exports.createHitslopProp = exports.createFieldNameProp = exports.createElevationType = exports.createDirectionProp = exports.createColorProp = exports.createBorderRadiusProp = exports.createBoolProp = exports.createAspectRatioProp = exports.createActionProp = exports.Triggers = exports.TEXT_INPUT_PROPS = exports.PROP_TYPES = exports.PLATFORMS = exports.NUMBER_INPUT_PROPS = exports.GROUPS = exports.FORM_TYPES = exports.FIELD_NAME = exports.COMPONENT_TYPES = void 0;
// @ts-nocheck
// Make sure enum exists @draftbit
const Triggers = {
  OnPress: "ON_PRESS",
  OnValueChange: "ON_VALUE_CHANGE",
  OnDateChange: "ON_DATE_CHANGE",
  OnChange: "ON_CHANGE",
  OnChangeText: "ON_CHANGE_TEXT",
  OnRefresh: "ON_REFRESH",
  OnBlur: "ON_BLUR",
  OnSwipe: "ON_SWIPE",
  OnSelect: "ON_SELECT"
};
exports.Triggers = Triggers;
const PROP_TYPES = {
  STRING: "STRING",
  ARRAY: "ARRAY",
  NUMBER: "NUMBER",
  BOOLEAN: "BOOLEAN",
  OBJECT: "OBJECT",
  ASSET: "ASSET",
  THEME: "THEME"
};
exports.PROP_TYPES = PROP_TYPES;
const PLATFORMS = {
  ios: "ios",
  android: "android",
  web: "web"
};
exports.PLATFORMS = PLATFORMS;
const GROUPS = {
  accessibility: "accessibility",
  basic: "basic",
  layout: "layout",
  advanced: "advanced",
  data: "data",
  uncategorized: "uncategorized",
  action: "action",
  style: "style"
};
exports.GROUPS = GROUPS;
const FORM_TYPES = {
  json: "json",
  multiselect: "multiselect",
  position: "position",
  sourceUrl: "sourceUrl",
  url: "url",
  string: "string",
  boolean: "boolean",
  number: "number",
  select: "select",
  color: "color",
  typeStyle: "typeStyle",
  component: "component",
  geolocation: "geolocation",
  image: "image",
  imageArray: "imageArray",
  icon: "icon",
  style: "style",
  function: "function",
  flatArray: "flatArray"
  /* array of strings or numbers */
  ,
  array: "array"
  /* array of objects */
  ,
  aspectRatio: "aspectRatio",
  date: "date",
  borderRadiusMode: "borderRadiusMode",
  fieldName: "fieldName",
  action: "action"
};
exports.FORM_TYPES = FORM_TYPES;
const COMPONENT_TYPES = {
  basic: "basic",
  media: "media",
  layout: "layout",
  input: "input",
  data: "data",
  card: "card",
  button: "button",
  row: "row",
  header: "header",
  container: "container",
  deprecated: "deprecated"
};
exports.COMPONENT_TYPES = COMPONENT_TYPES;
const ELEVATION_TYPE = {
  label: "Elevation",
  description: "Elevation of the component. A number 0-3.",
  formType: FORM_TYPES.flatArray,
  propType: PROP_TYPES.NUMBER,
  options: [0, 1, 2, 3],
  defaultValue: 0,
  editable: true,
  required: false,
  group: GROUPS.basic
};

const createElevationType = defaultValue => ({ ...ELEVATION_TYPE,
  defaultValue
});

exports.createElevationType = createElevationType;

const createTextProp = overrides => ({
  label: "Text",
  description: "Text you can customize however you'd like",
  formType: FORM_TYPES.string,
  propType: PROP_TYPES.STRING,
  defaultValue: "Beautiful West Coast Villa",
  editable: true,
  required: false,
  group: GROUPS.data,
  ...overrides
});

exports.createTextProp = createTextProp;

const createImageProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    label: "Image",
    description: "Image",
    group: GROUPS.data,
    formType: FORM_TYPES.sourceUrl,
    propType: PROP_TYPES.OBJECT,
    defaultValue: "https://static.draftbit.com/images/placeholder-image.png",
    editable: true,
    required: true,
    ...overrides
  };
};

exports.createImageProp = createImageProp;

const createSourceProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    label: "Website URL",
    description: "A normal URL",
    defaultValue: "https://draftbit.com",
    group: GROUPS.data,
    formType: FORM_TYPES.sourceUrl,
    propType: PROP_TYPES.OBJECT,
    editable: true,
    required: true,
    ...overrides
  };
};

exports.createSourceProp = createSourceProp;

const createResizeModeProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    group: GROUPS.basic,
    label: "Resize Mode",
    description: "Determines how to resize the image when the frame doesn't match the raw image dimensions",
    editable: true,
    required: false,
    defaultValue: "cover",
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
    options: ["cover", "contain", "stretch", "repeat", "center"],
    ...overrides
  };
};

exports.createResizeModeProp = createResizeModeProp;

const createHitslopProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    label: "Hit Slop",
    description: "Makes the Touchable easier to press by expanding the touchable area a specified number of points, without having to change the layout of the Touchable (e.g. by adding padding)",
    group: GROUPS.advanced,
    editable: true,
    required: false,
    formType: FORM_TYPES.position,
    propType: PROP_TYPES.OBJECT,
    defaultValue: null
    /* 8 */
    ,
    ...overrides
  };
};

exports.createHitslopProp = createHitslopProp;

const createIconProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    label: "Icon",
    description: "Displays an icon of your choice",
    formType: FORM_TYPES.icon,
    propType: PROP_TYPES.STRING
    /* OR ASSET TODO TEST ME */
    ,
    defaultValue: "FontAwesome/photo",
    required: true,
    editable: true,
    group: GROUPS.basic,
    ...overrides
  };
};

exports.createIconProp = createIconProp;

const createAspectRatioProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    label: "Aspect ratio",
    description: "Aspect ratio of the image",
    formType: FORM_TYPES.aspectRatio,
    propType: PROP_TYPES.NUMBER,
    defaultValue: 1.5,
    editable: true,
    required: false,
    group: GROUPS.basic,
    ...overrides
  };
};

exports.createAspectRatioProp = createAspectRatioProp;

const createBoolProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    label: "Centered Text",
    description: "Whether to center the text",
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: false,
    editable: true,
    required: false,
    group: GROUPS.data,
    ...overrides
  };
};

exports.createBoolProp = createBoolProp;

const createStaticBoolProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return createBoolProp({
    group: GROUPS.basic,
    ...overrides
  });
};

exports.createStaticBoolProp = createStaticBoolProp;

const createTextStyle = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    group: GROUPS.basic,
    label: "Text Style",
    description: "Change the font styles of a given component",
    editable: true,
    required: true,
    formType: FORM_TYPES.typeStyle,
    propType: PROP_TYPES.THEME,
    defaultValue: null,
    ...overrides
  };
};

exports.createTextStyle = createTextStyle;

const createNumberProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    label: "Number",
    description: "A number",
    formType: FORM_TYPES.number,
    propType: PROP_TYPES.NUMBER,
    group: GROUPS.data,
    defaultValue: null,
    editable: true,
    required: true,
    step: 1,
    ...overrides
  };
};

exports.createNumberProp = createNumberProp;

const createStaticNumberProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return createNumberProp({
    group: GROUPS.basic,
    ...overrides
  });
};

exports.createStaticNumberProp = createStaticNumberProp;

const createNumColumnsType = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    label: "Number of Columns",
    description: "Number of Columns",
    group: GROUPS.basic,
    formType: FORM_TYPES.number,
    propType: PROP_TYPES.NUMBER,
    defaultValue: 1,
    editable: false,
    required: false,
    ...overrides
  };
};

exports.createNumColumnsType = createNumColumnsType;

const createColorProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    group: GROUPS.basic,
    label: "Color",
    description: "Select or create a color",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.THEME,
    ...overrides
  };
};

exports.createColorProp = createColorProp;

const createTextEnumProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    group: GROUPS.basic,
    label: "Enum",
    description: "Enum",
    editable: true,
    required: false,
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
    defaultValue: null,
    options: [],
    ...overrides
  };
};

exports.createTextEnumProp = createTextEnumProp;

const createDirectionProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return createTextEnumProp({
    label: "Direction",
    description: "Whether the checkbox rows should be shown horizontally or vertically",
    formType: FORM_TYPES.flatArray,
    defaultValue: null,
    options: ["horizontal", "vertical"],
    ...overrides
  });
};

exports.createDirectionProp = createDirectionProp;

const createRowDirectionProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return createTextEnumProp({
    label: "Direction",
    description: "Whether the element will appear on the left or right",
    formType: FORM_TYPES.flatArray,
    options: ["row", "row-reverse"],
    ...overrides
  });
};

exports.createRowDirectionProp = createRowDirectionProp;

const createIconSizeProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    group: GROUPS.basic,
    label: "Icon Size",
    description: "Size of icon",
    editable: true,
    required: false,
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.NUMBER,
    defaultValue: 32,
    options: [12, 16, 24, 32, 48, 64],
    ...overrides
  };
};

exports.createIconSizeProp = createIconSizeProp;

const createBorderRadiusProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    group: GROUPS.style,
    label: "Border radius",
    description: "Border radius of the element - either None, Global (using theme global border radius), or Round (must specify a width and height on component)",
    formType: FORM_TYPES.borderRadiusMode,
    propType: PROP_TYPES.THEME,
    defaultValue: null,
    editable: true,
    required: true,
    ...overrides
  };
};

exports.createBorderRadiusProp = createBorderRadiusProp;
const FIELD_NAME = {
  group: GROUPS.basic,
  label: "Field name",
  description: "The name of the field within the screen that will store this component's value",
  formType: FORM_TYPES.fieldName,
  propType: PROP_TYPES.STRING,
  defaultValue: "value",
  valuePropName: "value",
  handlerPropName: "onChange",
  editable: true,
  required: false
};
exports.FIELD_NAME = FIELD_NAME;

const createFieldNameProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return { ...FIELD_NAME,
    handlerPropName: "onPress",
    ...overrides
  };
};

exports.createFieldNameProp = createFieldNameProp;

const createActionProp = function () {
  let overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    label: "Action",
    description: "Action to execute when button pressed",
    editable: true,
    required: false,
    formType: FORM_TYPES.action,
    propType: PROP_TYPES.STRING,
    defaultValue: null,
    group: GROUPS.basic,
    ...overrides
  };
};

exports.createActionProp = createActionProp;
const TEXT_INPUT_PROPS = {
  allowFontScaling: {
    group: GROUPS.advanced,
    label: "Allow Font Scaling",
    description: "Whether fonts should scale to respect Text Size in the user's accessibility settings. (Default: true)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  },
  autoCapitalize: {
    group: GROUPS.advanced,
    label: "Auto Capitalize",
    description: "Can automatically capitalize sentences, words, and characters (Default: none).",
    editable: true,
    required: false,
    defaultValue: null,
    options: ["none", "sentences", "words", "characters"],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING
  },
  autoCorrect: {
    group: GROUPS.advanced,
    label: "Auto Correct",
    description: "Enables auto correction",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  },
  autoFocus: {
    group: GROUPS.basic,
    label: "Auto Focus",
    description: "Focuses the input on load in and brings up the keyboard",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  },
  caretHidden: {
    group: GROUPS.advanced,
    label: "Hide Caret",
    description: "Hides the caret(the line small line underneath each showing where you're editing/typing",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  },
  contextMenuHidden: {
    group: GROUPS.advanced,
    label: "Hide Context Menu",
    description: "Hides the system context menu (Default: false)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  },
  disabled: {
    group: GROUPS.basic,
    label: "Disabled",
    description: "Whether the input should be disabled. Will prevent input and show a greyed out state.",
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: null,
    editable: true,
    required: false
  },
  editable: {
    group: GROUPS.advanced,
    label: "Editable",
    description: "If false, the text is not editable",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  },
  keyboardAppearance: {
    group: GROUPS.advanced,
    label: "Keyboard Appearance",
    description: "Determines the color of the keyboard.(iOS Only)",
    editable: true,
    required: false,
    defaultValue: null,
    options: ["default", "light", "dark"],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING
  },
  keyboardType: {
    group: GROUPS.advanced,
    label: "Keyboard Type",
    description: "Determines what keyboard is given to the user.",
    editable: true,
    required: false,
    defaultValue: null,
    options: ["default", "email-address", "numeric", "phone-pad", "ascii-capable", "numbers-and-punctuation", "url", "number-pad", "name-phone-pad", "decimal-pad", "twitter", "web-search", "visible-password"],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING
  },
  maxLength: {
    group: GROUPS.basic,
    label: "Max Length",
    description: "Limits the input to a set number of characters.",
    editable: true,
    required: false,
    defaultValue: null,
    min: 0,
    step: 1,
    precision: 0,
    formType: FORM_TYPES.number,
    propType: PROP_TYPES.NUMBER
  },
  placeholder: {
    group: GROUPS.basic,
    label: "Placeholder Text",
    description: "The text that is shown on load when no value is available.",
    editable: true,
    required: false,
    defaultValue: "Lorem ipsum",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING
  },
  placeholderTextColor: {
    group: GROUPS.basic,
    label: "Placeholder Text Color",
    description: "The color of the placeholder text.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.STRING
  },
  returnKeyLabel: {
    group: GROUPS.advanced,
    label: "Return Key Label",
    description: "(Android Only) Sets the label on the return key (use this instead of rewturnKeyType)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING
  },
  returnKeyType: {
    group: GROUPS.advanced,
    label: "Return Key Type",
    description: "Determines how the return key should look like",
    editable: true,
    required: false,
    defaultValue: null,
    options: ["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING
  },
  secureTextEntry: {
    group: GROUPS.basic,
    label: "Password Input?",
    description: "Hides the characters with a *, useful for passwords and other sensitive information.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  },
  selectionColor: {
    group: GROUPS.advanced,
    label: "Selection Color",
    description: "Color of the highlighted portion when selecting.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.STRING
  },
  selectTextOnFocus: {
    group: GROUPS.advanced,
    label: "Select Text on Focus",
    description: "If true, all the text will automatically be selected on focus",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  }
};
exports.TEXT_INPUT_PROPS = TEXT_INPUT_PROPS;
const NUMBER_INPUT_PROPS = {
  allowFontScaling: {
    group: GROUPS.advanced,
    label: "Allow Font Scaling",
    description: "Whether fonts should scale to respect Text Size in the user's accessibility settings. (Default: true)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  },
  autoFocus: {
    group: GROUPS.basic,
    label: "Auto Focus",
    description: "Focuses the input on load in and brings up the keyboard",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  },
  caretHidden: {
    group: GROUPS.advanced,
    label: "Hide Caret",
    description: "Hides the caret(the line small line underneath each showing where you're editing/typing",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  },
  contextMenuHidden: {
    group: GROUPS.advanced,
    label: "Hide Context Menu",
    description: "Hides the system context menu (Default: false)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  },
  disabled: {
    group: GROUPS.basic,
    label: "Disabled",
    description: "Whether the input should be disabled. Will prevent input and show a greyed out state.",
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: null,
    editable: true,
    required: false
  },
  editable: {
    group: GROUPS.advanced,
    label: "Editable",
    description: "If false, the text is not editable",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  },
  keyboardAppearance: {
    group: GROUPS.advanced,
    label: "Keyboard Appearance",
    description: "Determines the color of the keyboard.(iOS Only)",
    editable: true,
    required: false,
    defaultValue: null,
    options: ["default", "light", "dark"],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING
  },
  keyboardType: {
    group: GROUPS.advanced,
    label: "Keyboard Type",
    description: "Determines what keyboard is given to the user.",
    editable: true,
    required: false,
    defaultValue: null,
    options: ["numeric", "numbers-and-punctuation", "number-pad"],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING
  },
  maxLength: {
    group: GROUPS.basic,
    label: "Max Length",
    description: "Limits the input to a set number of characters.",
    editable: true,
    required: false,
    defaultValue: null,
    min: 0,
    step: 1,
    precision: 0,
    formType: FORM_TYPES.number,
    propType: PROP_TYPES.NUMBER
  },
  placeholder: {
    group: GROUPS.basic,
    label: "Placeholder Text",
    description: "The text that is shown on load when no value is available.",
    editable: true,
    required: false,
    defaultValue: "0",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING
  },
  placeholderTextColor: {
    group: GROUPS.basic,
    label: "Placeholder Text Color",
    description: "The color of the placeholder text.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.STRING
  },
  returnKeyLabel: {
    group: GROUPS.advanced,
    label: "Return Key Label",
    description: "(Android Only) Sets the label on the return key (use this instead of rewturnKeyType)",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING
  },
  returnKeyType: {
    group: GROUPS.advanced,
    label: "Return Key Type",
    description: "Determines how the return key should look like",
    editable: true,
    required: false,
    defaultValue: null,
    options: ["done", "go", "next", "search", "send", "none", "previous", "default", "emergency-call", "google", "join", "route", "yahoo"],
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING
  },
  selectionColor: {
    group: GROUPS.advanced,
    label: "Selection Color",
    description: "Color of the highlighted portion when selecting.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.STRING
  },
  selectTextOnFocus: {
    group: GROUPS.advanced,
    label: "Select Text on Focus",
    description: "If true, all the text will automatically be selected on focus",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN
  }
};
exports.NUMBER_INPUT_PROPS = NUMBER_INPUT_PROPS;
//# sourceMappingURL=component-types.js.map