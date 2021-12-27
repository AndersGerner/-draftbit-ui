"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentTypes = require("./component-types");

Object.keys(_componentTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _componentTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _componentTypes[key];
    }
  });
});
//# sourceMappingURL=index.d.js.map