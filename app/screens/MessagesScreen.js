import React, { useState } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";

import data from "../../data.json";
import { ListItem, ListItemDeleteAction, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import colors from "../config/colors";

function MessagesScreen(props) {
  const [messages, setMessages] = useState(data.messages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        ItemSeparatorComponent={ListItemSeparator}
        keyExtractor={(message) => message.id.toString()}
        ListHeaderComponent={<View style={styles.container}></View>}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={{ uri: item.image }}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setMessages(data.messages);
            }}
            refreshing={refreshing}
            tintColor={colors.black}
            colors={[colors.black]}
            progressBackgroundColor={colors.white}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  screen: {
    backgroundColor: colors.lightGray,
  },
});

export default MessagesScreen;
