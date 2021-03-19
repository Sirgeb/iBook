import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FavoritesScreen, MapScreen, MyProfileScreen } from '../../screens'
import { ApartmentStack, BookingsStack } from '..';

const Drawer = createDrawerNavigator();

export const DrawerNav = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Apartment" component={ApartmentStack} />
    <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    <Drawer.Screen name="Map" component={MapScreen} />
    <Drawer.Screen name="Bookings" component={BookingsStack} />
    <Drawer.Screen name="Profile" component={MyProfileScreen} />
  </Drawer.Navigator>
);
