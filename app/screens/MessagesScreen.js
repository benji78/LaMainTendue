import React, { useState } from "react";
import { FlatList } from "react-native";

import { ListItem, ListItemDeleteAction, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";
import data from "../../data.json";

function MessagesScreen(props) {
  const [messages, setMessages] = useState(data.messages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            description={item.description}
            image={{ uri: item.image }}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(data.messages);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
