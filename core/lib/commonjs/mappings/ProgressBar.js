"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = [{
  name: "Progress Bar",
  tag: "ProgressBar",
  description: "A horizontal bar used to show completed progress",
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
      label: "Progress Color",
      description: "Custom color for the progress shown",
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME,
      defaultValue: null,
      editable: true,
      required: true
    },
    unfilledColor: {
      group: _types.GROUPS.basic,
      label: "Unfilled Color",
      description: "The color of the unfilled portion of the progress bar(eg. if at 50% then this is the color of the other 50%)",
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME,
      defaultValue: null,
      editable: true,
      required: true
    },
    borderRadius: {
      group: _types.GROUPS.basic,
      label: "Border Radius",
      description: "The border radius of the bar",
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      defaultValue: 10,
      min: 0,
      max: 100,
      step: 1,
      precision: 1,
      editable: true,
      required: true
    },
    borderWidth: {
      group: _types.GROUPS.basic,
      label: "Border Width",
      description: "The width of the border that surrounds the bar.",
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
    borderColor: {
      group: _types.GROUPS.basic,
      label: "Border Color",
      description: "Custom color for border of the entire bar",
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME,
      defaultValue: null,
      editable: true,
      required: true
    },
    animationType: {
      group: _types.GROUPS.basic,
      label: "Animation Type",
      description: "The type of animation that occurs when the bar is filled(Default is Spring)",
      formType: _types.FORM_TYPES.flatArray,
      propType: _types.PROP_TYPES.STRING,
      defaultValue: "spring",
      options: ["decay", "timing", "spring"],
      editable: true,
      required: true
    }
  },
  layout: {
    width: 200,
    height: 20
  }
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=ProgressBar.js.map