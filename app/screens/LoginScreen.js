import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import { useTheme } from "../theme/ThemeContext";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email("This is not a valid email").label("Email"),
  password: Yup.string().required().min(8).label("Password"),
});

function LoginScreen(props) {
  const { theme } = useTheme();

  return (
    <Screen style={[styles.container, { backgroundColor: theme.lightGray }]}>
      <Image style={styles.logo} source={require("../assets/logo-transparent.png")} />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCapitalize="none"
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          icon="lock"
          maxLength={128}
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 20,
  },
});

export default LoginScreen;
