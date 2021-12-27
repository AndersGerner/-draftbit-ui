"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Image",
  tag: "Image",
  description: "A basic Image Component",
  category: _types.COMPONENT_TYPES.media,
  layout: {
    width: 250,
    height: 250
  },
  props: {
    source: (0, _types.createImageProp)(),
    resizeMode: (0, _types.createResizeModeProp)()
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Image.js.map