import React, { Component } from 'react'
import AppNavigator from './src/navigations/AppNavigator';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
      <AppNavigator />
  );
}
export default App;
