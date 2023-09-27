import React from "react";
import { View, Text, StyleSheet } from "react-native";

function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Little Lemon</Text>
      <Text style={styles.discription}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { padding: 40, fontSize: 30, color: "#EDEFEE", textAlign: "center" },
  discription: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
