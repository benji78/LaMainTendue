import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Yup from "yup";

import CategoryPickerItem from "../components/CategoryPickerItem";
import { Form, FormField, FormPicker, SubmitButton } from "../components/forms";
import FormImagePicker from "../components/forms/FormImagePicker";
import Screen from "../components/Screen";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Select at least one photo"),
  title: Yup.string().required().label("Title"),
  price: Yup.number()
    .typeError("This is not a number")
    .integer()
    .required()
    .min(0, "Negative prices are not accepted")
    .max(99, "How did you pull this one out?")
    .label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function NewListingScreen() {
  return (
    <Screen style={styles.screen}>
      <ScrollView style={styles.container}>
        <Form
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: [],
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="images" />
          <FormField maxLength={128} name="title" placeholder="Title" />
          <FormField
            keyboardType="numeric"
            maxLength={2} // maxLength: "99" sols
            name="price"
            placeholder="Price"
            width="50%"
          />

          <FormPicker
            items={categories}
            name="category"
            numberOfColumns={3}
            placeholder="Category"
            PickerItemComponent={CategoryPickerItem}
            width="75%"
          />
          <FormField
            maxLength={512}
            multiline
            name="description"
            numberOfLines={2} // only works on android
            placeholder="Description"
          />
          <SubmitButton title="Post" />
          <View style={{ paddingBottom: 20 }} />
        </Form>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGray,
  },
  container: {
    padding: 15,
  },
});
export default NewListingScreen;
