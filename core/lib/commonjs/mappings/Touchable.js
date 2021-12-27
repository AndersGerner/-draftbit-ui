"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Touchable",
  tag: "Touchable",
  description: "Simple button with no styles",
  category: _types.COMPONENT_TYPES.button,
  layout: {},
  triggers: [_types.Triggers.OnPress],
  props: {
    onPress: (0, _types.createActionProp)()
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Touchable.js.map