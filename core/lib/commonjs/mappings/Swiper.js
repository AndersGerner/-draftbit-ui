"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Swiper",
  tag: "Swiper",
  description: "Swiper container",
  category: _types.COMPONENT_TYPES.container,
  layout: {
    height: 300,
    width: "100%"
  },
  props: {
    from: (0, _types.createNumberProp)({
      group: _types.GROUPS.basic,
      label: "Initial Slide"
    }),
    loop: (0, _types.createBoolProp)({
      group: _types.GROUPS.basic,
      label: "Loop"
    }),
    timeout: (0, _types.createNumberProp)({
      group: _types.GROUPS.basic,
      label: "Timeout",
      defaultValue: 0
    }),
    vertical: (0, _types.createBoolProp)({
      group: _types.GROUPS.basic,
      label: "Vertical",
      defaultValue: false
    }),
    prevTitle: (0, _types.createTextProp)({
      group: _types.GROUPS.basic,
      label: "Previous Title",
      defaultValue: ""
    }),
    nextTitle: (0, _types.createTextProp)({
      group: _types.GROUPS.basic,
      label: "Next Title",
      defaultValue: ""
    }),
    dotsTouchable: (0, _types.createBoolProp)({
      group: _types.GROUPS.basic,
      label: "Dots Touchable",
      defaultValue: true
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Swiper.js.map