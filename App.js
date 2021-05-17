/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import store from "./src/store/store";
import Example from "./src/components/Example";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Example />
    </Provider>
  );
};

export default App;
