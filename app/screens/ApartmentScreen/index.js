import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Header } from '../../components';
import { ApartmentListitem, Slider } from './components';
import apartments from '../../data';

export const ApartmentScreen = ({ navigation }) => {

  return (
    <View>
      <Header 
        navigation={navigation}
      />
      <View style={{
        paddingBottom: 140
      }}>
        <FlatList 
          data={apartments}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <Slider />}
          contentContainerStyle={{
            marginBottom: 100,
          }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ApartmentListitem 
              apartment={item}
            />
          )}
        />
      </View>
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
