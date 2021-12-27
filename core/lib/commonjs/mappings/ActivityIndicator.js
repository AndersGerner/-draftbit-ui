"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Activity Indicator",
  tag: "ActivityIndicator",
  description: "Displays a circular loading indicator.",
  doc_link: "https://docs.expo.io/versions/latest/react-native/activityindicator/",
  code_link: "https://github.com/expo/expo/blob/master/ios/versioned-react-native/ABI32_0_0/Libraries/Components/ActivityIndicator/ActivityIndicator.js",
  category: _types.COMPONENT_TYPES.input,
  layout: {
    width: 36,
    height: 36
  },
  props: {
    size: {
      label: "Size",
      description: "The size of the loading indicator (Default: small)",
      options: ["small", "large"],
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      editable: true,
      required: false,
      defaultValue: "small",
      group: _types.GROUPS.basic
    },
    animating: {
      label: "Spinning",
      description: "Whether to show the loading indicator (Default: true)",
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      editable: true,
      required: false,
      defaultValue: true,
      group: _types.GROUPS.basic
    },
    hidesWhenStopped: {
      label: "Hide When Stopped",
      description: "Whether the indicator should hide when not animating (Default: true)",
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      editable: true,
      required: false,
      defaultValue: true,
      group: _types.GROUPS.basic
    },
    color: {
      label: "Color",
      description: "The color of the loading indicator (Default: gray)",
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME,
      editable: true,
      required: false,
      defaultValue: null,
      group: _types.GROUPS.basic
    }
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=ActivityIndicator.js.map