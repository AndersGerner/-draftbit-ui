"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Map Callout",
  tag: "MapCallout",
  description: "An info window to display on top of a marker when it is clicked",
  category: _types.COMPONENT_TYPES.deprecated,
  layout: {},
  props: {
    onPress: (0, _types.createActionProp)({
      description: "Action to execute when the callout is pressed"
    }),
    showTooltip: (0, _types.createBoolProp)({
      label: "Show Tooltip",
      description: 'If false, a default "tooltip" bubble window will be drawn around this callout\'s children. If true, the child views can fully customize their appearance, including any "bubble"-like styles',
      group: _types.GROUPS.basic,
      defaultValue: false
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=MapCallout.js.map