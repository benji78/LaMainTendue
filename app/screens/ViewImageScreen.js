import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import { useTheme } from "../theme/ThemeContext";

function ViewImageScreen({ navigation, route, onDelete }) {
  const listing = route.params;
  const { theme } = useTheme();

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
            <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
          </View>
        )}
      </View>
      <Image resizeMode="contain" style={styles.image} source={{ uri: listing.image }} />
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
