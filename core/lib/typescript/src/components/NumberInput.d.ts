import React from "react";
interface Props {
    value?: number;
    defaultValue?: number;
    onChangeText: (value?: number) => void;
}
declare const NumberInput: React.FC<Props>;
export default NumberInput;
