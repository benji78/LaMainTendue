import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import data from "../../data.json";
const listings = data.listings;

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={{ uri: item.image }}
            title={item.title}
            price={item.price === 0 ? "Free" : item.price + " sols"}
            style={styles.card}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGray,
  },
  card: {
    margin: 15,
  },
});

export default ListingsScreen;
