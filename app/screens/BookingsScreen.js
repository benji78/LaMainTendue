import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../config/colors";
import Icon from "../components/Icon";
import { ListItem, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";

function BookinsScreen() {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Current"
          IconComponent={<Icon name="playlist-edit" backgroundColor={colors.logoNavyBlue} />}
          onPress={() => console.log()}
        />
        <ListItemSeparator />
        <ListItem
          title="Validated"
          IconComponent={<Icon name="playlist-check" backgroundColor={colors.logoLightBlue} />}
          onPress={() => console.log()}
        />
      </View>
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

export default BookinsScreen;
