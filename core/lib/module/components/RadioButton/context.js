import { createContext, useContext } from "react";
export let Direction;

(function (Direction) {
  Direction["Horizontal"] = "horizontal";
  Direction["Vertical"] = "vertical";
})(Direction || (Direction = {}));

export const radioButtonGroupContext = /*#__PURE__*/createContext({
  onValueChange: () => {},
  value: "",
  direction: undefined
});
export function useRadioButtonGroupContext() {
  return useContext(radioButtonGroupContext);
}
//# sourceMappingURL=context.js.map