// @ts-nocheck
import color from "color";
import DefaultTheme from "./DefaultTheme";
const white = "#FFF";
const black = "#000";
const pinkA100 = "#ff80ab";
const DarkTheme = { ...DefaultTheme,
  dark: true,
  mode: "adaptive",
  colors: { ...DefaultTheme.colors,
    primary: "#BB86FC",
    background: "#121212",
    surface: "#121212",
    error: "#CF6679",
    onBackground: "#FFFFFF",
    onSurface: "#FFFFFF",
    text: white,
    disabled: color(white).alpha(0.38).rgb().string(),
    placeholder: color(white).alpha(0.54).rgb().string(),
    backdrop: color(black).alpha(0.5).rgb().string(),
    notification: pinkA100
  }
};
export default DarkTheme;
//# sourceMappingURL=DarkTheme.js.map