"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = [{
  name: "Stepper",
  tag: "Stepper",
  description: "A component used to control the quantity of something",
  category: _types.COMPONENT_TYPES.input,
  layout: {},
  triggers: [_types.Triggers.OnChange],
  props: {
    fieldName: (0, _types.createFieldNameProp)({
      defaultValue: "stepperValue",
      handlerPropName: "onChange",
      valuePropName: "value"
    }),
    iconSize: (0, _types.createIconSizeProp)({
      defaultValue: 24
    }),
    iconColor: (0, _types.createColorProp)({
      defaultValue: "strong"
    })
  }
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Stepper.js.map