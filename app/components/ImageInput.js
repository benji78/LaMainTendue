import React, { useEffect } from "react";
import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeImage }) {
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
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("error reading an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons colro={colors.mediumGray} name="camera" size={40} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.lightGray,
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