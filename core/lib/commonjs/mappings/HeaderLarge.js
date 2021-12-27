"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = [{
  name: "Header Large",
  tag: "HeaderLarge",
  description: "A large header with an optional touchable right aligned text and icon.",
  category: _types.COMPONENT_TYPES.header,
  layout: {},
  triggers: [_types.Triggers.OnPress],
  props: {
    onPress: (0, _types.createActionProp)(),
    title: (0, _types.createTextProp)({
      label: "Title",
      description: "Text to display",
      defaultValue: "Title"
    }),
    buttonText: (0, _types.createTextProp)({
      label: "Button text",
      description: "Right aligned button text to display",
      defaultValue: "See All"
    }),
    icon: (0, _types.createIconProp)({
      defaultValue: null,
      required: false
    })
  }
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=HeaderLarge.js.map