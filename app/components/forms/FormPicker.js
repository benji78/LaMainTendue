import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import Picker from "../Picker";

function FormPicker({ items, name, numberOfColumns, PickerItemComponent, placeholder, width }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <Picker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormPicker;
