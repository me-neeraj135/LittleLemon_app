import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader.js";
import LittleLemonFooter from "./components/LittleLemonFooter.js";
import WelcomeScreen from "./components/WelcomeScreen.js";
export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          padding: 0,
          backgroundColor: "#495E57",
        }}
      >
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={{ backgroundColor: "#495E57" }}>
        <LittleLemonFooter />
      </View>
    </>
  );
}
