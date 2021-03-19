import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const MyProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
