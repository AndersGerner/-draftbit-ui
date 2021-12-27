"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Image Background",
  tag: "ImageBackground",
  doc_link: "https://docs.expo.io/versions/latest/react-native/imagebackground/",
  code_link: "https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js",
  description: "A very simple drop-in replacement for Image that allows you to use an Image as a background.",
  category: _types.COMPONENT_TYPES.media,
  layout: {
    width: "100%",
    height: "100%"
  },
  props: {
    source: (0, _types.createImageProp)({
      defaultValue: "https://static.draftbit.com/images/placeholder-image-background.png"
    }),
    resizeMode: (0, _types.createResizeModeProp)(),
    backgroundColor: (0, _types.createColorProp)({
      label: "Background Color",
      description: "If no image is chosen render a colored background."
    }),
    backfaceVisibility: (0, _types.createTextEnumProp)({
      label: "Backface Visibility",
      description: "When animating a card, show the back face of it",
      options: ["visible", "hidden"]
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=ImageBackground.js.map