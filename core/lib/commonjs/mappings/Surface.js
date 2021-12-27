"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "Surface",
  tag: "Surface",
  description: "An elevated container",
  category: _types.COMPONENT_TYPES.layout,
  layout: {
    minHeight: 40
  },
  props: {
    elevation: (0, _types.createElevationType)(0)
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=Surface.js.map