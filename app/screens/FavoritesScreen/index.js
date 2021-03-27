import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../../components';
import { Gallery } from './components';

export const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Gallery />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
