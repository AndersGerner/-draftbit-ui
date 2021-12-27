"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Action Sheet Item",
  tag: "ActionSheetItem",
  description: "Action Sheet item",
  category: _types.COMPONENT_TYPES.button,
  triggers: [_types.Triggers.OnPress],
  layout: {
    textAlign: "center"
  },
  props: {
    onPress: (0, _types.createActionProp)(),
    label: (0, _types.createTextProp)({
      group: _types.GROUPS.basic,
      label: "Label",
      defaultValue: "Option"
    }),
    color: (0, _types.createColorProp)({
      label: "Font Color"
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=ActionSheetItem.js.map