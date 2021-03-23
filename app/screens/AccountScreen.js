import React from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import routes from "../navigation/routes";

const menuItems = [
  {
    // circle-slice-4 for dark mode
    title: "Bookings",
    icon: { name: "format-list-checks", backgroundColor: colors.logoNavyBlue },
    targetScreen: "Account",
  },
  {
    title: "My listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.logoLightBlue },
    targetScreen: "My listings",
  },
  {
    title: "My messages",
    icon: { name: "email", backgroundColor: colors.logoGreen },
    targetScreen: routes.MESSAGES,
  },
  {
    title: "Entr'aide",
    icon: { name: "hand-heart", backgroundColor: colors.logoLime },
    targetScreen: "Account",
  },
  {
    title: "Help center",
    icon: { name: "lifebuoy", backgroundColor: colors.orange },
    targetScreen: "Account",
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.container}>
            <ListItem
              title="Benjamin Bordes"
              description="bbordes@juniorisep.com"
              image={require("../assets/BenjaminBordes.bmp")}
            />
          </View>
        }
        data={menuItems}
        keyExtractor={(menuItems) => menuItems.title}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            IconComponent={
              <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />
            }
            onPress={() => navigation.navigate(item.targetScreen)}
          />
        )}
        ListFooterComponent={
          <View style={styles.container}>
            <ListItem
              title="Log out"
              IconComponent={<Icon name="logout-variant" backgroundColor={colors.logoRed} />}
              onPress={() => console.log("logout")}
            />
          </View>
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightGray,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
