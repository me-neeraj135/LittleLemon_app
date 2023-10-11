import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

function FeedbackForm() {
  const [firstName, onChangeFirstName] = useState("");
  const [lastName, onChangeLastName] = useState("");
  const [phoneNumber, onChangePhoneNumber] = useState("");
  const [message, onChangeMessage] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "Android" ? "padding" : "height"}
    >
      <ScrollView keyboardDismissMode="on-drag">
        <Text style={styles.headingSection}>
          How was your visit to Little Lemon?
        </Text>
        <Text style={styles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          placeholder="First Name"
          onChangeText={onChangeFirstName}
        ></TextInput>
        <TextInput
          style={styles.input}
          value={lastName}
          placeholder="Last Name"
          onChangeText={onChangeLastName}
        ></TextInput>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          placeholder="Phone Number"
          onChageText={onChangePhoneNumber}
          keyboardType="numeric"
        ></TextInput>
        <TextInput
          style={styles.messageInput}
          value={message}
          placeholder="Message"
          onChangeText={onChangeMessage}
        ></TextInput>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default FeedbackForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "pink",
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 2,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
  infoSection: {
    fontSize: 20,
    padding: 20,
    marginVertical: 5,
    color: "#EDEFEE",
    textAlign: "center",
    // backgroundColor: "#495E57",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#EDEFEE",
    backgroundColor: "white",
  },
  messageInput: {
    height: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    color: "black",
    backgroundColor: "white",
  },
});
