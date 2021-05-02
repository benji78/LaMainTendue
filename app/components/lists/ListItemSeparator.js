import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "../../theme/ThemeContext";

function ListItemSeparator(props) {
  const { theme } = useTheme();

  return <View style={[styles.separator, { backgroundColor: theme.lightGray }]} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 2,
  },
});

export default ListItemSeparator;
