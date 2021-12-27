"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Radio Button Row",
  tag: "RadioButtonRow",
  category: _types.COMPONENT_TYPES.input,
  layout: {},
  props: {
    label: (0, _types.createTextProp)({
      label: "Label",
      description: "Label to show with the radio button",
      required: true,
      defaultValue: "First Option"
    }),
    direction: (0, _types.createTextEnumProp)({
      label: "Direction",
      description: "Whether the checkbox will appear on the left or on the right",
      options: ["row", "row-reverse"]
    }),
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
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=RadioButtonRow.js.map