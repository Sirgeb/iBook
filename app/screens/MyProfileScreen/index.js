import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/user/user-actions';

export const MyProfileScreen = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
  }, [user])

  return (
    <View style={styles.container}>
      <Text>My Profile</Text>
      <Button 
        title="Log Out" 
        onPress={() => dispatch(logOut())} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
