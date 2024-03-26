import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {IMAGES} from '../assets/image';
import {Dimensions} from 'react-native';
import DropdownSize from '../components/DropdownSize';

const Ellipse = ({backgroundColor, size = 23}) => {
  return (
    <View
      style={{
        borderRadius: 100,
        backgroundColor: backgroundColor,
        width: size,
        height: size,
        marginEnd: 13,
      }}
    />
  );
};

const DetailScreen = ({route, navigation}) => {
  const product = route.params.item;
  const winSize = Dimensions.get('window'); // lấy kích thước ngang dọc của thiết bị.
  return (
    <View style={{paddingHorizontal: 24, backgroundColor: '#fff', flex: 1}}>
      <Header
        isShowTitle={false}
        isShowIconLeft={true}
        isShowIconRight={true}
        iconRightData={IMAGES.ic_options}
        iconRightStyle={{width: 23, height: 5, marginTop: 10}}
        navigation={navigation}
        iconLeftPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
        <View
          style={{
            backgroundColor: '#EEEEEE',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 18,
            padding: 20,
            flex: 1,
            height: winSize.height * 0.5,
          }}>
          <Image
            source={product.logo}
            style={{
              width: '100%',
              height: 120,
              resizeMode: 'contain',
              position: 'absolute',
              tintColor: 'rgba(0, 0, 0, 0.2)',
            }}
          />
          <Image
            source={product.data_image[0]}
            style={{flex: 1, width: '75%', resizeMode: 'contain'}}
          />
        </View>

        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.detail}>{product.detail}</Text>
        <Text style={styles.detail}>{product.detail}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Ellipse backgroundColor="#29605D" />
          <Ellipse backgroundColor="#5B8EA3" />
          <Ellipse backgroundColor="#746A36" />
          <Ellipse backgroundColor="#2E2E2E" />
          <DropdownSize />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: '#000000',
          borderRadius: 15,
          alignItems: 'center',
          marginTop: 18,
          marginBottom: 24,
        }}>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 21,
            color: '#FFFFFF',
            marginVertical: 15,
          }}>
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
    marginBottom: 18,
  },
  detail: {
    color: 'background: rgba(0, 0, 0, 0.4)',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.25,
    marginBottom: 25,
    marginTop: 18,
  },
  ellipse: {
    borderRadius: 100,
    backgroundColor: '#2E2E2E',
    width: 23,
    height: 23,
    marginBottom: 13,
  },
});
