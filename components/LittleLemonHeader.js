import React from "react";
import { View, Text } from "react-native";

function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.25, backgroundColor: "#F4CE14" }}>
      <Text
        style={{
          paddingTop: 60,
          fontSize: 25,
          color: "black",
          textAlign: "center",
        }}
      >
        Little Lemon
      </Text>
    </View>
  );
}

export default LittleLemonHeader;
