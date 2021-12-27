"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Progress Circle",
  tag: "ProgressCircle",
  description: "A circle used to show completed progress",
  category: _types.COMPONENT_TYPES.deprecated,
  preview_image_url: "{CLOUDINARY_URL}/Status_Progress.png",
  supports_list_render: false,
  props: {
    progress: {
      group: _types.GROUPS.data,
      label: "Progress",
      description: "The amount of progress to display. A number 0-1.",
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      defaultValue: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
      precision: 2,
      editable: true,
      required: true
    },
    color: {
      group: _types.GROUPS.basic,
      label: "Color",
      description: "Color for the progress shown",
      editable: true,
      defaultValue: "primary",
      required: true,
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME
    },
    unfilledColor: {
      group: _types.GROUPS.basic,
      label: "Unfilled Color",
      description: "The color of the unfilled portion of the progress bar(eg. if at 50% then this is the color of the other 50%)",
      editable: true,
      defaultValue: null,
      required: true,
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME
    },
    size: {
      group: _types.GROUPS.basic,
      label: "Size",
      description: "The size of the circle",
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      defaultValue: 100,
      min: 0,
      max: 300,
      step: 1,
      precision: 1,
      editable: true,
      required: true
    },
    showsText: {
      group: _types.GROUPS.basic,
      label: "Show Progress Text",
      description: "Shows progress in the middle of the circle",
      formType: _types.FORM_TYPES.boolean,
      propType: _types.PROP_TYPES.BOOLEAN,
      defaultValue: true,
      editable: true,
      required: true
    },
    textStyle: {
      group: _types.GROUPS.basic,
      label: "Text Style",
      description: "Text Style of the inner circle",
      editable: true,
      required: true,
      formType: _types.FORM_TYPES.typeStyle,
      propType: _types.PROP_TYPES.THEME,
      defaultValue: null
    },
    thickness: {
      group: _types.GROUPS.basic,
      label: "Thickness",
      description: "Thickness of the inner circle",
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      defaultValue: 1,
      min: 0,
      max: 15,
      step: 1,
      precision: 1,
      editable: true,
      required: true
    },
    strokeCap: {
      group: _types.GROUPS.basic,
      label: "Stroke Cap",
      description: "The style of the stroke",
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "butt",
      options: ["butt", "square", "round"],
      editable: true,
      required: true
    }
  },
  layout: {
    width: 250,
    height: 250
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=ProgressCircle.js.map