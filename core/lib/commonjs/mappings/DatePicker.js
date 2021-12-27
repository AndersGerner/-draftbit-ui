"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA_PROPS = {
  label: {
    label: "Label",
    description: "The label to be displayed on the picker",
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: "Date",
    editable: true,
    required: true,
    group: _types.GROUPS.data
  },
  mode: {
    label: "Mode",
    description: "Choose between date, time and datetime",
    defaultValue: "date",
    editable: true,
    required: true,
    formType: _types.FORM_TYPES.flatArray,
    propType: _types.PROP_TYPES.STRING,
    options: ["date", "time", "datetime"],
    group: _types.GROUPS.basic
  },
  assistiveText: {
    label: "Assistive text",
    description: "Helper text to display below the picker",
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: false,
    group: _types.GROUPS.basic
  },
  locale: {
    label: "Locale",
    description: "Locale for the datepicker. Must be a valid Locale",
    formType: _types.FORM_TYPES.string,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: false,
    group: _types.GROUPS.basic
  },
  minuteInterval: {
    label: "Minute Interval",
    description: "The interval at which minutes can be selected",
    formType: _types.FORM_TYPES.flatArray,
    propType: _types.PROP_TYPES.NUMBER,
    options: [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30],
    defaultValue: null,
    editable: true,
    required: false,
    group: _types.GROUPS.basic
  },
  timeZoneOffsetInMinutes: {
    label: "Time zone offset",
    description: "By default, the datepicker uses the device's timezone. This will allow you to offset it",
    formType: _types.FORM_TYPES.number,
    propType: _types.PROP_TYPES.NUMBER,
    defaultValue: null,
    editable: true,
    required: false,
    group: _types.GROUPS.basic
  },
  disabled: {
    label: "Disabled",
    description: "Whether the picker should be disabled. Will prevent selection and show a greyed out state.",
    formType: _types.FORM_TYPES.boolean,
    propType: _types.PROP_TYPES.BOOLEAN,
    defaultValue: false,
    editable: true,
    required: false,
    group: _types.GROUPS.basic
  },
  error: {
    label: "Error",
    description: "Whether the picker should display the error state",
    formType: _types.FORM_TYPES.boolean,
    propType: _types.PROP_TYPES.BOOLEAN,
    defaultValue: false,
    editable: true,
    required: false,
    group: _types.GROUPS.data
  },
  leftIconName: {
    label: "Left icon name",
    description: "The icon to display on the left",
    formType: _types.FORM_TYPES.icon,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: false,
    group: _types.GROUPS.basic
  },
  leftIconMode: {
    label: "Left icon mode",
    description: "The mode of the icon to display on the left. 'inset' or 'outset'.",
    formType: _types.FORM_TYPES.flatArray,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: "inset",
    options: ["inset", "outset"],
    editable: true,
    required: true,
    group: _types.GROUPS.basic
  },
  rightIconName: {
    label: "Right icon name",
    description: "The icon to display on the right",
    formType: _types.FORM_TYPES.icon,
    propType: _types.PROP_TYPES.STRING,
    defaultValue: null,
    editable: true,
    required: false,
    group: _types.GROUPS.basic
  },
  fieldName: { ..._types.FIELD_NAME,
    handlerPropName: "onDateChange",
    valuePropName: "date",
    defaultValue: "date"
  }
};
const SEED_DATA = [{
  name: "Date Picker",
  tag: "DatePicker",
  description: "A component used to select a date from a visual calendar",
  category: _types.COMPONENT_TYPES.input,
  layout: null,
  triggers: [_types.Triggers.OnDateChange],
  props: { ...SEED_DATA_PROPS,
    type: {
      label: "Appearance",
      description: "Type of Datepicker",
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "solid",
      options: ["solid", "underline"],
      editable: true,
      required: true,
      group: _types.GROUPS.basic
    }
  }
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=DatePicker.js.map