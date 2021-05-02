import React, { useState } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";

import data from "../../data.json";
import { ListItem, ListItemDeleteAction, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import { useTheme } from "../theme/ThemeContext";

function MessagesScreen(props) {
  const [messages, setMessages] = useState(data.messages);
  const [refreshing, setRefreshing] = useState(false);
  const { theme } = useTheme();

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen style={{ backgroundColor: theme.lightGray }}>
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
            tintColor={theme.black}
            colors={theme.black}
            progressBackgroundColor={theme.white}
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
});

export default MessagesScreen;
