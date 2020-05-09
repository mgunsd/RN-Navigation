import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const OneScreen = () => {
  return (
    <View style={styles.container}>
      <Text> OneScreen </Text>
    </View>
  )
}

export default OneScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    fontSize: 40,
    fontWeight: 'bold',
  },
})
