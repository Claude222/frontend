import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView
} from 'react-native';
import React from 'react';
import BackGorundImages from '../assets/images/Frame.png';
import {vw, vh} from '../constant';

import Feather from 'react-native-vector-icons/Feather';
import {
  Container,
  FormControl,
  Radio,
  WarningOutlineIcon,
  Center,
  NativeBaseProvider,
} from 'native-base';

export default function Welcome(props) {
  const [groupValue, setGroupValue] = React.useState('1');
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{borderRadius:45}}>
      <ImageBackground
        source={BackGorundImages}
        style={{
          height: 230,
          borderRadius: 45,
          borderColor:"orange",
          borderWidth:1,
          width:"100%"
          
          
         
        }}>
        <Text
          style={{
            fontFamily: 'Product Sans',
            color: 'white',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: 35,
            flex: 1,
            alignSelf: 'center',
            marginTop: vh * 0.14
          }}>
          Welcome
        </Text>
      </ImageBackground>
      </View>

      <View
        style={{
          backgroundColor: 'white',
        
          borderRadius: 40,
         
          height: 600,
          width: '100%',
          
        }}>
        <View style={{flexDirection: 'row', width: '100%',marginTop: vh * 0.04,marginHorizontal:vw * 0.07}}>
          <TextInput
            //    secureTextEntry={props.secureTextEntry}
            placeholder="Email or Phone Number"
            placeholderTextColor="#9F9F9F"
            // value={props.state}
            // onChangeText={val => props.setState(val)}
            // keyboardType={}
            style={{
              fontSize: 14,
              color: '#222',
              borderWidth: 1,
              borderColor: '#D4D4D4',
              borderRadius: 8,
              width: 350,
              height: 55,
              backgroundColor: '#F6F6F7',
              paddingHorizontal:45
              //   textAlignVertical: props.textAlignVertical,
            }}
          />
          <Feather
            style={{marginHorizontal: vw * -0.8,alignSelf:"center"}}
            name="user"
            color="#FC6A43"
            size={18}
          />
        </View>
        <View style={{flexDirection: 'row' ,marginTop: vh * 0.03,marginHorizontal:vw * 0.07}}>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#9F9F9F"
            // value={props.state}
            // onChangeText={val => props.setState(val)}
            // keyboardType={}
            style={{
              fontSize: 14,
              color: '#222',
              borderWidth: 1,
              borderColor: '#D4D4D4',
              borderRadius: 8,
              width: 350,
              height: 55,
              backgroundColor: '#F6F6F7',
              paddingHorizontal:45
              //   textAlignVertical: props.textAlignVertical,
            }}
          />
          <Feather
           style={{marginHorizontal: vw * -0.8,alignSelf:"center"}}
            name="key"
            color="#FC6A43"
            size={18}
          />
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop: vh * 0.03,marginHorizontal:vw * 0.07}}>
          <Container>
            <FormControl>
              <Radio.Group
                name="exampleGroup"
                accessibilityLabel="Remember me"
                onChange={value => {
                  setGroupValue(value || '');
                }}>
                <Radio value="1" my="1">
                  <Text style={{color:" #C5C5C6"}}> Remember me </Text>
                </Radio>
              </Radio.Group>
            </FormControl>
          </Container>
          <Text style={{alignSelf:"center",color:"orange"}}> Forgot Password?</Text>
        </View>
        <TouchableOpacity onPress={()=>props.navigation.navigate("interest")} style={{ width:'85%',
        height:60,
      backgroundColor:"#FC6A43",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        alignSelf:'center',
        marginTop: vh * 0.04
        }}>
            <Text style={{   color:"white",
        fontSize:14,
        fontWeight:'700'}}> Sign In</Text>
        </TouchableOpacity>
        <Text style={{color:"black",fontSize:12}}> Or</Text>
        <View style={{flexDirection:"row",marginTop: vh * 0.05,justifyContent:"center"}}>
            <Image source={require("../assets/images/aaa.png")}/>
            <View style={{marginHorizontal:vw * 0.03}}></View>
            <Image source={require("../assets/images/ff.png")}/>
        </View>
        <View style={{flexDirection:"row",marginTop: vh * 0.12,justifyContent:"center"}}>
            <Text style={{color:"black",textAlign:"center"}}>
            Don’t have an account? 
            </Text>
            <Text style={{color:"orange",textAlign:"center"}}>
              Sign Up
            </Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
