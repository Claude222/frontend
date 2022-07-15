import {View, Text, ImageBackground, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import BackGorundImages from '../assets/images/Frame.png';
import {vw,vh} from "../constant"

export default function Welcome({navigation}) {
  return (
    <ImageBackground source={BackGorundImages} style={{flex: 1,justifyContent:"flex-end",borderBottomEndRadius:49}}>
      <Text
        style={{
          fontFamily: 'Product Sans',
          color: 'white',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: 35,
          flex:1,
          alignSelf:"center",
          marginTop: vh * 0.37
        }}>
        Welcome
      </Text>
      <View style={{ backgroundColor:"white",height:293,borderTopLeftRadius:45,justifyContent:"center",alignItems:"center",justifyContent:"space-evenly",borderTopRightRadius:45}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}
          style={{
            width: '80%',
            height: 60,
            backgroundColor: '#F6F6F7',
            borderRadius: 20,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"

          }}>
            <Image style={{marginHorizontal:vw * 0.03}} source={require("../assets/images/aaa.png")}/>
          <Text
            style={{color: '#6B6B6B', fontSize: 14, fontWeight: '700',fontFamily:"Product Sans"}}>
                Continue with Google
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}
          style={{
            width: '80%',
            height: 60,
            backgroundColor: '#F6F6F7',
            borderRadius: 20,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"

          }}>
            <Image style={{marginHorizontal:vw * 0.03}} source={require("../assets/images/ff.png")}/>
          <Text
            style={{color: '#6B6B6B', fontSize: 14, fontWeight: '700',fontFamily:"Product Sans"}}>
               Continue with Apple
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}
          style={{
            width: '80%',
            height: 60,
            backgroundColor: '#F6F6F7',
            borderRadius: 20,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"

          }}>
           
          <Text
            style={{color: '#6B6B6B', fontSize: 14, fontWeight: '700',fontFamily:"Product Sans"}}>
                Continue a New Account
            </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
