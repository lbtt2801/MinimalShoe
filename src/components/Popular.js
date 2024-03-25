import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {products} from '../MockData';
import Product from './Product';

const Popular = () => {
  return (
    <View>
      <Text style={styles.tittle}>Popular</Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Product
            name={item.name}
            price={item.price}
            data_image={item.data_image[0]}
            keyExtractor={item => item.id}
          />
        )}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
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
