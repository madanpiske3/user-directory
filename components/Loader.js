import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loader = () => (
  <View style={styles.loader}>
    <ActivityIndicator size="large" color="green" />
  </View>
);

const styles = StyleSheet.create({
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Loader;
