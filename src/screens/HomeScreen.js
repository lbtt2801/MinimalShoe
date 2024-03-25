import {TextInput, SafeAreaView, View, Pressable} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import TopBrands from '../components/TopBrands';
import Popular from '../components/Popular';
import Product from '../components/Product';
import { Text } from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor:'#FFF', paddingHorizontal: 24}}>
      <Header
        headerText={'Sneakrs'}
        headerIcon={require('../assets/images/ic_notification.png')}
      />
      <Search placeholder={'Search'} />
      <TopBrands />
      <Popular/>
    </View>
  );
};

export default HomeScreen;
