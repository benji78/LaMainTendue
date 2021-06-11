import React, { useState } from "react";
import { Button, FlatList, Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import { useTheme } from "../theme/ThemeContext";

function Picker({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      {/* same as <React.Fragment> */}
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { backgroundColor: theme.white }, { width }]}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={20} color={theme.mediumGray} style={styles.icon} />
          )}
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={[styles.placeholder, { color: theme.mediumGray }]}>{placeholder}</Text>
          )}
          <MaterialCommunityIcons name="chevron-down" size={20} color={theme.mediumGray} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen style={{ backgroundColor: theme.lightGray }}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    flex: 1,
  },
});

export default Picker;
