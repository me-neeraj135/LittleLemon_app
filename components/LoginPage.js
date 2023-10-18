import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  View,
} from "react-native";

import LittleLemonHeader from "./LittleLemonHeader.js";
import LittleLemonFooter from "./LittleLemonFooter.js";
function LoginPage() {
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <>
      <ScrollView style={styles.container}>
        <LittleLemonHeader />
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>

        {loggedIn ? (
          <Text style={styles.loginMsg}>You are Logged in !</Text>
        ) : (
          <>
            <Text style={styles.regularText}>Login to Continue</Text>

            <TextInput
              style={styles.input}
              minLength={5}
              maxLength={20}
              value={email}
              placeholder="email"
              keyboardType={`email-address`}
              onChageText={onChangeEmail}
            />

            <TextInput
              style={styles.input}
              minLength={5}
              max={16}
              secureTextEntry={true}
              placeholder="password"
              onChageText={onChangePassword}
              value={password}
              keyboardType={`default`}
            />

            <Pressable
              style={styles.loginWrapper}
              onPress={() => {
                setLoggedIn(!loggedIn);
              }}
            >
              <Text style={styles.button}>Login</Text>
            </Pressable>
          </>
        )}
      </ScrollView>
    </>
  );
}

export default LoginPage;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#352F44" },
  headerText: {
    fontSize: 35,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  regularText: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    margin: 20,
    padding: 10,
    borderColor: "#EDEFEE",
    backgroundColor: "white",
  },
  loginWrapper: {
    height: 50,
    marginHorizontal: 80,
    backgroundColor: "#F4CE14",
    borderRadius: 50,
  },
  button: {
    fontSize: 30,
    textAlign: `center`,
  },
  loginMsg: {
    fontSize: 34,
    textAlign: `center`,
    color: `white`,
  },
});
