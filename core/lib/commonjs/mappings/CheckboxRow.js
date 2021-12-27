"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Checkbox Row",
  tag: "CheckboxRow",
  category: _types.COMPONENT_TYPES.input,
  layout: {
    minHeight: 50
  },
  triggers: [_types.Triggers.OnPress],
  props: {
    label: (0, _types.createTextProp)({
      label: "Label",
      description: "Label to show with the checkbox",
      required: true,
      defaultValue: "First Option"
    }),
    labelStyle: (0, _types.createTextStyle)({
      label: "Label Style",
      description: "Change the styles of the label",
      required: false,
      editable: false
    }),
    direction: (0, _types.createRowDirectionProp)(),
    fieldName: (0, _types.createFieldNameProp)({
      defaultValue: "checkboxValue",
      valuePropName: "value",
      handlerPropName: "onPress"
    }),
    color: (0, _types.createColorProp)({
      description: "Color for the button (used when the checkbox is checked)"
    }),
    uncheckedColor: (0, _types.createColorProp)({
      label: "Unselected Color",
      description: "Color for the button when the checkbox is unchecked"
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=CheckboxRow.js.map