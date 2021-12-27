"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Scroll View",
  tag: "ScrollView",
  description: "A basic ScrollView component",
  category: _types.COMPONENT_TYPES.layout,
  layout: {},
  props: {
    horizontal: (0, _types.createStaticBoolProp)({
      label: "Horizontal",
      description: "Render your list horizontally",
      defaultValue: false
    }),
    showsHorizontalScrollIndicator: (0, _types.createStaticBoolProp)({
      label: "Show Horizontal Scroll Indicator",
      description: "When true, shows a horizontal scroll indicator. The default value is true.",
      defaultValue: false
    }),
    showsVerticalScrollIndicator: (0, _types.createStaticBoolProp)({
      label: "Show Vertical Scroll Indicator",
      description: "When true, shows a vertical scroll indicator. The default value is true.",
      defaultValue: true
    }),
    bounces: (0, _types.createStaticBoolProp)({
      label: "Bounce",
      description: "When true, the scroll view bounces when it reaches the end of the content if the content is larger then the scroll view along the axis of the scroll direction.",
      defaultValue: true
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=ScrollView.js.map