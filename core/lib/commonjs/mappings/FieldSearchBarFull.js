"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = [{
  name: "Search Bar",
  tag: "FieldSearchBarFull",
  description: "A search bar with accompanying search icon and clear button.",
  category: _types.COMPONENT_TYPES.input,
  preview_image_url: "{CLOUDINARY_URL}/Field_SearchBar_Full.png",
  supports_list_render: false,
  triggers: [_types.Triggers.OnChange],
  // TODO Triggers.OnSubmit for multiple triggers
  props: {
    icon: {
      group: _types.GROUPS.basic,
      label: "Icon",
      description: "Left icon to display",
      formType: _types.FORM_TYPES.icon,
      propType: _types.PROP_TYPES.ASSET,
      defaultValue: null,
      editable: true,
      required: false
    },
    placeholder: {
      group: _types.GROUPS.basic,
      label: "Placeholder",
      description: "Input placeholder text",
      formType: _types.FORM_TYPES.string,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "Search for...",
      editable: true,
      required: false
    },
    onSubmit: {
      group: _types.GROUPS.basic,
      label: "Submit action",
      description: "Action to execute on submission",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.action,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: null
    },
    fieldName: { ..._types.FIELD_NAME,
      defaultValue: "searchBarValue"
    }
  },
  layout: {}
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=FieldSearchBarFull.js.map