"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA_TRIGGERS = [_types.Triggers.OnValueChange];
const SEED_DATA = [{
  name: "Switch",
  tag: "Switch",
  category: _types.COMPONENT_TYPES.input,
  layout: {},
  triggers: SEED_DATA_TRIGGERS,
  props: {
    disabled: (0, _types.createBoolProp)({
      label: "Disabled",
      description: "Boolean to handle disabling the switch"
    }),
    fieldName: (0, _types.createFieldNameProp)({
      handlerPropName: "onValueChange",
      valuePropName: "value",
      defaultValue: "switchValue"
    }),
    activeTrackColor: (0, _types.createColorProp)({
      label: "Active Track Color"
    }),
    inactiveTrackColor: (0, _types.createColorProp)({
      label: "Inactive Track Color"
    }),
    activeThumbColor: (0, _types.createColorProp)({
      label: "Active Thumb Color"
    }),
    inactiveThumbColor: (0, _types.createColorProp)({
      label: "Inactive Thumb Color"
    })
  }
}, {
  name: "Switch Row",
  tag: "SwitchRow",
  category: _types.COMPONENT_TYPES.input,
  layout: {
    marginLeft: 0,
    marginRight: 0
  },
  triggers: SEED_DATA_TRIGGERS,
  props: {
    label: (0, _types.createTextProp)({
      label: "Label",
      description: "Label to show with the checkbox",
      required: true,
      defaultValue: "First Option"
    }),
    direction: (0, _types.createRowDirectionProp)(),
    disabled: (0, _types.createBoolProp)({
      label: "Disabled",
      description: "Boolean to handle disabling the switch",
      group: _types.GROUPS.data
    }),
    fieldName: (0, _types.createFieldNameProp)({
      handlerPropName: "onValueChange",
      valuePropName: "value",
      defaultValue: "switchValue"
    }),
    activeTrackColor: (0, _types.createColorProp)({
      label: "Active Track Color"
    }),
    inactiveTrackColor: (0, _types.createColorProp)({
      label: "Inactive Track Color"
    }),
    activeThumbColor: (0, _types.createColorProp)({
      label: "Active Thumb Color"
    }),
    inactiveThumbColor: (0, _types.createColorProp)({
      label: "Inactive Thumb Color"
    })
  }
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Switch.js.map