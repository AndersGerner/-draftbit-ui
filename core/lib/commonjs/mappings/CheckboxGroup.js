"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Checkbox Group",
  tag: "CheckboxGroup",
  category: _types.COMPONENT_TYPES.deprecated,
  layout: {},
  triggers: [_types.Triggers.OnValueChange],
  props: {
    direction: (0, _types.createDirectionProp)(),
    values: (0, _types.createTextProp)({
      group: _types.GROUPS.data,
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.ARRAY,
      label: "Values",
      description: "Currently selected values of the checkbox group",
      required: true,
      defaultValue: null
    }),
    fieldName: (0, _types.createFieldNameProp)({
      defaultValue: "checkboxGroupValue",
      handlerPropName: "onValueChange",
      valuePropName: "value"
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=CheckboxGroup.js.map