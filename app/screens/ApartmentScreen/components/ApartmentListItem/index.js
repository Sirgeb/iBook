import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import PropType from 'prop-types';
import { colors } from '../../../../assets/colors';
import { Rating } from '../../../../components';
import { formatPrice } from '../../../../lib'

export const ApartmentListitem = ({ apartment }) => {
  return (
    <View style={{
      margin: 10
    }}>
      <View style={{ 
        flexDirection: 'row', 
        height: 150, 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
        <View style={{
          flex: 1.5
        }}>
          <Image 
            source={apartment.image}
            style={{
              height: 150,
              width: '100%',
              borderRadius: 20
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{
          flex: 1.5,
          backgroundColor: colors.grey,
          paddingLeft: 20,
          marginLeft: -50,
          height: '100%',
          justifyContent: 'center',
          borderRadius: 20
        }}>
          <Text>{apartment.title}</Text>
          <Rating rate={apartment.rating} />
          <Text>{formatPrice(apartment.price)} {`/`} Day</Text>
        </View>
      </View>
    </View>
  )
}

