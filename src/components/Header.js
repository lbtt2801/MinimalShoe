import {
  View,
  Text,
  Image,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets/image';

export default function Header({
  isShowTitle = true,
  isShowIconLeft = false,
  isShowIconRight = false,
  title = 'Title Default',
  titleStyle,
  iconLeftData = IMAGES.ic_angle_left,
  iconRightData = IMAGES.ic_notification,
  iconLeftStyle,
  iconRightStyle,
  iconLeftPress = () => {
    Alert.alert('This Action Press of Icon Left ');
  },
  iconRightPress = () => {
    Alert.alert('This Action Press of Icon Right ');
  },
}) {
  const HeaderIconLeft = () => {
    return (
      <TouchableOpacity onPress={() => iconLeftPress()}>
        <Image source={iconLeftData} style={[styles.iconLeft, iconLeftStyle]} />
      </TouchableOpacity>
    );
  };

  const HeaderIconRight = () => {
    return (
      <TouchableOpacity onPress={() => iconRightPress()}>
        <Image
          source={iconRightData}
          style={[styles.iconRight, iconRightStyle]}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{flexDirection: 'row', marginTop: 10, backgroundColor: '#fff', paddingVertical:10}}>
      {isShowIconLeft == true ? HeaderIconLeft() : () => {}}
      <Text style={[styles.title, titleStyle]}>
        {isShowTitle == true ? title : ''}
      </Text>
      {isShowIconRight == true ? HeaderIconRight() : () => {}}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    color: '#000000',
  },
  iconLeft: {
    width: 24,
    height: 24,
  },
  iconRight: {
    width: 19,
    height: 22,
  },
});
