import React from "react";
import { useFormikContext } from "formik";

import TextInput from "../TextInput";
import ErrorMessage from "./ErrorMessage";

function FormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <TextInput
        autoCorrect={false}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;
