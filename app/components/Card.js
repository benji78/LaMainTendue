import React from "react";
import { View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

import colors from "../config/colors";
import Text from "./Text";

function Card({ image, title, price, onPress, style }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, style]}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.price} numberOfLines={2}>
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
    backgroundColor: colors.white,
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
  price: {
    color: colors.darkgray,
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    color: colors.green,
    fontWeight: "bold",
  },
});

export default Card;
