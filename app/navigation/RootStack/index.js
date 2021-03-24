import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { AuthStack, BottomTab } from '..';

const Root = createStackNavigator();

export const RootStack = () => {
  const { user: { isLoggedIn } } = useSelector(state => state);
  
  return (
    <Root.Navigator
      headerMode="none"
    >
      {
        isLoggedIn ? (
          <Root.Screen
            name="Home"
            component={BottomTab}
            options={{
              animationEnabled: false
            }}
          />
        ) : (
          <Root.Screen
            name="Auth"
            component={AuthStack}
            options={{
              animationEnabled: false
            }}
          />
        )
      }
    </Root.Navigator>
  )
}
