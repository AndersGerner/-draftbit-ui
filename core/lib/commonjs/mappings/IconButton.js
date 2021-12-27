"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Icon Button",
  tag: "IconButton",
  category: _types.COMPONENT_TYPES.button,
  layout: {},
  triggers: [_types.Triggers.OnPress],
  props: {
    onPress: (0, _types.createActionProp)(),
    icon: (0, _types.createIconProp)(),
    color: (0, _types.createColorProp)({
      label: "Color",
      group: _types.GROUPS.basic
    }),
    disabled: (0, _types.createBoolProp)({
      label: "Disabled",
      group: _types.GROUPS.basic
    }),
    size: (0, _types.createNumberProp)({
      group: _types.GROUPS.basic,
      label: "Size",
      description: "Width and height of your icon",
      defaultValue: 32,
      min: 16,
      max: 128,
      step: 1,
      precision: 0
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=IconButton.js.map