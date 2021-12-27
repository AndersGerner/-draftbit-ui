"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = [{
  name: "Carousel",
  tag: "Carousel",
  category: _types.COMPONENT_TYPES.media,
  description: "A horizontal scrolling carousel of images",
  layout: {},
  props: {
    resizeMode: (0, _types.createResizeModeProp)(),
    dotColor: (0, _types.createColorProp)({
      label: "Dot color"
    })
  }
}];
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Carousel.js.map