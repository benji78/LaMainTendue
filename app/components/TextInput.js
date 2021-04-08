import * as React from "react";
import { StyleSheet, TextInput as ReactTextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function TextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.mediumGray}
          style={styles.icon}
        />
      )}
      <ReactTextInput
        placeholderTextColor={defaultStyles.colors.mediumGray}
        style={[defaultStyles.text, styles.text]}
        flex={1}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.lightGray,
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
    paddingTop: 15, // for some reason the description's multiline prop removes the paddingTop from padding on ios
  },
});

export default TextInput;
