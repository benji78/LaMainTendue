import React, { useState } from "react";
import { FlatList, RefreshControl, StyleSheet } from "react-native";

import Card from "../components/Card";
import data from "../../data.json";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useAuth from "../auth/useAuth";
import { useTheme } from "../theme/ThemeContext";

function ListingsScreen({ navigation, route }) {
  const [listings, setListings] = useState(data.listings);
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useAuth();
  const { theme } = useTheme();

  return (
    <Screen style={{ backgroundColor: theme.lightGray }}>
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
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setListings(data.listings);
            }}
            refreshing={refreshing}
            tintColor={theme.black}
          colors={[theme.black]}
            progressBackgroundColor={theme.white}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 15,
  },
});

export default ListingsScreen;
