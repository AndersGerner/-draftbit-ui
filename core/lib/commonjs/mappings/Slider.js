"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Slider",
  tag: "Slider",
  description: "A component used to set a value in a range",
  category: _types.COMPONENT_TYPES.input,
  layout: {
    marginLeft: 12,
    marginRight: 12
  },
  triggers: [_types.Triggers.OnValueChange],
  props: {
    fieldName: (0, _types.createFieldNameProp)({
      defaultValue: "sliderValue",
      handlerPropName: "onValueChange",
      valuePropName: "value"
    }),
    minimumValue: (0, _types.createNumberProp)({
      group: _types.GROUPS.basic,
      label: "Min Value",
      min: 0,
      max: 1000
    }),
    maximumValue: (0, _types.createNumberProp)({
      group: _types.GROUPS.basic,
      label: "Max Value",
      min: 1,
      max: 10000
    }),
    step: (0, _types.createNumberProp)({
      group: _types.GROUPS.basic,
      label: "Step",
      min: 0,
      max: 100,
      step: 0.01,
      precision: 2
    }),
    leftIcon: (0, _types.createIconProp)({
      label: "Left Icon",
      defaultValue: null
    }),
    rightIcon: (0, _types.createIconProp)({
      label: "Right Icon",
      defaultValue: null
    }),
    minimumTrackTintColor: (0, _types.createColorProp)({
      label: "Min Track Color",
      defaultValue: null
    }),
    maximumTrackTintColor: (0, _types.createColorProp)({
      label: "Max Track Color",
      defaultValue: null
    }),
    thumbTintColor: (0, _types.createColorProp)({
      label: "Thumb Color",
      defaultValue: null
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Slider.js.map