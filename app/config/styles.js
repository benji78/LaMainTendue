import { Platform } from "react-native";

export default {
  // "defaultStyles.color.?"
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
