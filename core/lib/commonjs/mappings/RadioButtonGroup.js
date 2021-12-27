"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Radio Button Group",
  tag: "RadioButtonGroup",
  category: _types.COMPONENT_TYPES.input,
  layout: {},
  triggers: [_types.Triggers.OnValueChange],
  props: {
    direction: (0, _types.createDirectionProp)(),
    fieldName: (0, _types.createFieldNameProp)({
      handlerPropName: "onValueChange",
      valuePropName: "value",
      defaultValue: "radioButtonGroupValue"
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=RadioButtonGroup.js.map