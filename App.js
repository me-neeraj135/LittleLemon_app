import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "./components/LittleLemonHeader.js";
import Footer from "./components/LittleLemonFooter.js";
import LoginPage from "./components/LoginPage.js";
import WelcomeScreen from "./components/WelcomeScreen.js";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Header />
          <Drawer.Navigator initialRouteName="Login">
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="Login" component={LoginPage} />
          </Drawer.Navigator>
        </View>
        <View>
          <Footer />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#333333" },
  footer: { backgroundColor: "#495E57" },
});
