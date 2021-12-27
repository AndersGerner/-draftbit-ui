"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Progress Indicator",
  tag: "ProgressIndicator",
  description: "A component used to show current Step in a process",
  category: _types.COMPONENT_TYPES.deprecated,
  preview_image_url: "{CLOUDINARY_URL}/Control_Slider.png",
  supports_list_render: false,
  layout: {},
  props: {
    numberOfSteps: {
      group: _types.GROUPS.data,
      label: "Number of Steps",
      description: "The border radius for the thumb",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      min: 0,
      max: 10,
      step: 1,
      precision: 0,
      defaultValue: 5
    },
    currentStep: {
      group: _types.GROUPS.data,
      label: "Current Step",
      description: "The step that the user is on",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      min: 0,
      max: 10,
      step: 1,
      precision: 0,
      defaultValue: 5
    },
    stepIndicatorSize: {
      group: _types.GROUPS.basic,
      label: "Step Size",
      description: "The size of the step circle",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      min: 10,
      max: 100,
      step: 5,
      precision: 0,
      defaultValue: 25
    },
    stepIndicatorLabelFontSize: {
      group: _types.GROUPS.basic,
      label: "Step Font Size",
      description: "The font size of the step number",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      min: 6,
      max: 36,
      step: 1,
      precision: 0,
      defaultValue: 15
    },
    currentStepIndicatorLabelFontSize: {
      group: _types.GROUPS.basic,
      label: "Current Step Font Size",
      description: "The font size of the current step number",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      min: 6,
      max: 36,
      step: 1,
      precision: 0,
      defaultValue: 15
    },
    unfinishedColor: {
      group: _types.GROUPS.basic,
      label: "Unfinished Color",
      description: "The color of the step and divider when the step is either not the current step or not finished",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME,
      defaultValue: null
    },
    finishedColor: {
      group: _types.GROUPS.basic,
      label: "Finished Color",
      description: "The color of the step and divider when the step is the current step or finished",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME,
      defaultValue: null
    },
    stepNumberUnfinishedColor: {
      group: _types.GROUPS.basic,
      label: "Unfinished Number Color",
      description: "The color of the number within the step when unfinished",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME,
      defaultValue: null
    },
    stepNumberFinishedColor: {
      group: _types.GROUPS.basic,
      label: "Finished Number Color",
      description: "The color of the number within the step when finished",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME,
      defaultValue: null
    },
    stepIndicatorCurrentColor: {
      group: _types.GROUPS.basic,
      label: "Current Step Color",
      description: "The color of current step circle",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME,
      defaultValue: null
    },
    stepIndicatorLabelCurrentColor: {
      group: _types.GROUPS.basic,
      label: "Current Step Number Color",
      description: "The color of current number within the step circle",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME,
      defaultValue: null
    },
    stepStrokeCurrentColor: {
      group: _types.GROUPS.basic,
      label: "Current Step Border Color",
      description: "The color of current border color of the step",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.color,
      propType: _types.PROP_TYPES.THEME,
      defaultValue: null
    },
    currentStepStrokeWidth: {
      group: _types.GROUPS.basic,
      label: "Current Step Border Width",
      description: "The width of the border for the current step",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      min: 1,
      max: 20,
      step: 1,
      precision: 0,
      defaultValue: 0
    },
    currentStepIndicatorSize: {
      group: _types.GROUPS.basic,
      label: "Current Step Size",
      description: "The size of the current step circle",
      editable: true,
      required: false,
      formType: _types.FORM_TYPES.number,
      propType: _types.PROP_TYPES.NUMBER,
      min: 10,
      max: 100,
      step: 5,
      precision: 0,
      defaultValue: null
    }
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=ProgressIndicator.js.map