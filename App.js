import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./components/LoginPage.js";
import WelcomeScreen from "./components/WelcomeScreen.js";
import MenuItems from "./components/MenuItems.js";
const logo = require("./assets/images/littleLogo.png");

function logoTitle() {
  return (
    <Image
      source={logo}
      style={{
        height: 30,
        width: 300,
        resizeMode: `contain`,
        alignSelf: `center`,
      }}
    />
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="WelcomeScreen"
          screenOptions={{
            headerStyle: { backgroundColor: "#333333" },
            headerTintColor: `#fff`,
            headerTitleStyle: {
              fontWeight: `bold`,
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={WelcomeScreen}
            options={{
              title: `Home`,
            }}
          />
          <Stack.Screen
            name="Menu"
            component={MenuItems}
            options={{ title: `Menu` }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  footer: { backgroundColor: "#495E57" },
});
