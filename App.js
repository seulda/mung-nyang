import * as React from 'react';
//import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import StackNavi from './navigation/StackNavi';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="black" />
      <StackNavi />
    </NavigationContainer>
  );
}
