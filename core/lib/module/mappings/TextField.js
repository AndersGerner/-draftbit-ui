import { GROUPS, COMPONENT_TYPES, FORM_TYPES, PROP_TYPES, FIELD_NAME, TEXT_INPUT_PROPS, Triggers, createColorProp, createNumberProp, createFieldNameProp } from "@draftbit/types";
const SEED_DATA_PROPS = { ...TEXT_INPUT_PROPS,
  label: {
    group: GROUPS.data,
    label: "Label",
    description: "The label to be displayed on the text field",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: true
  },
  assistiveText: {
    group: GROUPS.basic,
    label: "Assistive text",
    description: "Helper text to display below the input",
    formType: FORM_TYPES.string,
    propType: PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: false
  },
  error: {
    group: GROUPS.data,
    label: "Error",
    description: "Whether the input should display the error state",
    formType: FORM_TYPES.boolean,
    propType: PROP_TYPES.BOOLEAN,
    defaultValue: null,
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
    defaultValue: null
    /* inset */
    ,
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
    handlerPropName: "onChangeText",
    defaultValue: "textFieldValue"
  }
};
const SEED_DATA_TRIGGERS = [Triggers.OnChangeText];
export const SEED_DATA = [{
  name: "Styled Text Field",
  tag: "TextField",
  description: "A text input with a solid border or underline",
  category: COMPONENT_TYPES.input,
  preview_image_url: "{CLOUDINARY_URL}/Textfield.png",
  supports_list_render: false,
  triggers: SEED_DATA_TRIGGERS,
  props: { ...SEED_DATA_PROPS,
    type: {
      label: "Appearance",
      description: "Type of Datepicker",
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: "solid",
      options: ["solid", "underline"],
      editable: true,
      required: true,
      group: GROUPS.basic
    },
    underlineColor: createColorProp({
      label: "Underline Color",
      defaultValue: "light"
    }),
    secureTextEntry: {
      group: GROUPS.basic,
      label: "Password field",
      description: "If true, this turns the field into a password field, hiding the text",
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: null,
      editable: true,
      required: false
    }
  },
  layout: {}
}, {
  name: "Styled Text Area",
  tag: "TextField",
  description: "A text area with a solid border or underline",
  category: COMPONENT_TYPES.input,
  preview_image_url: "{CLOUDINARY_URL}/TextArea.png",
  supports_list_render: false,
  triggers: SEED_DATA_TRIGGERS,
  props: { ...SEED_DATA_PROPS,
    placeholder: { ...TEXT_INPUT_PROPS.placeholder,
      defaultValue: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    type: {
      label: "Appearance",
      description: "Type of Datepicker",
      formType: FORM_TYPES.flatArray,
      propType: PROP_TYPES.STRING,
      defaultValue: "solid",
      options: ["solid", "underline"],
      editable: true,
      required: true,
      group: GROUPS.basic
    },
    multiline: {
      label: "Multiline",
      description: "Multiline",
      group: GROUPS.uncategorized,
      formType: FORM_TYPES.boolean,
      propType: PROP_TYPES.BOOLEAN,
      defaultValue: true,
      editable: false,
      required: false
    },
    numberOfLines: createNumberProp({
      label: "Number of Lines",
      description: "Number of Lines for Multiline Field",
      defaultValue: 4,
      group: GROUPS.basic
    }),
    fieldName: createFieldNameProp({
      defaultValue: "textAreaValue"
    })
  },
  layout: {}
}];
//# sourceMappingURL=TextField.js.map