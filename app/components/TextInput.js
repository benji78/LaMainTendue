import * as React from "react";
import { StyleSheet, TextInput as ReactTextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import { useTheme } from "../theme/ThemeContext";

function TextInput({ icon, width = "100%", ...otherProps }) {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { width, backgroundColor: theme.white }]}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={theme.mediumGray} style={styles.icon} />}
      <ReactTextInput
        placeholderTextColor={theme.mediumGray}
        style={[defaultStyles.text, { color: theme.darkGray }, styles.text]}
        flex={1}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
  },
  icon: {
    marginLeft: 15,
    alignSelf: "center",
  },
  text: {
    padding: 15,
    paddingTop: 15, // somehow the description's multiline prop removes the paddingTop from padding on ios
  },
});

export default TextInput;
