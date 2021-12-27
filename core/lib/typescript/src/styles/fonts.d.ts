import { PlatformOSType } from "react-native";
import type { Fonts } from "@draftbit/types";
export default function configureFonts(config?: {
    [platform in PlatformOSType | "default"]?: Fonts;
}): Fonts;
