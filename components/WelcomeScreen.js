import React from "react";
import { View, Text } from "react-native";

function WelcomeScreen() {
  return (
    <View style={{}}>
      <Text
        style={{
          fontSize: 40,
          color: "white",
          textAlign: "center",
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >
        Welcome to Little Lemon
      </Text>
      <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}

export default WelcomeScreen;
