import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import data from "../../data.json";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";

function ListingsScreen({ navigation, route }) {
  const [listings, setListings] = useState(data.listings);
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useAuth();

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) =>
          (route.params.filter ? item.user.name !== user.name : item.user.name === user.name) && (
            <Card
              image={{ uri: item.image }}
              title={item.title}
              price={item.price}
              style={styles.card}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )
        }
        refreshing={refreshing}
        onRefresh={() => {
          setListings(data.listings);
        }}
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
