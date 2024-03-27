import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header
        headerStyle={{paddingHorizontal: 24}}
        isShowTitle={false}
        isShowIconLeft={true}
        isShowIconRight={true}
        iconRightData={IMAGES.ic_options}
        iconRightStyle={{width: 23, height: 5, marginTop: 10}}
        navigation={navigation}
        iconLeftPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <FlatList
          data={product.data_image}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          style={{flex: 1}}
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / winSize.width).toFixed(0));
          }}
          renderItem={({item, index}) => (
            <View
              style={{
                backgroundColor: '#EEEEEE',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 18,
                marginHorizontal: 10,
                padding: 20,
                width: winSize.width - 20,
                height: winSize.height * 0.5,
              }}>
              <Image
                source={product.logo}
                style={{
                  width: '100%',
                  height: winSize.height * 0.5,
                  resizeMode: 'contain',
                  position: 'absolute',
                  tintColor: 'rgba(0, 0, 0, 0.2)',
                }}
              />
              <Image
                source={item}
                style={{
                  flex: 1,
                  width: '80%',
                  resizeMode: 'contain',
                }}
              />
            </View>
          )}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: winSize.width,
            position:'absolute',
            top: winSize.width,
          }}>
          {product.data_image.map((item, index) => {
            return (
              <View
                style={{
                  width: currentIndex == index ? 35 : 20,
                  height: 6,
                  backgroundColor: currentIndex == index ? '#FFFFFF' : 'rgba(0, 0, 0, 0.2)',
                  borderRadius: 5,
                  marginEnd: 7,
                }}
              />
            );
          })}
        </View>
        
        <View style={{paddingHorizontal: 24}}>
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
            <DropdownSize data={product.size} />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: '#000000',
          borderRadius: 15,
          alignItems: 'center',
          marginTop: 18,
          marginBottom: 24,
          marginHorizontal: 24,
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
