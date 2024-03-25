import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import {useNavigation} from '@react-navigation/native';

const Product = ({name, price, data_image}) => {
  // const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate("DetailScreen")}>
      <View style={styles.box_image}>
        <Image
          source={data_image}
          style={{width: '100%', height: '100%', resizeMode: 'contain'}}
        />
      </View>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </Pressable>
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
    alignItems: 'center',
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
