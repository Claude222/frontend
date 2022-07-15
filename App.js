import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Root from './src/navigation/Root'
import { NativeBaseProvider, Box } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
    <Root/>
    </NativeBaseProvider>
  )
}

export default App

const styles = StyleSheet.create({})