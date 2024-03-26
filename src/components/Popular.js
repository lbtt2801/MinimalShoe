import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {products} from '../MockData';
import Product from './Product';
import {IMAGES} from '../assets/image';

const Popular = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text style={styles.tittle}>Popular</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Pressable onPress={() => {navigation.navigate('DetailScreen', {item: item})}}>
            <Product
              id={item.id}
              name={item.name}
              price={item.price}
              data_image={item.data_image[0]}
              logo={item.logo}
            />
          </Pressable>
        )}
        keyExtractor={item => item.id}
        style={{flex: 1}}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  tittle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 23,
    marginTop: 40,
  },
});
