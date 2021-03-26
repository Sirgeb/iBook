import React from 'react'
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet, Image, Dimensions, Text } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../assets/colors';

const { width: screenWidth } = Dimensions.get('screen');
 
export const Header = ({ showBackArror, routeHeaderText, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {
          showBackArror && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcon 
                name="arrow-back"
                color={colors.white}
                size={30}
                style={styles.arrowBack}
              />
            </TouchableOpacity>
          )
        }
        {
          !routeHeaderText && (
            <Image 
              style={styles.image}
              source={require('../../assets/images/iBook.png')}
              resizeMode="contain"
            />
          )
        }
        {
          !!routeHeaderText && (
            <Text style={styles.text}>{routeHeaderText}</Text>
          )
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomColor: "transparent",
    height: 70,
  },
  content: {
    flex: 1,
    width: screenWidth
  },
  arrowBack: {
    position: 'absolute',
    top: 20,
    left: 30
  },
  image: {
    alignSelf: "center",
    height: 50,
    width: 100,
    marginVertical: 10
  },
  text: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 22,
    fontSize: 20,
    color: colors.white
  }
});

Header.propTypes = {
  showBackArror: PropTypes.bool,
  routeHeaderText: PropTypes.string,
  navigation: PropTypes.object
}

Header.defaultProps = {
  showBackArror: false,
  routeHeaderText: ""
}