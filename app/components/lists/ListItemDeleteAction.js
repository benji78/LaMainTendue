import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../../theme/ThemeContext";

function ListItemDeleteAction({ onPress }) {
  const { theme } = useTheme();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { backgroundColor: theme.danger }]}>
        <MaterialCommunityIcons name="trash-can" size={35} color={theme.white} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
