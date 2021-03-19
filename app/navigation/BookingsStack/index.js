import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { BookingsScreen } from '../../screens';

const Bookings = createStackNavigator();

export const BookingsStack = () => (
  <Bookings.Navigator>
    <Bookings.Screen
      name="BookingScreen"
      component={BookingsScreen}
      options={{ title: "Bookings" }}
    />
  </Bookings.Navigator>
);
