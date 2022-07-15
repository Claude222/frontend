import {StyleSheet, Text, View,Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import colors from '../utils/colors';
const BottomTab = () => {
const Book=()=>{
    return(
        <Text>book</Text>
    )
}
const Shop=()=>{
    return(
        <Text>shop</Text>
    )
}
const Search=()=>{
    return(
        <Text>search</Text>
    )
}
    const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      // initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarItemStyle: {
          height: 60,
        },
        tabBarStyle: {
          borderRadius: 25,
        //   display: selected ? 'none' : 'flex',
        display:'flex',
          height: 63,
          // ...elevation(4),
          width: '86%',
        //   alignSelf:'center',
          left:25,
        //   bottom: keyboardStatus ? 0 : 10,
        bottom:10,
          position: 'absolute',
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor:'#FC6A43',
        tabBarInactiveTintColor: '#BFBFBF',
      })}>
      <Tab.Screen 
      name="home"
      component={ Home }
      options={{
        tabBarIcon: () => {
          return (
            <Image
              source={ require('../assets/images/home.png')}
            />
          );
        },
      }}
      />
          <Tab.Screen 
      name="book"
      component={ Book }
      options={{
        tabBarIcon: () => {
          return (
            <Image
              source={ require('../assets/images/bookn.png')}
            />
          );
        },
      }}
      />
          <Tab.Screen 
      name="shop"
      component={ Shop}
      options={{
        tabBarIcon: () => {
          return (
            <Image
              source={ require('../assets/images/shop.png')}
            />
          );
        },
      }}
      />
          <Tab.Screen 
      name="search"
      component={ Search }
      options={{
        tabBarIcon: () => {
          return (
            <Image
              source={ require('../assets/images/search.png')}
            />
          );
        },
      }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
