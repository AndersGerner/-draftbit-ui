"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Accordion Group",
  tag: "AccordionGroup",
  description: "An expandable container containing components",
  category: _types.COMPONENT_TYPES.container,
  props: {
    openColor: (0, _types.createColorProp)({
      label: "Open text color"
    }),
    closedColor: (0, _types.createColorProp)({
      label: "Closed text Color"
    }),
    caretColor: (0, _types.createColorProp)({
      label: "Caret color"
    }),
    iconSize: (0, _types.createNumberProp)({
      label: "Icon size",
      defaultValue: 24
    }),
    label: (0, _types.createTextProp)({
      label: "Label"
    }),
    expanded: (0, _types.createStaticBoolProp)({
      label: "Expanded",
      description: "Whether the AccordionGroup should be expanded or not"
    }),
    icon: (0, _types.createIconProp)()
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=AccordionGroup.js.map