"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Accordion Item",
  tag: "AccordionItem",
  description: "Item to be used in Accordion",
  category: _types.COMPONENT_TYPES.button,
  props: {
    icon: (0, _types.createIconProp)(),
    label: (0, _types.createTextProp)({
      label: "Item label"
    }),
    iconColor: (0, _types.createColorProp)({
      label: "Icon color"
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=AccordionItem.js.map