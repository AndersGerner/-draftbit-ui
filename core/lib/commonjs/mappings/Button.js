"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA_TRIGGERS = [_types.Triggers.OnPress];
const SEED_DATA_PROPS = {
  onPress: (0, _types.createActionProp)(),
  icon: (0, _types.createIconProp)({
    defaultValue: null,
    required: false
  }),
  title: (0, _types.createTextProp)({
    label: "Label",
    description: "Button Label",
    defaultValue: "Get Started"
  }),
  disabled: (0, _types.createBoolProp)({
    group: _types.GROUPS.basic,
    label: "Disabled",
    description: "Whether the button should be disabled"
  }),
  loading: (0, _types.createBoolProp)({
    group: _types.GROUPS.basic,
    label: "Loading",
    description: "Whether to show a loading indicator"
  })
};
const LAYOUT = {
  backgroundColor: "transparent",
  borderRadius: 8,
  fontFamily: "system-700"
};
const SEED_DATA = [{
  name: "Button Outline",
  tag: "ButtonOutline",
  category: _types.COMPONENT_TYPES.button,
  layout: { ...LAYOUT,
    backgroundColor: "transparent",
    borderWidth: 1,
    textAlign: "center"
  },
  triggers: SEED_DATA_TRIGGERS,
  props: SEED_DATA_PROPS
}, {
  name: "Button Solid",
  tag: "ButtonSolid",
  category: _types.COMPONENT_TYPES.button,
  layout: { ...LAYOUT,
    backgroundColor: "primary",
    textAlign: "center"
  },
  triggers: SEED_DATA_TRIGGERS,
  props: SEED_DATA_PROPS
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Button.js.map