"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Toggle Button",
  tag: "ToggleButton",
  category: _types.COMPONENT_TYPES.button,
  layout: {},
  triggers: [_types.Triggers.OnPress],
  props: {
    onPress: (0, _types.createActionProp)(),
    icon: (0, _types.createIconProp)({
      required: true
    }),
    iconSize: (0, _types.createIconSizeProp)(),
    fieldName: (0, _types.createFieldNameProp)({
      defaultValue: false,
      valuePropName: "toggled"
    }),
    disabled: (0, _types.createBoolProp)({
      label: "Disabled",
      description: "Whether the button should be disabled",
      group: _types.GROUPS.basic
    }),
    color: (0, _types.createColorProp)({
      group: _types.GROUPS.basic
    }),
    colorSecondary: (0, _types.createColorProp)({
      label: "Secondary Color",
      group: _types.GROUPS.basic
    }),
    borderColor: (0, _types.createColorProp)({
      label: "Border Color",
      group: _types.GROUPS.basic
    }),
    width: (0, _types.createStaticNumberProp)({
      label: "Width",
      description: "Width",
      defaultValue: 50
    }),
    height: (0, _types.createStaticNumberProp)({
      label: "Height",
      description: "Height",
      defaultValue: 50
    }),
    toggled: (0, _types.createBoolProp)({
      label: "Toggled",
      description: "Whether the button should show the toggled state",
      defaultValue: false
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=ToggleButton.js.map