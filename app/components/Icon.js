import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "../theme/ThemeContext";

function Icon({ name, size = 40, backgroundColor }) {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2, backgroundColor }]}>
      <MaterialCommunityIcons name={name} color={theme.white} size={size / 2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Icon;
