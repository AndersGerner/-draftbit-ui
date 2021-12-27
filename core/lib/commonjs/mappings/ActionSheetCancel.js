"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Action Sheet Cancel",
  tag: "ActionSheetCancel",
  description: "Action Sheet cancel",
  category: _types.COMPONENT_TYPES.button,
  triggers: [_types.Triggers.OnPress],
  props: {
    onPress: (0, _types.createActionProp)(),
    label: (0, _types.createTextProp)({
      group: _types.GROUPS.basic,
      label: "Label",
      defaultValue: "Cancel"
    }),
    color: (0, _types.createColorProp)({
      label: "Font Color"
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=ActionSheetCancel.js.map