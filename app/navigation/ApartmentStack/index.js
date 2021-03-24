import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { ApartmentScreen } from '../../screens';

const Apartment = createStackNavigator();

export const ApartmentStack = () => (
  <Apartment.Navigator
    headerMode="none"
  >
    <Apartment.Screen
      name="ApartmentScreen"
      component={ApartmentScreen}
      options={{ title: "Apartment"}}
    />
  </Apartment.Navigator>
);
