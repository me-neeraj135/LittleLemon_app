import React from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  useColorScheme,
  useWindowDimensions,
} from "react-native";

const logo = require("../assets/images/littleLogo.png");
function WelcomeScreen() {
  const colorScheme = useColorScheme();
  const { height, width, scale, fontScale } = useWindowDimensions();
  return (
    <ScrollView
      style={[
        styles.container,
        colorScheme === `light`
          ? { backgroundColor: `white` }
          : { backgroundColor: `#333333` },
      ]}
    >
      <Image
        style={styles.logo}
        source={logo}
        resizeMode="contain"
        accessible={true}
        accessibilityLabel={"Little Lemon Logo"}
      />
      <Text
        style={[
          styles.regularText,
          colorScheme === "light" ? { color: "#333333" } : { color: "#EDEFEE" },
        ]}
      >
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>

      <Image
        style={styles.img}
        source={require("../assets/images/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg")}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={"food picture2"}
      />
      <Text style={styles.regular}>Color Scheme:{colorScheme}</Text>
      <Text style={styles.regular}>height :{height}</Text>
      <Text style={styles.regular}>width:{width}</Text>
      <Text style={styles.regular}>scal:{scale}</Text>
      <Text style={styles.regular}>fontScale:{fontScale}</Text>
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
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
});
