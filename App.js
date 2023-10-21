import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MenuItems from "./components/MenuItems.js";
import LoginPage from "./components/LoginPage.js";
import WelcomeScreen from "./components/WelcomeScreen.js";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        {/* <LoginPage /> */}
        {/* <MenuItems /> */}
        <WelcomeScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  footer: { backgroundColor: "#495E57" },
});
