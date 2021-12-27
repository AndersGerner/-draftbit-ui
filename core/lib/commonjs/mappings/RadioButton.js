"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Radio Button",
  tag: "RadioButton",
  category: _types.COMPONENT_TYPES.input,
  triggers: [_types.Triggers.OnPress],
  props: {
    value: (0, _types.createTextProp)({
      label: "Value",
      description: "Value of the radio button",
      defaultValue: null,
      required: true
    }),
    color: (0, _types.createColorProp)({
      group: _types.GROUPS.basic,
      description: "Color for the button",
      defaultValue: "primary"
    }),
    unselectedColor: (0, _types.createColorProp)({
      group: _types.GROUPS.basic,
      label: "Unselected Color",
      description: "Unselected Color for the button",
      defaultValue: "primary"
    }),
    disabled: (0, _types.createBoolProp)({
      label: "Disabled",
      description: "Whether radio button is disabled"
    }),
    size: (0, _types.createNumberProp)({
      group: _types.GROUPS.basic,
      label: "Size",
      description: "Specifies the size of the button",
      defaultValue: 24,
      min: 16,
      max: 128,
      step: 1,
      precision: 0
    }),
    selectedIcon: (0, _types.createIconProp)({
      label: "Selected Icon",
      description: "Icon to show when the radio button is selected",
      defaultValue: "MaterialIcons/radio-button-checked"
    }),
    unselectedIcon: (0, _types.createIconProp)({
      label: "Unselected Icon",
      description: "Icon to show when the radio button is unselected",
      defaultValue: "MaterialIcons/radio-button-unchecked"
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=RadioButton.js.map