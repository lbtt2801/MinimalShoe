import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from '../assets/image';

const Product = ({id, name, price, data_image, logo}) => {
  return (
    <View style={{marginTop: id % 2 === 0 ? 15 : 0}}>
      <View style={styles.box_image}>
        <Image
          source={data_image}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            alignContent: 'center',
          }}
        />
        <Image
          source={logo}
          style={{
            width: '30%',
            height: '30%',
            resizeMode: 'contain',
            alignContent: 'flex-end',
            position: 'absolute',
            right: '10%',
            bottom: '5%',
            tintColor:'rgba(0, 0, 0, 0.4)',
          }}
        />
      </View>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  box_image: {
    backgroundColor: '#F6F6F6',
    borderRadius: 25,
    width: 142,
    height: 150,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 35,
    // alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
    marginBottom: 5,
    marginTop: 20,
  },
  name: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
});
