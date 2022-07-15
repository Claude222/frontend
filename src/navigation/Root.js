import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import Interest from '../screens/Interest';
import Verification from '../screens/Verification';
import Membership from '../screens/Membership';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';
import Login from "../screens/Login"
const Root = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={ Welcome }/>
        <Stack.Screen name='Login' component={ Login }/>
        <Stack.Screen name='interest' component={ Interest }/>
        <Stack.Screen name='verfication' component={ Verification }/>
        <Stack.Screen name='membership' component={ Membership }/>
        {/* <Stack.Screen name='home' component={ Home }/> */}
        <Stack.Screen name ='home' component={ BottomTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
