"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Web View",
  tag: "WebView",
  description: "Render web content inside a view",
  category: _types.COMPONENT_TYPES.media,
  layout: {
    flex: 1
  },
  props: {
    source: (0, _types.createSourceProp)({
      defaultValue: "https://reactnative.dev"
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=WebView.js.map