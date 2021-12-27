import { createContext, useContext } from "react";
export var Direction;
(function (Direction) {
    Direction["Horizontal"] = "horizontal";
    Direction["Vertical"] = "vertical";
})(Direction || (Direction = {}));
export const checkboxGroupContext = createContext({
    onValueChange: () => { },
    values: [],
    direction: undefined,
});
export function useCheckboxGroupContext() {
    return useContext(checkboxGroupContext);
}
