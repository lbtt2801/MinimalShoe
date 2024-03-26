import {Alert, Pressable, StyleSheet} from 'react-native';
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
import {Text} from 'react-native-paper';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#fff',
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
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
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={BottomTabs} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
