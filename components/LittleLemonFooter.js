import React from "react";
import { View, Text, StyleSheet } from "react-native";

function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}

export default LittleLemonFooter;

const styles = StyleSheet.create({
  container: { backgroundColor: "#F4CE14" },
  footerText: { textAlign: "center", fontSize: 18, color: "black" },
});
