//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabScreen from './src/Screens/TabScreen'
import Tabs from './src/Navigation'

// create a component
class App extends Component {
  render() {
    return (
      <TabScreen />
    );
  }
}


//make this component available to the app
export default App;
