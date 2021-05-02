import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../theme/ThemeContext";

function Button({ title, onPress, color = "orange" }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: theme[color] }]} onPress={onPress}>
      <Text style={[styles.text, { color: theme.white }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 15,
  },
  text: {
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default Button;
