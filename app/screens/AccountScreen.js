import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    // circle-slice-4 for dark mode
    title: "Bookings",
    icon: { name: "format-list-checks", backgroundColor: colors.logoNavyBlue },
    targetScreen: "Bookings",
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
  },
  {
    title: "Dark mode",
    icon: { name: "circle-slice-4", backgroundColor: colors.black },
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.container}>
            <ListItem title={user.name} description={user.email} image={{ uri: user.photo }} />
          </View>
        }
        data={menuItems}
        keyExtractor={(menuItems) => menuItems.title}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
            onPress={() => {
              item.targetScreen && navigation.navigate(item.targetScreen);
            }}
          />
        )}
        ListFooterComponent={
          <View style={styles.container}>
            <ListItem
              title="Log out"
              IconComponent={<Icon name="logout-variant" backgroundColor={colors.logoRed} />}
              onPress={() => logOut()}
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
