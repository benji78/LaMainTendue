import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useTheme } from "../../theme/ThemeContext";

function NewListingButton({ onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{ backgroundColor: theme.white }}>
        <View style={[styles.container, { backgroundColor: theme.orange, borderColor: theme.white }]}>
          <MaterialCommunityIcons name="plus" size={40} color={theme.white} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
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
