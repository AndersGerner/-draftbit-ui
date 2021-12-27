"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Text Area",
  tag: "TextInput",
  description: "An input field that allows for multiple lines.",
  category: _types.COMPONENT_TYPES.input,
  layout: {
    flex: 1
  },
  triggers: [_types.Triggers.OnChangeText],
  props: { ..._types.TEXT_INPUT_PROPS,
    placeholder: { ..._types.TEXT_INPUT_PROPS.placeholder,
      defaultValue: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    multiline: {
      label: "Multiline",
      description: "Multiline",
      group: _types.GROUPS.uncategorized,
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      defaultValue: true,
      editable: true,
      required: false
    },
    numberOfLines: {
      label: "Number Of Lines",
      description: "Number Of Lines",
      group: _types.GROUPS.basic,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      defaultValue: 4,
      editable: true,
      required: false
    },
    fieldName: { ..._types.FIELD_NAME,
      defaultValue: "textInputValue",
      handlerPropName: "onChangeText"
    }
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=TextArea.js.map