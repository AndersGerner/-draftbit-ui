"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Container",
  tag: "Container",
  description: "A container component with gutter padding",
  category: _types.COMPONENT_TYPES.deprecated,
  layout: {
    height: 250
  },
  props: {
    useThemeGutterPadding: {
      group: _types.GROUPS.basic,
      label: "Use gutter padding",
      description: "When true, uses the theme gutter spacing as the container's horizontal padding",
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      defaultValue: false,
      editable: false,
      required: true
    },
    backgroundImage: (0, _types.createImageProp)({
      label: "Background Image",
      description: "Apply a custom background image",
      defaultValue: null
    }),
    backgroundImageResizeMode: (0, _types.createResizeModeProp)(),
    elevation: (0, _types.createElevationType)(0)
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Container.js.map