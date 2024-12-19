import React from "react";
import { View, Button, StyleSheet } from "react-native";

const SortButton = ({ onSort }) => {
  return (
    <View style={styles.container}>
      <Button title="SBN" onPress={() => onSort("name")} />
      <Button title="SBE" onPress={() => onSort("email")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
});

export default SortButton;
