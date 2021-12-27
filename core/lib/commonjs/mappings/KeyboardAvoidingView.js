"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Keyboard Avoiding View",
  tag: "KeyboardAvoidingView",
  description: "View that moves out of the way of the virtual keyboard. ",
  category: _types.COMPONENT_TYPES.layout,
  props: {
    enabled: {
      label: "Enable",
      description: "Enable the keyboard avoiding view",
      editable: true,
      required: true,
      defaultValue: true,
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      group: _types.GROUPS.basic
    },
    behavior: {
      label: "Resizing Behavior",
      description: "The behavior for how the keyboard resizing interacts with the rest of the screen. (Default: padding).",
      editable: true,
      required: true,
      defaultValue: "padding",
      options: ["padding", "position", "height"],
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      group: _types.GROUPS.basic
    },
    keyboardVerticalOffset: {
      label: "Keyboard Vertical Offset",
      description: "The distance between the bottom of the view and the keyboard",
      editable: true,
      required: false,
      defaultValue: 0,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      group: _types.GROUPS.basic
    }
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=KeyboardAvoidingView.js.map