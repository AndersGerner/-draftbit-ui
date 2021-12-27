"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Action Sheet",
  tag: "ActionSheet",
  description: "Action Sheet container",
  category: _types.COMPONENT_TYPES.container,
  props: {
    visible: (0, _types.createStaticBoolProp)({
      group: _types.GROUPS.data,
      label: "Show Action Sheet"
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=ActionSheet.js.map