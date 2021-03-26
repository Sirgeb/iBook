import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Animated, Image, Dimensions } from 'react-native'
import { colors } from '../../assets/colors';
import { Header } from '../../components';
import apartments from '../../data';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
const scrollX = new Animated.Value(0);
const dotPosition = Animated.divide(scrollX, screenWidth - 20);

export const ApartmentScreen = ({ navigation }) => {

  return (
    <View>
      <Header 
        navigation={navigation}
      />
      <View style={{
        backgroundColor: colors.grey,
        marginTop: 10
      }}>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } }
        ], { useNativeDriver: false })}
      >
        {
          apartments?.map((apartment, index) => (
            <View
              key={`menu-${index}`}
              style={{ alignItems: 'center' }}
            >
              <View 
                style={{
                  width: screenWidth - 20,
                  backgroundColor: colors.secondary,
                  marginTop: 10,
                  padding: 2,
                  marginHorizontal: 10
                }} 
              />
              <View style={{ height: screenHeight * 0.35}}>
                {/* Slider Image */}
                <Image
                  source={apartment.image}
                  resizeMode="cover"
                  style={{
                    width: screenWidth - 20,
                    height: "100%"
                  }}
                />

                <MaterialIcon 
                  name="local-fire-department"
                  size={30}
                  color={colors.secondary}
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    left: 10
                  }}
                />
              </View>

              {/* Title & Price */}
              <View
                style={{
                  width: screenWidth,
                  alignItems: 'center',
                  marginTop: 15,
                  paddingHorizontal: 20,
                }}
              >
                <Text style={{ marginTop: 10, textAlign: 'center', fontSize: 16 }}>{apartment.title}</Text>
                <Text style={{ fontSize: 16 }}> $250 / Day </Text>
              </View>

              {/* Check Out Button */}
              <TouchableOpacity
                style={{
                  width: screenWidth,
                  height: 40,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  marginVertical: 5
                }}
              >
                <Text
                  style={{
                    backgroundColor: colors.secondary,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    fontWeight: 'bold',
                    borderRadius: 10
                  }}
                >Check Out</Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </Animated.ScrollView> 

      <View style={{ 
        height: 30, 
        position: 'absolute', 
        top: screenHeight * 0.39,
        alignSelf: 'center'
      }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: 10
          }}
        >
          {apartments?.map((_, index) => {
              const opacity = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.3, 1, 0.3],
                extrapolate: "clamp"
              })

              const dotSize = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [8 * 0.8, 10, 8 * 0.8],
                extrapolate: "clamp"
              })

              const dotColor = dotPosition.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [colors.black, colors.primary, colors.black],
                extrapolate: "clamp"
              })

              return (
                <Animated.View
                  key={`dot-${index}`}
                  opacity={opacity}
                  style={{
                    borderRadius: 30,
                    marginHorizontal: 6,
                    width: dotSize,
                    height: dotSize,
                    backgroundColor: dotColor
                  }}
                />
              )
          })}
        </View>
      </View>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
