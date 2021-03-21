import React from "react";
import { Image, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

import Text from "../components/Text";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import { ScrollView } from "react-native-gesture-handler";

function ListingDetailsScreen({ navigation, route }) {
  const listing = route.params;
  return (
    <Screen style={{ backgroundcolor: colors.lightGray }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => navigation.navigate(routes.VIEW_IMAGE, listing)}>
          <Image style={styles.image} source={listing.image} />
        </TouchableWithoutFeedback>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.price}>${listing.price}</Text>
          {listing.description && <Text style={styles.description}>{listing.description}</Text>}
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/BenjaminBordes.bmp")}
              title="Benjamin Bordes"
              description="5 Listings"
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
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  description: {
    fontSize: 20,
    marginVertical: 20,
  },
  userContainer: {
    marginVertical: 20,
  },
});
export default ListingDetailsScreen;
