import React from "react";
import { Image, ScrollView, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import routes from "../navigation/routes";
import Text from "../components/Text";
import Screen from "../components/Screen";
import { useTheme } from "../theme/ThemeContext";

function ListingDetailsScreen({ navigation, route }) {
  const listing = route.params;
  const { theme } = useTheme();

  return (
    <Screen style={{ backgroundColor: theme.lightGray }}>
      <TouchableWithoutFeedback onPress={() => navigation.navigate(routes.VIEW_IMAGE, { listing })}>
        <Image style={styles.image} source={{ uri: listing.image }} />
      </TouchableWithoutFeedback>
      <ScrollView>
        <View style={styles.detailsContainer}>
          <Text style={[styles.title, { color: theme.green }]}>{listing.title}</Text>
          <Text style={{ color: theme.darkGray }}>
            {listing.price === 0 ? "Free" : listing.price + " sols"}
          </Text>
          {listing.description && <Text style={styles.description}>{listing.description}</Text>}
          <View style={styles.userContainer}>
            <ListItem
              image={{ uri: listing.user.photo }}
              title={listing.user.name}
              description={listing.user.email}
              hideChevron={true}
              style={{ borderRadius: 30 }}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  description: {
    fontSize: 20,
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 20,
  },
});
export default ListingDetailsScreen;
