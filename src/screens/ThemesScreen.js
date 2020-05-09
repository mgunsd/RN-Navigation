import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ThemesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ThemesScreen </Text>
    </View>
  )
}

export default ThemesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
})