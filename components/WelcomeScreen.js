import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

const logo = require("../assets/images/littleLogo.png");
function WelcomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={logo}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Image
        style={styles.img}
        source={require("../assets/images/brooke-lark-HjWzkqW1dgI-unsplash.jpg")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"food picture1"}
      />
      <Image
        style={styles.img}
        source={require("../assets/images/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"food picture2"}
      />
      <Image
        style={styles.img}
        source={require("../assets/images/mekht-GuvimT4IFok-unsplash.jpg")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"food picture3"}
      />
      <Image
        style={styles.img}
        source={require("../assets/images/wikisleep-app-qvIrI4ueqzY-unsplash.jpg")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"food picture4"}
      />
    </ScrollView>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  logo: {
    height: 100,
    width: 300,
    marginTop: 30,
  },
  title: { padding: 20, fontSize: 22, textAlign: "center", fontWeight: `600` },
  img: {
    height: 200,
    width: `100%`,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
  },
  bgImg: {
    flex: 1,
    justifyContent: `center`,
  },
});
