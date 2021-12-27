import { createContext, useContext } from "react";
export let Direction;

(function (Direction) {
  Direction["Horizontal"] = "horizontal";
  Direction["Vertical"] = "vertical";
})(Direction || (Direction = {}));

export const checkboxGroupContext = /*#__PURE__*/createContext({
  onValueChange: () => {},
  values: [],
  direction: undefined
});
export function useCheckboxGroupContext() {
  return useContext(checkboxGroupContext);
}
//# sourceMappingURL=context.js.map