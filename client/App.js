import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import CanvasPlay from './screens/CanvasPlay';



export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Canvas: CanvasPlay
},{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#61FF7E'
    }
  }
})

const AppContainer = createAppContainer(AppStackNavigator);