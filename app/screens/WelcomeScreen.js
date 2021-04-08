import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text, Platform } from "react-native";

import useAuth from "../auth/useAuth";
import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  const { logIn } = useAuth();

  return (
    <ImageBackground
      blurRadius={Platform.OS === "android" ? 2 : 10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-transparent.png")} />
        <Image style={styles.sousLogo} source={require("../assets/souslogo.png")} />
        {/* <Text style={styles.tagline}>La main tendue</Text> */}
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Login" color="green" onPress={() => navigation.navigate(routes.LOGIN)} />
        <Button title="Register" onPress={() => navigation.navigate(routes.REGISTER)} />
        <Button title="X" onPress={() => logIn()} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    height: 230,
    maxWidth: "60%",
    resizeMode: "contain",
  },
  sousLogo: {
    marginTop: 25,
    height: 150,
    maxWidth: "95%",
    resizeMode: "contain",
  },
  logoContainer: {
    alignItems: "center",
    flex: 1,
    top: 50,
    width: "100%",
    marginBottom: 30,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
