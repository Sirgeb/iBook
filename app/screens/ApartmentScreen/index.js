import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Header } from '../../components';
import { Slider } from './components';

export const ApartmentScreen = ({ navigation }) => {

  return (
    <View>
      <Header 
        navigation={navigation}
      />
      <Slider />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
