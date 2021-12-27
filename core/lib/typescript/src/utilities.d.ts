import { StyleProp, TextStyle } from "react-native";
export declare function extractStyles(style: StyleProp<any>): {
    viewStyles: any;
    textStyles: TextStyle;
};
/**
 * Merges a style object on top of another style object. In React Native,
 * keys with undefined values in a style object will still override styles
 * that appear earlier in a sequence. This avoids that problem.
 *
 * This lets us avoid the `...(something ? { something } : {})` pattern.
 * There doesn't seem to be a better way to do this. These all seem to not
 * work (i.e. they all result in `{ color: undefined }`:
 * `const mergedStyles = [{ color: "red" }, { color: undefined }]`
 * `const mergedStyles = StyleSheet.compose({ color: "red" }, { color: undefined })`
 * `const mergedStyles = StyleSheet.flatten([{ color: "red" }, { color: undefined }])`
 */
export declare function applyStyles(baseStyles: Array<StyleProp<any>>, stylesToApply: StyleProp<any> | undefined): any;
