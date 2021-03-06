import { COMPONENT_TYPES, FORM_TYPES, GROUPS, PROP_TYPES } from "@draftbit/types";
export const SEED_DATA = [{
  name: "Row Single Line Body Icon",
  tag: "RowBodyIcon",
  description: "A row with left aligned body text and a right aligned icon",
  category: COMPONENT_TYPES.row,
  preview_image_url: "{CLOUDINARY_URL}/Row_SingleLine_BodyIcon.png",
  supports_list_render: true,
  props: {
    title: {
      group: GROUPS.data,
      label: "Title",
      description: "Text to display",
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "Beautiful West Coast Villa",
      editable: true,
      required: false
    },
    icon: {
      group: GROUPS.basic,
      label: "Icon",
      description: "Icon to display",
      formType: FORM_TYPES.icon,
      propType: PROP_TYPES.ASSET,
      defaultValue: null,
      editable: true,
      required: false
    }
  },
  layout: {}
}, {
  name: "Row Double Line Body Icon",
  tag: "RowBodyIcon",
  description: "A row with left aligned body text and subtitle text and a right aligned icon",
  category: COMPONENT_TYPES.row,
  preview_image_url: "{CLOUDINARY_URL}/Row_DoubleLine_BodyIcon.png",
  supports_list_render: true,
  props: {
    title: {
      group: GROUPS.data,
      label: "Title",
      description: "Text to display",
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "Beautiful West Coast Villa",
      editable: true,
      required: false
    },
    subtitle: {
      group: GROUPS.data,
      label: "Subtitle",
      description: "Subtitle text to display",
      formType: FORM_TYPES.string,
      propType: PROP_TYPES.STRING,
      defaultValue: "San Diego",
      editable: true,
      required: false
    },
    icon: {
      group: GROUPS.basic,
      label: "Icon",
      description: "Icon to display",
      formType: FORM_TYPES.icon,
      propType: PROP_TYPES.ASSET,
      defaultValue: null,
      editable: true,
      required: false
    }
  },
  layout: {}
}];
//# sourceMappingURL=RowBodyIcon.js.map