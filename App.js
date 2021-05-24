//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TabScreen from './src/Screens/TabScreen'
import Nav from './src/Navigation/index'

// create a component
class App extends Component {
  render() {
    return (
      <Nav />
    );
  }
}


//make this component available to the app
export default App;
