import { COMPONENT_TYPES, Triggers, GROUPS, FORM_TYPES, PROP_TYPES, FIELD_NAME } from "@draftbit/types";
const SEED_DATA_PROPS = {
  label: {
    group: GROUPS.data,
    label: "Label",
    description: "The label to be displayed on the picker",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: true
  },
  placeholder: {
    group: GROUPS.basic,
    label: "Placeholder",
    description: "The placeholder text of the picker",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: "Select an option",
    editable: true,
    required: false
  },
  placeholderTextColor: {
    group: GROUPS.basic,
    label: "Placeholder Text Color",
    description: "The color of the placeholder text.",
    editable: true,
    required: false,
    defaultValue: null,
    formType: FORM_TYPES.color,
    propType: PROP_TYPES.STRING
  },
  assistiveText: {
    group: GROUPS.basic,
    label: "Assistive text",
    description: "Helper text to display below the picker",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: false
  },
  options: {
    group: GROUPS.data,
    label: "Options",
    description: "Array of picker options. An array of objects containing a label and value.",
    editable: true,
    required: false,
    formType: FORM_TYPES.array,
    propType: PROP_TYPES.OBJECT,
    options: [],
    defaultValue: null
  },
  disabled: {
    group: GROUPS.basic,
    label: "Disabled",
    description: "Whether the picker should be disabled. Will prevent selection and show a greyed out state.",
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: false,
    editable: true,
    required: false
  },
  error: {
    group: GROUPS.data,
    label: "Error",
    description: "Whether the picker should display the error state",
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: false,
    editable: true,
    required: false
  },
  leftIconName: {
    group: GROUPS.basic,
    label: "Left icon name",
    description: "The icon to display on the left",
    formType: FORM_TYPES.icon,
    propType: PROP_TYPES.ASSET,
    defaultValue: null,
    editable: true,
    required: false
  },
  leftIconMode: {
    group: GROUPS.basic,
    label: "Left icon mode",
    description: "The mode of the icon to display on the left. 'inset' or 'outset'.",
    formType: FORM_TYPES.flatArray,
    propType: PROP_TYPES.STRING,
    defaultValue: "inset",
    options: ["inset", "outset"],
    editable: true,
    required: true
  },
  rightIconName: {
    group: GROUPS.basic,
    label: "Right icon name",
    description: "The icon to display on the right",
    formType: FORM_TYPES.icon,
    propType: PROP_TYPES.ASSET,
    defaultValue: null,
    editable: true,
    required: false
  },
  fieldName: { ...FIELD_NAME,
    defaultValue: "pickerValue",
    handlerPropName: "onValueChange"
  }
};
const SEED_DATA_TRIGGERS = [Triggers.OnValueChange];
export const SEED_DATA = [{
  name: "Picker",
  tag: "Picker",
  description: "A component used to pick a value from a set of options",
  category: COMPONENT_TYPES.input,
  preview_image_url: "{CLOUDINARY_URL}/Picker.png",
  supports_list_render: false,
  triggers: SEED_DATA_TRIGGERS,
  props: { ...SEED_DATA_PROPS,
    type: {
      label: "Appearance",
      description: "Type of Picker",
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: "solid",
      options: ["solid", "underline"],
      editable: true,
      required: true,
      group: GROUPS.basic
    }
  },
  layout: {}
}];
//# sourceMappingURL=Picker.js.map