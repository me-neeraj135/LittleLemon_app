import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader.js";
import LittleLemonFooter from "./components/LittleLemonFooter.js";
import WelcomeScreen from "./components/WelcomeScreen.js";
import MenuItems from "./components/MenuItems.js";
import FeedbackForm from "./components/FeedbackForm.js";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <WelcomeScreen /> */}
        {/* <MenuItems /> */}
        <FeedbackForm />
      </View>
      <View style={styles.footer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#495E57" },
  footer: { backgroundColor: "#495E57" },
});
