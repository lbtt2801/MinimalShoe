import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const DetailScreen = () => {
  return (
    <View style={{flexDirection: 'column', paddingHorizontal: 24}}>
      <Text style={styles.name}>Nike Air Max 90</Text>
      <Text style={styles.price}>$239.80</Text>
      <Text style={styles.detail}>
        A pillar of sneaker culture, the Nike Air Max 90 remains one of the most
        significant designs since the brand’s founding. And while its OG
        colorways are some of the most significant.
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View
          style={{
            borderRadius: 100,
            backgroundColor: '#29605D',
            width: 23,
            height: 23,
          }}
        />
        <View
          style={{
            borderRadius: 100,
            backgroundColor: '#5B8EA3',
            width: 23,
            height: 23,
          }}
        />
        <View
          style={{
            borderRadius: 100,
            backgroundColor: '#746A36',
            width: 23,
            height: 23,
          }}
        />
        <View
          style={{
            borderRadius: 100,
            backgroundColor: '#2E2E2E',
            width: 23,
            height: 23,
          }}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#000000',
          borderRadius: 15,
          alignItems: 'center',
          marginTop: 18,
        }}>
        <Text style={{fontSize: 18, lineHeight: 21, color: '#FFFFFF'}}>
          Add to bag
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    lineHeight: 20,
    letterSpacing: 0.25,
    color: '#000000',
    marginBottom: 12,
    marginTop: 24,
  },
  price: {
    color: 'background: rgba(0, 0, 0, 0.6)',
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  detail: {
    color: 'background: rgba(0, 0, 0, 0.4)',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.25,
    marginBottom: 25,
    marginTop: 18,
  },
});
