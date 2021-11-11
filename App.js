
import 'react-native-gesture-handler';
import React from 'react';
import {LogBox } from 'react-native';
import RouteStack from './src/navigations/Route';
// create a component
const App = () => {
  LogBox.ignoreAllLogs();
  return (
      <RouteStack />
  );
};
export default App;
