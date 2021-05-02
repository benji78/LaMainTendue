import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { useTheme } from "../theme/ThemeContext";

function Screen({ children, style }) {
  const { dark } = useTheme();
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar style={dark ? "light" : "dark"} />
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "white",
  },
  view: {
    flex: 1,
  },
});

export default Screen;
