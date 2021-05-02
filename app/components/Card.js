import React from "react";
import { View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

import { useTheme } from "../theme/ThemeContext";
import Text from "./Text";

function Card({ image, title, price, onPress, style }) {
  const { theme } = useTheme();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, { backgroundColor: theme.white }, style]}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={[styles.title, { color: theme.green }]} numberOfLines={1}>
            {title}
          </Text>
          <Text style={theme.darkGray} numberOfLines={2}>
            {price === 0 ? "Free" : price + " sols"}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Card;
