"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Checkbox",
  tag: "Checkbox",
  category: _types.COMPONENT_TYPES.input,
  triggers: [_types.Triggers.OnPress],
  props: {
    fieldName: (0, _types.createFieldNameProp)({
      defaultValue: "checkboxValue",
      valuePropName: "status",
      handlerPropName: "onPress"
    }),
    color: (0, _types.createColorProp)({
      group: _types.GROUPS.basic,
      label: "Color",
      description: "Color for the button (used when the checkbox is checked)",
      defaultValue: null
    }),
    uncheckedColor: (0, _types.createColorProp)({
      group: _types.GROUPS.basic,
      label: "Unselected Color",
      description: "Color for the button when the checkbox is unchecked",
      defaultValue: null
    }),
    disabled: (0, _types.createBoolProp)({
      label: "Disabled",
      description: "Whether the checkbox is disabled"
    }),
    size: (0, _types.createStaticNumberProp)({
      label: "Size",
      description: "Specifies the size of the icon",
      defaultValue: null
    }),
    checkedIcon: (0, _types.createIconProp)({
      label: "Checked Icon",
      description: 'Icon to show when the checkbox status is "checked"',
      defaultValue: null
    }),
    uncheckedIcon: (0, _types.createIconProp)({
      label: "Unchecked Icon",
      description: 'Icon to show when the checkbox status is "unchecked"',
      defaultValue: null
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Checkbox.js.map