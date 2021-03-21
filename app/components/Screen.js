import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar style="dark" />
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
