"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "FAB",
  tag: "FAB",
  category: _types.COMPONENT_TYPES.button,
  description: "A mini round icon FAB",
  layout: {},
  triggers: [_types.Triggers.OnPress],
  props: {
    onPress: (0, _types.createActionProp)(),
    disabled: (0, _types.createBoolProp)({
      label: "Disabled",
      group: _types.GROUPS.basic
    }),
    loading: (0, _types.createBoolProp)({
      label: "Loading",
      group: _types.GROUPS.basic
    }),
    iconName: (0, _types.createIconProp)({
      label: "Icon",
      defaultValue: null,
      group: _types.GROUPS.basic
    }),
    iconColor: (0, _types.createColorProp)({
      label: "Icon color",
      defaultValue: null,
      group: _types.GROUPS.basic
    }),
    bgColor: (0, _types.createColorProp)({
      label: "Background color",
      defaultValue: null,
      group: _types.GROUPS.basic
    }),
    iconSize: (0, _types.createIconSizeProp)()
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=FAB.js.map