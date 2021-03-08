import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TabStack from './src/navigation/TabStack';

export default function App() {
  return (
    <TabStack />
  );
}
