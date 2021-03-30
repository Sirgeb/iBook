import React from 'react';
import { View } from 'react-native'; 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../assets/colors';


export const Rating = ({ rate }) => {
  const starComponents = [];
  const splitDecimal = rate.toString().split('.');
  const wholeNumber = splitDecimal[0];
  const decimal = splitDecimal[1];
  const size = 20;

  for (var i = 0; i < wholeNumber; i++) {
    starComponents.push(
      <MaterialIcons 
        key={`full-${i}`}
        name="star"
        color={colors.secondary}
        size={size}
        style={{
          marginLeft: 0
        }}
      />
    )
  }

  if (decimal) {
    starComponents.push(
       <MaterialIcons 
        key={`full-${i}`}
        name="star-half"
        color={colors.secondary}
        size={size}
        style={{
          marginLeft: 0
        }}
      />
    )
  }

  return (
    <View 
      style={{
        flexDirection: 'row',
      }}
    >
      { starComponents }
    </View>
  )
}
