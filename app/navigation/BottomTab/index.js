import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoritesScreen, MyProfileScreen, ExploreScreen } from '../../screens'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { ApartmentStack, BookingsStack } from '..';
import { colors } from '../../assets/colors';

const Tab = createBottomTabNavigator();

export const BottomTab = () => (
  <Tab.Navigator
    headerMode="none"
    tabBarOptions={{
      style: styles.tabNavigator,
      showLabel: false
    }}
  >
    <Tab.Screen 
      name="Apartment" 
      component={ApartmentStack} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.center}>
            <MaterialIcon 
              name="apartment"
              size={30}
              color={ focused ? colors.secondary : colors.white }
            />
            <Text style={focused ? styles.activeText : styles.inActiveText}>Apartment</Text>
          </View>
        )
      }}
    />

    <Tab.Screen 
      name="Favorites" 
      component={FavoritesScreen} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.center}>
            <MaterialIcon 
              name="favorite"
              size={30}
              color={ focused ? colors.secondary : colors.white }
            />
            <Text style={focused ? styles.activeText : styles.inActiveText}>Favorite</Text>
          </View>
        )
      }}
    />

    <Tab.Screen 
      name="Explore" 
      component={ExploreScreen} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.center}>
            <MaterialIcon 
              name="map"
              size={30}
              color={ focused ? colors.secondary : colors.white }
            />
            <Text style={focused ? styles.activeText : styles.inActiveText}>Explore</Text>
          </View>
        )
      }}
    />

    <Tab.Screen 
      name="Bookings" 
      component={BookingsStack} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.center}>
            <MaterialIcon 
              name="book-online"
              size={30}
              color={ focused ? colors.secondary : colors.white }
            />
            <Text style={focused ? styles.activeText : styles.inActiveText}>Bookings</Text>
          </View>
        )
      }}
    />

    <Tab.Screen 
      name="Profile" 
      component={MyProfileScreen} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.center}>
            <MaterialIcon 
              name="account-box"
              size={30}
              color={ focused ? colors.secondary : colors.white }
            />
            <Text style={focused ? styles.activeText : styles.inActiveText}>My Profile</Text>
          </View>
        )
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: colors.primary,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopColor: "transparent",
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeText: {
    color: colors.secondary
  },
  inActiveText: {
    color: colors.white
  }
});
