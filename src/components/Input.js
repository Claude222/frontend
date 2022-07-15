import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import { Icon } from '../assets/icons/Icon';

const Input = ({phText, changeFun, keyboardType, bg, value, radius, phcolor,bw, type, name, color, size, width}) => {
  return (
    <View style={ { flexDirection:'row', alignItems:'center', justifyContent:'space-around', paddingLeft:10,borderRadius:radius,  backgroundColor:bg, width:'100%'}}>
      <Icon type={type} name={name} size={size} color ={color}/>
      <TextInput
        value={value}
        keyboardType={keyboardType}
        style={[styles.input, {backgroundColor: bg,width: width, borderRadius: radius, borderWidth:bw}]}
        onChangeText={changeFun}
        placeholder={phText}
        placeholderTextColor={phcolor}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.grey,
    width: '90%',
    borderColor:colors.greydark,
    borderWidth:1,
    paddingLeft:10,
    color:colors.white
    // marginBottom:20
  },
});
