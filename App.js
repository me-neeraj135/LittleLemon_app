import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./components/LoginPage.js";
import WelcomeScreen from "./components/WelcomeScreen.js";
import MenuItems from "./components/MenuItems.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Tab.Navigator
            initialRouteName="Login"
            screenOptions={({ route }) => {
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === `Welcome`) {
                  iconName = focused
                    ? `ios-information-circle`
                    : `ios-information-circle-outline`;
                } else if (route.name === `Login`) {
                  iconName = `ios-list`;
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              };
              tabBarActiveTintColor: `tomato`;
              tabBarInactiveTintColor: `gray`;
            }}
          >
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
            <Tab.Screen name="Login" component={LoginPage} />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#333333" },
  footer: { backgroundColor: "#495E57" },
});
