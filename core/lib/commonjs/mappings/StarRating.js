"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Star Rating",
  tag: "StarRating",
  description: "A star rating component",
  category: _types.COMPONENT_TYPES.button,
  triggers: [_types.Triggers.OnPress],
  props: {
    starSize: (0, _types.createStaticNumberProp)({
      label: "Star size",
      description: "Size of each individual star",
      defaultValue: 16,
      min: 8,
      max: 36,
      step: 1
    }),
    fieldName: (0, _types.createFieldNameProp)({
      defaultValue: "ratingValue",
      // this is the name of the variable declared on the screen in Draftbit
      handlerPropName: "onPress",
      // the change handler prop in this component
      valuePropName: "rating" // the value prop in this component

    }),
    maxStars: (0, _types.createStaticNumberProp)({
      label: "Max stars",
      description: "The max number of stars",
      defaultValue: 5,
      min: 0,
      max: 10,
      step: 1
    }),
    rating: (0, _types.createStaticNumberProp)({
      group: _types.GROUPS.data,
      label: "Rating"
    }),
    isEditable: (0, _types.createStaticBoolProp)({
      label: "Editable"
    }),
    activeColor: (0, _types.createColorProp)({
      label: "Active Color",
      defaultValue: "primary"
    }),
    inactiveColor: (0, _types.createColorProp)({
      label: "Inactive Color",
      defaultValue: "divider"
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=StarRating.js.map