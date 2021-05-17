/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const [text, setText] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [json, setJson] = React.useState("");

  async function sendData() {
    const response = await fetch("https://jsonblob.com/api/jsonBlob", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: text,
      }),
    });
    setLocation(response.headers.get("location"));
  }

  async function getJson() {
    var response = await fetch(location, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    response = await response.json();
    setJson(response);
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput value={text} onChangeText={setText} style={styles.input} />
      <Text>Input Value: {text}</Text>
      <Text>Recieved Location: {location}</Text>
      <TouchableOpacity onPress={sendData} style={styles.button}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getJson} style={styles.button}>
        <Text>Get JSON</Text>
      </TouchableOpacity>
      <Text>
        Recieved JSON:{"\n"}
        {JSON.stringify(json, null, 2)}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
  },

  input: {
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    borderWidth: 1,
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default App;
