import React from "react";
import { StyleSheet, View } from "react-native";

import Icon from "../components/Icon";
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import { useTheme } from "../theme/ThemeContext";

function BookinsScreen() {
  const { theme } = useTheme();
  return (
    <Screen style={{ backgroundColor: theme.lightGray }}>
      <View style={styles.container}>
        <ListItem
          title="Current"
          IconComponent={<Icon name="playlist-edit" backgroundColor={theme.logoNavyBlue} />}
          onPress={() => console.log("Validated bookings")}
        />
        <ListItemSeparator />
        <ListItem
          title="Validated"
          IconComponent={<Icon name="playlist-check" backgroundColor={theme.logoLightBlue} />}
          onPress={() => console.log("Validated bookings")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});

export default BookinsScreen;
