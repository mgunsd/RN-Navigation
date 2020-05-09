import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const OneDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text> OneDetailScreen </Text>
    </View>
  )
}

export default OneDetailScreen

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
