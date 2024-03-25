import {View, Text, Image} from 'react-native';
import React from 'react';

const Header = ({headerText, headerIcon}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 10}}>
      <Text
        style={{
          flex: 1,
          fontSize: 18,
          lineHeight: 21,
          fontWeight: 'bold',
          color: '#000000',
        }}>
        {headerText}
      </Text>
      <Image source={headerIcon} style={{width: 19, height: 22.35}} />
    </View>
  );
};

export default Header;
