import React, { useState } from "react";
import { FlatList } from "react-native";

import { ListItem, ListItemDeleteAction, ListItemSeparator } from "../components/lists";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id est enim, de quo quaerimus. Hoc non est positum in nostra actione. Quia dolori non voluptas contraria est, sed doloris privatio. Eam tum adesse, cum dolor omnis absit; Itaque nostrum est-quod nostrum dico, artis est-ad ea principia, quae accepimus. Duo Reges: constructio interrete. In quo etsi est magnus, tamen nova pleraque et perpauca de moribus. An potest cupiditas finiri? Ex eorum enim scriptis et institutis cum omnis doctrina liberalis, omnis historia. Nam si amitti vita beata potest, beata esse non potest.",
    description:
      "Potius ergo illa dicantur: turpe esse, viri non esse debilitari dolore, frangi, succumbere. Aliter enim nosmet ipsos nosse non possumus. Traditur, inquit, ab Epicuro ratio neglegendi doloris. Tria genera bonorum; Nam his libris eum malo quam reliquo ornatu villae delectari. Collatio igitur ista te nihil iuvat. Parvi enim primo ortu sic iacent, tamquam omnino sine animo sint. Hos contra singulos dici est melius.",
    image: require("../assets/BenjaminBordes.bmp"),
  },
  {
    id: 2,
    title: "Title2",
    description: "Description2",
    image: require("../assets/BenjaminBordes.bmp"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id != message.id));
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
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
