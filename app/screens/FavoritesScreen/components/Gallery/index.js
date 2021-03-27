import React, { useRef, useState } from 'react';
import { View, Animated, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../../../assets/colors';
import apartment from '../../../../data';

export const Gallery = () => {
  const [apartments, setApartments] = useState([{ id: -1 }, ...apartment, { id: -2 }]);
  const { height: screenHeight, width: screenWidth } = Dimensions.get('screen');
  const apartmentScrollX = useRef(new Animated.Value(0)).current;
  const itemSize = screenWidth / 1.2;
  const emptyItemSize = (screenWidth - itemSize) / 2;
  const radius = 12;
  const padding = 24;

  return (
    <Animated.FlatList
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      data={apartments}
      keyExtractor={item => `${item.id}`}
      contentContainerStyle={{
        alignItems: 'center'
      }}
      snapToAlignment="center"
      snapToInterval={itemSize}
      bounces={false}
      onScroll={Animated.event([
        { nativeEvent: { contentOffset: { x: apartmentScrollX }}}
      ], { useNativeDriver: false })}
      onMomentumScrollEnd={(event) => {
        // Calculate position 
        const position = (event.nativeEvent.contentOffset.x / itemSize).toFixed(0);
        console.log(position);
      }}
      renderItem={({ item, index }) => {
        const opacity = apartmentScrollX.interpolate({
          inputRange: [
            (index - 2) *  itemSize,
            (index - 1) * itemSize,
            index * itemSize
          ],
          outputRange: [0.3, 1, 0.3]
        })

        let activeHeight = 0;

        if (Platform.OS === 'ios') {
          if (screenHeight > 800) {
            activeHeight = screenHeight / 2
          } else {
            activeHeight = screenHeight / 1.65
          }
        } else {
          activeHeight = screenHeight / 1.6
        }

        const height = apartmentScrollX.interpolate({
          inputRange: [
            (index - 2) * itemSize,
            (index - 1) * itemSize,
            index * itemSize
          ],
          outputRange: [
            screenHeight / 2.25,
            activeHeight,
            screenHeight / 2.25
          ],
          extrapolate: 'clamp'
        })

        if (index == 0 || index == apartments.length - 1) {
          return (
            <View 
              style={{
                width: emptyItemSize
              }}
            />
          )
        } else {
          return (
            <Animated.View
              opacity={opacity}
              style={{
                width: itemSize,
                height,
                alignItems: 'center',
                borderRadius: 20,
                padding: 10
              }}
            >
              <Image 
                source={item.image}
                resizeMode="cover"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  borderRadius: 20
                }}
              />
              <View 
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  marginHorizontal: padding
                }}>
                  <Text 
                    style={{
                      marginBottom: radius,
                      color: colors.white,
                    }}>
                      {item.title}
                  </Text>
                  <Text 
                    style={{ 
                      marginBottom: padding * 2, 
                      textAlign: 'center',
                      color: colors.white,
                    }}
                    > {item.address}
                  </Text>
                  <TouchableOpacity
                    style={{
                      height: 55,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: radius,
                      backgroundColor: colors.white,
                      position: 'absolute',
                      bottom: -20,
                      width: 150
                    }}
                    onPress={() => console.log("pressed")}
                  >
                    <Text>
                      Check Out
                    </Text>
                  </TouchableOpacity>
                </View>
              </Animated.View>
            )
          }
      }}
  />
  )
}

