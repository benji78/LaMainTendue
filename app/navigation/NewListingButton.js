import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus" size={40} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    borderColor: colors.white,
    borderWidth: 8,
    borderRadius: 40,
    bottom: 18,
    height: 70,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default NewListingButton;
