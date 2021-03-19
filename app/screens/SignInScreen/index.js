import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/user/user-actions';

export const SignInScreen = () => {
  const { user } = useSelector(state => state);
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(signIn())}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
