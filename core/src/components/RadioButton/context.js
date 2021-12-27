import { createContext, useContext } from "react";
export var Direction;
(function (Direction) {
    Direction["Horizontal"] = "horizontal";
    Direction["Vertical"] = "vertical";
})(Direction || (Direction = {}));
export const radioButtonGroupContext = createContext({
    onValueChange: () => { },
    value: "",
    direction: undefined,
});
export function useRadioButtonGroupContext() {
    return useContext(radioButtonGroupContext);
}
