import React from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import { useTheme } from "../theme/ThemeContext";

function ViewImageScreen({ navigation, route }) {
  const onDelete = route.params.onDelete ? route.params.onDelete : false;
  const image = onDelete ? route.params.imageUri : route.params.listing.image;
  const onChangeImage = route.params.onChangeImage ? route.params.onChangeImage : null;
  const { theme } = useTheme();

  const handleDelete = () => {
    Alert.alert("Delete", "Are you sure you want to delete this image?", [
      {
        text: "Yes",
        onPress: () => {
          onChangeImage(null), navigation.goBack(null);
        },
      },
      { text: "No" },
    ]);
  };

  return (
    <Screen style={{ backgroundColor: theme.lightGray }}>
      <View style={{ paddingBottom: 50 }}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons
            name="close"
            color={theme.black}
            size={35}
            onPress={() => navigation.goBack(null)}
          />
        </View>
        {onDelete && (
          <View style={styles.deleteIcon}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              color={theme.black}
              size={35}
              onPress={() => handleDelete()}
            />
          </View>
        )}
      </View>
      <Image resizeMode="contain" style={styles.image} source={{ uri: image }} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 5,
    left: 15,
  },
  deleteIcon: {
    position: "absolute",
    top: 5,
    right: 15,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});

export default ViewImageScreen;
