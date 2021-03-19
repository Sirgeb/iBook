import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { SignInScreen, SignUpScreen } from '../../screens';

const Auth = createStackNavigator();

export const AuthStack = () => (
  <Auth.Navigator
    headerMode="none"
  >
    <Auth.Screen
      name="SignInScreen"
      component={SignInScreen}
    />
    <Auth.Screen
      name="SignUpScreen"
      component={SignUpScreen}
    />
  </Auth.Navigator>
);
