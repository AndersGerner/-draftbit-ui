"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Card",
  tag: "Card",
  description: "A card you can customize however you'd like",
  category: _types.COMPONENT_TYPES.card,
  triggers: [_types.Triggers.OnPress],
  //TODO: when we support multiple triggers, add Triggers.OnPressIcon
  props: {
    onPress: (0, _types.createActionProp)(),
    onPressIcon: (0, _types.createActionProp)({
      handlerPropName: "onPressIcon"
    }),
    elevation: (0, _types.createElevationType)(3),
    image: (0, _types.createImageProp)(),
    title: (0, _types.createTextProp)({
      label: "Title",
      description: "Large title text",
      // defaultValue: "Title",
      defaultValue: null
    }),
    titleStyle: (0, _types.createTextStyle)({
      label: "Title Style"
    }),
    subtitle: (0, _types.createTextProp)({
      label: "Subtitle",
      description: "Text underneath the title",
      defaultValue: null // defaultValue: "Edit me in the props panel on the right",

    }),
    subtitleStyle: (0, _types.createTextStyle)({
      label: "Subtitle Style"
    }),
    description: (0, _types.createTextProp)({
      label: "Description",
      description: "Smallest text underneath subtitle",
      // defaultValue:
      // "This bottom text is optional, but shows up to make your life a little easier!",
      defaultValue: null
    }),
    descriptionStyle: (0, _types.createTextStyle)({
      label: "Description Style"
    }),
    icon: (0, _types.createIconProp)(),
    aspectRatio: (0, _types.createAspectRatioProp)({
      defaultValue: 1.5
    }),
    textCentered: (0, _types.createStaticBoolProp)({
      label: "Centered Text",
      description: "Places your title and subtitle in the center"
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Card.js.map