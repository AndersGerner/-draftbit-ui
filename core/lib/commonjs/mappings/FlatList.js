"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEED_DATA = void 0;

var _types = require("@draftbit/types");

const SEED_DATA = {
  name: "List",
  tag: "FlatList",
  description: "A basic List component",
  category: _types.COMPONENT_TYPES.data,
  layout: {
    flex: 1
  },
  props: {
    horizontal: (0, _types.createStaticBoolProp)({
      label: "Horizontal",
      description: "Render list horizontally"
    }),
    numColumns: (0, _types.createNumColumnsType)({
      editable: true
    })
  }
};
exports.SEED_DATA = SEED_DATA;
//# sourceMappingURL=FlatList.js.map