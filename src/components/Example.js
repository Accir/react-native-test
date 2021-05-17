import React from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  INCREMENT_COUNTER,
  incrementAsync,
} from "../store/counter/counterActions";

const Example = () => {
  const [text, setText] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [json, setJson] = React.useState("");
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

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
      <TouchableOpacity
        onPress={() => dispatch({ type: INCREMENT_COUNTER })}
        style={styles.button}
      >
        <Text>Increment Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(incrementAsync())}
        style={styles.button}
      >
        <Text>Increment Counter ASYNC</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },

  input: {
    padding: 10,
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

export default Example;
