import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IMAGES} from '../assets/image';
import {Image} from 'react-native';
import HeartScreen from '../screens/HeartScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        // headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Sneakrs',
          headerTintColor:'#000000',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.ic_home}
              style={{tintColor: focused ? '#000000' : '#D6D6D6'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HeartScreen"
        component={HeartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.ic_heart}
              style={{tintColor: focused ? '#000000' : '#D6D6D6'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.ic_cart}
              style={{tintColor: focused ? '#000000' : '#D6D6D6'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.ic_profile}
              style={{tintColor: focused ? '#000000' : '#D6D6D6'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        initialRouteName="HomeScreen1"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen1" component={BottomTabs} />
        <Stack.Screen name="DetailScreen1" component={DetailScreen} />
      </Stack.Navigator> */}
      <BottomTabs />
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
