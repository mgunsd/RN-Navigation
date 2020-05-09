import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Text> IntroScreen </Text>
    </View>
  )
}

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
})