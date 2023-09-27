import React from "react";
import { View, Text, StyleSheet } from "react-native";

function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Little Lemon</Text>
    </View>
  );
}

export default LittleLemonHeader;

const styles = StyleSheet.create({
  container: { flex: 0.15, backgroundColor: "#F4CE14" },
  title: { paddingTop: 60, fontSize: 25, color: "black", textAlign: "center" },
});
