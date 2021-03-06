import { GROUPS, FORM_TYPES, PROP_TYPES, COMPONENT_TYPES, createActionProp, Triggers } from "@draftbit/types";
const SEED_DATA_PROPS = {
  onPress: createActionProp(),
  icon: {
    group: GROUPS.basic,
    label: "Icon Name",
    description: "Name of the icon",
    editable: true,
    required: true,
    formType: FORM_TYPES.icon,
    propType: PROP_TYPES.STRING,
    defaultValue: null
  },
  children: {
    group: GROUPS.data,
    label: "Label",
    description: "Button label",
    required: true,
    editable: true,
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "Get Started"
  },
  color: {
    group: GROUPS.basic,
    label: "Color Override",
    description: "Override the background color of the button",
    editable: true,
    required: false,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.THEME,
    defaultValue: null
  },
  labelColor: {
    group: GROUPS.basic,
    label: "Label Color Override",
    description: "Override the label color of the button",
    editable: true,
    required: false,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.THEME,
    defaultValue: null
  },
  disabled: {
    group: GROUPS.basic,
    label: "Disabled",
    description: "Whether the button should be disabled",
    editable: true,
    required: false,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: null
  },
  loading: {
    group: GROUPS.data,
    label: "Loading",
    description: "Whether to show a loading indicator",
    editable: true,
    required: false,
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: null
  }
};
export const SEED_DATA = [{
  name: "Button Outline",
  tag: "Button",
  category: COMPONENT_TYPES.deprecated,
  triggers: [Triggers.OnPress],
  props: { ...SEED_DATA_PROPS,
    type: {
      group: GROUPS.uncategorized,
      label: "Type",
      description: "Button type",
      editable: false,
      required: true,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "outline"
    }
  },
  layout: {}
}, {
  name: "Button Solid",
  tag: "Button",
  category: COMPONENT_TYPES.deprecated,
  triggers: [Triggers.OnPress],
  props: { ...SEED_DATA_PROPS,
    type: {
      group: GROUPS.uncategorized,
      label: "Type",
      description: "Button type",
      editable: false,
      required: true,
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "solid"
    }
  },
  layout: {}
}];
//# sourceMappingURL=DeprecatedButton.js.map