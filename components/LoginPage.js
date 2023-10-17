import React, { useState } from "react";
import { ScrollView, Text, TextInput, StyleSheet } from "react-native";

function LoginPage() {
  const [email, onChangeEmail] = useState();
  const [password, onChangePassword] = useState();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
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
    </ScrollView>
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
});
