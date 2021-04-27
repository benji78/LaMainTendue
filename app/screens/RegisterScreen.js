import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  number: Yup.string()
    .required()
    .label("Phone number")
    .matches(/^0[1-9]\d{8}$/, "This isn't a french phone number."),
  email: Yup.string()
    .required()
    .email()
    .label("Email")
    .matches(/^[\.\d\w]{6,}@eleve\.isep\.fr$/, "This is not an ISEP email address"),
  password: Yup.string()
    .required()
    .min(8)
    .label("Password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*?_.-])(.){8,}$/,
      "Must Contain at least one UPPERCASE, one lowercase, 1 number and one speci@l character."
    ),
});

function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", number: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField autoCompleteType="name" icon="account" name="name" placeholder="Name" />
        <FormField
          autoCompleteType="tel"
          icon="phone"
          keyboardType="numeric"
          maxLength={10}
          name="number"
          placeholder="Phone number"
          textContentType="telephoneNumber"
        />
        <FormField
          autoCompleteType="email"
          autoCapitalize="none"
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCompleteType="password"
          autoCapitalize="none"
          icon="lock"
          name="password"
          maxLength={512}
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.lightGray,
  },
});

export default RegisterScreen;
