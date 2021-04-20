import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './components/Home';
import Detail from './components/detail';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Detail:{screen: Detail}
})

const App = createAppContainer(AppNavigator);

export default App;
