import React from "react";
import { FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import Icon from "../components/Icon";
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";
import { useTheme } from "../theme/ThemeContext";

const menuItems = [
  {
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
    title: "Messages",
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
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();
  const { dark, theme, toggle } = useTheme();

  return (
    <Screen style={{ backgroundColor: theme.lightGray }}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.container}>
            <ListItem
              title={user.name}
              description={user.email}
              image={{ uri: user.photo }}
              hideChevron={true}
            />
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
            <TouchableHighlight underlayColor={theme.lightGray} onPress={() => toggle()}>
              <View style={[styles.listItemView, { backgroundColor: theme.white }]}>
                <Icon name="circle-slice-4" backgroundColor={theme.black} />
                <View style={styles.detailsContainer}>
                  <Text style={[styles.title, { color: theme.green }]} numberOfLines={1}>
                    {dark ? "Light" : "Dark"} mode
                  </Text>
                </View>
                <MaterialCommunityIcons color={theme.mediumGray} name="chevron-right" size={25} />
              </View>
            </TouchableHighlight>
            <ListItemSeparator />
            <ListItem
              title="Log out"
              IconComponent={<Icon name="logout-variant" backgroundColor={theme.logoRed} />}
              onPress={() => logOut()}
            />
          </View>
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  listItemView: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default AccountScreen;
