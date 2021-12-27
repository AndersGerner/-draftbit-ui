import * as React from "react";
import Config from "../Config";
import IconButton from "../IconButton";
import { useRadioButtonGroupContext } from "./context";
const RadioButton = ({ Icon, disabled = false, color, value, selected, unselectedColor, onPress = () => { }, size = Config.radioButtonSize, selectedIcon = "MaterialIcons/radio-button-checked", unselectedIcon = "MaterialIcons/radio-button-unchecked", style, ...rest }) => {
    const { value: contextValue, onValueChange } = useRadioButtonGroupContext();
    const handlePress = () => {
        onPress && onPress();
        if (onValueChange && value) {
            onValueChange(value);
        }
    };
    const isSelected = selected || (contextValue != null && contextValue === value);
    return (React.createElement(IconButton, { Icon: Icon, icon: isSelected ? selectedIcon : unselectedIcon, color: isSelected ? color : unselectedColor, disabled: disabled, onPress: handlePress, size: size, style: style, ...rest }));
};
export default RadioButton;
