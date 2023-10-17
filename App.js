import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import MenuItems from "./components/MenuItems.js";
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <MenuItems />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#495E57" },
  footer: { backgroundColor: "#495E57" },
});
