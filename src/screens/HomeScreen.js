import {TextInput, SafeAreaView, View, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import TopBrands from '../components/TopBrands';
import Popular from '../components/Popular';
import Product from '../components/Product';
import {Text} from 'react-native-paper';
import {IMAGES} from '../assets/image';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFF', paddingHorizontal: 24}}>
      <Header
        title="Sneakrs"
        isShowIconRight={true}
        navigation={navigation}
      />
      <Search placeholder={'Search'} />
      <TopBrands />
      <Popular navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
