import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Text from "../Text";
import { useTheme } from "../../theme/ThemeContext";

function ListItem({
  title,
  description,
  hideChevron = false,
  image,
  IconComponent,
  onPress,
  renderRightActions,
  style,
}) {
  const { theme } = useTheme();

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={theme.lightGray} onPress={onPress}>
        <View style={[styles.container, { backgroundColor: theme.white }, style]}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            {title && (
              <Text style={[styles.title, { color: theme.green }]} numberOfLines={1}>
                {title}
              </Text>
            )}
            {description && (
              <Text style={[styles.description, { color: theme.mediumGray }]} numberOfLines={2}>
                {description}
              </Text>
            )}
          </View>
          {!hideChevron && <MaterialCommunityIcons color={theme.mediumGray} name="chevron-right" size={25} />}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  description: {
    fontSize: 20,
  },
});

export default ListItem;
