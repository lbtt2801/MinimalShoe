import {TextInput, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import TopBrands from '../components/TopBrands';
import Popular from '../components/Popular';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 24}}>
      <Header
        headerText={'Sneakrs'}
        headerIcon={require('../assets/ic_notification.png')}
      />
      <Search placeholder={'Search'}/>
      <TopBrands/>
      <Popular/>
    </SafeAreaView>
  );
};

export default HomeScreen;
