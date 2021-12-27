"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  RowDirection: true
};
exports.RowDirection = void 0;

var _componentTypes = require("./component-types");

Object.keys(_componentTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _componentTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _componentTypes[key];
    }
  });
});

var _mapTypes = require("./mapTypes");

Object.keys(_mapTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _mapTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mapTypes[key];
    }
  });
});
let RowDirection;
exports.RowDirection = RowDirection;

(function (RowDirection) {
  RowDirection["Row"] = "row";
  RowDirection["RowReverse"] = "row-reverse";
})(RowDirection || (exports.RowDirection = RowDirection = {}));
//# sourceMappingURL=index.js.map