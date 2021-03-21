import { Platform } from "react-native";

import colors from "./colors";

export default {
  colors, // "defaultStyles.color.?"
  text: {
    color: colors.darkGray,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
