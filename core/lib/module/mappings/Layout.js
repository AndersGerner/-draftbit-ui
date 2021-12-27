import { GROUPS, FORM_TYPES, PROP_TYPES, COMPONENT_TYPES } from "@draftbit/types";
export const SEED_DATA = [{
  name: "Row",
  tag: "Row",
  category: COMPONENT_TYPES.layout,
  props: {
    justifyContent: {
      label: "Align Horizontally",
      group: GROUPS.style,
      description: "Align Items Horizontally (on the X Axis)",
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "flex-start",
      editable: true,
      required: false
    },
    alignItems: {
      label: "Align Vertically",
      group: GROUPS.style,
      description: "Align Items Vertically (on the Y Axis)",
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "flex-start",
      editable: true,
      required: false
    }
  }
}, {
  name: "Spacer",
  tag: "Spacer",
  category: COMPONENT_TYPES.layout,
  props: {
    top: {
      label: "Top",
      description: "Top",
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      group: GROUPS.style,
      defaultValue: 8,
      editable: true,
      required: false
    },
    right: {
      label: "Right",
      description: "Right",
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      group: GROUPS.style,
      defaultValue: 8,
      editable: true,
      required: false
    },
    bottom: {
      label: "Bottom",
      description: "Bottom",
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      group: GROUPS.style,
      defaultValue: 8,
      editable: true,
      required: false
    },
    left: {
      label: "Left",
      description: "Left",
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      group: GROUPS.style,
      defaultValue: 8,
      editable: true,
      required: false
    }
  }
}, {
  name: "Stack",
  tag: "Stack",
  category: COMPONENT_TYPES.layout,
  props: {
    justifyContent: {
      group: GROUPS.style,
      label: "Justify",
      description: "Justify horizontally",
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "flex-start",
      editable: true,
      required: false
    },
    alignItems: {
      group: GROUPS.style,
      label: "Align",
      description: "Vertical align",
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "flex-start",
      editable: true,
      required: false
    }
  }
}, {
  name: "Center",
  tag: "Center",
  category: COMPONENT_TYPES.layout,
  props: {
    width: {
      label: "Width",
      description: "Width",
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      group: GROUPS.style,
      defaultValue: 240,
      editable: true,
      required: false
    },
    height: {
      label: "Height",
      description: "Height",
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      group: GROUPS.style,
      defaultValue: 200,
      editable: true,
      required: false
    },
    bgColor: {
      label: "Background Color",
      description: "Background color",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      editable: true,
      required: false,
      defaultValue: "light",
      group: GROUPS.style
    }
  }
}, {
  name: "Circle",
  tag: "Circle",
  category: COMPONENT_TYPES.layout,
  props: {
    size: {
      label: "Size",
      description: "Size",
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      group: GROUPS.style,
      defaultValue: 50,
      editable: true,
      required: false
    },
    bgColor: {
      label: "Background Color",
      description: "Background color",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      editable: true,
      required: false,
      defaultValue: "light",
      group: GROUPS.style
    }
  }
}, {
  name: "Square",
  tag: "Square",
  category: COMPONENT_TYPES.layout,
  props: {
    size: {
      label: "Size",
      description: "Size",
      formType: FORM_TYPES.number,
      propType: PROP_TYPES.NUMBER,
      group: GROUPS.style,
      defaultValue: 50,
      editable: true,
      required: false
    },
    bgColor: {
      label: "Background Color",
      description: "Background color",
      formType: FORM_TYPES.color,
      propType: PROP_TYPES.THEME,
      editable: true,
      required: false,
      defaultValue: "light",
      group: GROUPS.style
    }
  }
}];
//# sourceMappingURL=Layout.js.map