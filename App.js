import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import store from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider>
      <AppNavigator />;
    </Provider>
  );
}

const styles = StyleSheet.create({});
