import React, { useEffect } from "react";
import { Image, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { LogBox } from "react-native"; // If you don't use state persistence or deep link to the screen which accepts functions in params, then the warning doesn't affect you and you can safely ignore it.
LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/core";
import { useTheme } from "../theme/ThemeContext";
import routes from "../navigation/routes";

function ImageInput({ imageUri, onChangeImage }) {
  const navigation = useNavigation();
  const { theme } = useTheme();

  useEffect(() => {
    requestPermission();
  }, []); // call this function and move on

  const requestPermission = async () => {
    // const result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library.");
    }
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else {
      // Alert.alert("Delete", "Are you sure you want to delete this image?", [
      //   { text: "Yes", onPress: () => onChangeImage(null) },
      //   { text: "No" },
      // ]);
      const onDelete = true;
      navigation.setOptions();
      navigation.navigate(routes.VIEW_IMAGE, { onChangeImage, onDelete, imageUri });
    }
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.container, { backgroundColor: theme.white }]}>
        {!imageUri && <MaterialCommunityIcons color={theme.mediumGray} name="camera" size={40} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 100,
    borderRadius: 15,
    justifyContent: "center",
    overflow: "hidden",
    width: 100,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
