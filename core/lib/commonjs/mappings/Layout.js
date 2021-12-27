"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = [{
  name: "Row",
  tag: "Row",
  category: _types.COMPONENT_TYPES.layout,
  props: {
    justifyContent: {
      label: "Align Horizontally",
      group: _types.GROUPS.style,
      description: "Align Items Horizontally (on the X Axis)",
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "flex-start",
      editable: true,
      required: false
    },
    alignItems: {
      label: "Align Vertically",
      group: _types.GROUPS.style,
      description: "Align Items Vertically (on the Y Axis)",
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "flex-start",
      editable: true,
      required: false
    }
  }
}, {
  name: "Spacer",
  tag: "Spacer",
  category: _types.COMPONENT_TYPES.layout,
  props: {
    top: {
      label: "Top",
      description: "Top",
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      group: _types.GROUPS.style,
      defaultValue: 8,
      editable: true,
      required: false
    },
    right: {
      label: "Right",
      description: "Right",
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      group: _types.GROUPS.style,
      defaultValue: 8,
      editable: true,
      required: false
    },
    bottom: {
      label: "Bottom",
      description: "Bottom",
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      group: _types.GROUPS.style,
      defaultValue: 8,
      editable: true,
      required: false
    },
    left: {
      label: "Left",
      description: "Left",
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      group: _types.GROUPS.style,
      defaultValue: 8,
      editable: true,
      required: false
    }
  }
}, {
  name: "Stack",
  tag: "Stack",
  category: _types.COMPONENT_TYPES.layout,
  props: {
    justifyContent: {
      group: _types.GROUPS.style,
      label: "Justify",
      description: "Justify horizontally",
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "flex-start",
      editable: true,
      required: false
    },
    alignItems: {
      group: _types.GROUPS.style,
      label: "Align",
      description: "Vertical align",
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "flex-start",
      editable: true,
      required: false
    }
  }
}, {
  name: "Center",
  tag: "Center",
  category: _types.COMPONENT_TYPES.layout,
  props: {
    width: {
      label: "Width",
      description: "Width",
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      group: _types.GROUPS.style,
      defaultValue: 240,
      editable: true,
      required: false
    },
    height: {
      label: "Height",
      description: "Height",
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      group: _types.GROUPS.style,
      defaultValue: 200,
      editable: true,
      required: false
    },
    bgColor: {
      label: "Background Color",
      description: "Background color",
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME,
      editable: true,
      required: false,
      defaultValue: "light",
      group: _types.GROUPS.style
    }
  }
}, {
  name: "Circle",
  tag: "Circle",
  category: _types.COMPONENT_TYPES.layout,
  props: {
    size: {
      label: "Size",
      description: "Size",
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      group: _types.GROUPS.style,
      defaultValue: 50,
      editable: true,
      required: false
    },
    bgColor: {
      label: "Background Color",
      description: "Background color",
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME,
      editable: true,
      required: false,
      defaultValue: "light",
      group: _types.GROUPS.style
    }
  }
}, {
  name: "Square",
  tag: "Square",
  category: _types.COMPONENT_TYPES.layout,
  props: {
    size: {
      label: "Size",
      description: "Size",
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      group: _types.GROUPS.style,
      defaultValue: 50,
      editable: true,
      required: false
    },
    bgColor: {
      label: "Background Color",
      description: "Background color",
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME,
      editable: true,
      required: false,
      defaultValue: "light",
      group: _types.GROUPS.style
    }
  }
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Layout.js.map