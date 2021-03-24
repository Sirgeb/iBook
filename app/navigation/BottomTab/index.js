import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoritesScreen, MyProfileScreen, ExploreScreen} from '../../screens'
import { ApartmentStack, BookingsStack } from '..';

const Tab = createBottomTabNavigator();

export const BottomTab = () => (
  <Tab.Navigator
    headerMode="none"
  >
    <Tab.Screen name="Apartment" component={ApartmentStack} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="Explore" component={ExploreScreen} />
    <Tab.Screen name="Bookings" component={BookingsStack} />
    <Tab.Screen name="Profile" component={MyProfileScreen} />
  </Tab.Navigator>
);
