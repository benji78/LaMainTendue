import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Cours de cuisine",
    price: 100,
    image: require("../assets/CoursCuisine.bmp"),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est enim, de quo quaerimus.\nHoc non est positum in nostra actione. Quia dolori non voluptas contraria est, sed doloris privatio. Eam tum adesse, cum dolor omnis absit; Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus.\nDuo Reges: constructio interrete.\n In quo etsi est magnus, tamen nova pleraque et perpauca de moribus. An potest cupiditas finiri? Ex eorum enim scriptis et institutis cum omnis doctrina liberalis, omnis historia. Nam si amitti vita beata potest, beata esse non potest.",
  },
  {
    id: 2,
    title: "Lasagnes pour une personne",
    price: 550,
    image: require("../assets/lasagnes.bmp"),
  },
  {
    id: 3,
    title: "Plat de spaghetti",
    price: 0,
    image: require("../assets/spaghetti.bmp"),
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
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
