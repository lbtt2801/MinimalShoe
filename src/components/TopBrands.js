import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {brands} from '../MockData';

const TopBrands = () => {
  return (
    <View>
      <Text style={styles.tittle}>Top Brands</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          justifyContent: 'space-between',
          width: '100%',
        }}>
        {brands.map(brand => {
          return (
            <View style={styles.box}>
              <Image
                source={brand.data_image}
                keyExtractor={brand => brand.id}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}></Image>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TopBrands;

const styles = StyleSheet.create({
  tittle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 23,
    color: '#000000',
    marginBottom: 17,
  },
  box: {
    width: 55,
    height: 57,
    backgroundColor: '#EEEEEE',
    borderRadius: 18,
    alignItems: 'center',
    padding: 7,
  },
});
