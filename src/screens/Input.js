import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'
import colors from '../utils/colors'

const Input = ({phText, changeFun, keyboardType, bg, value, radius, phcolor,bw, type, name, color, size, width}) => {
  return (
    <View style={[styles.main , value?{borderColor:colors.orange }:{ borderColor:colors.grey} ]}>

    <TextInput
    value={value}
    keyboardType='number-pad'
    style={[styles.input,]}
    onChangeText={changeFun}
    />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    main:{
        backgroundColor: colors.white,
        width:56,
        height:58,
        borderRadius:20,
        borderWidth:3,
        borderColor:colors.grey,
        justifyContent:'center',
        alignItems:'center',
    },


    input:{
        // backgroundColor:'green',
        // width:56,
        // height:40,
        // borderRadius:20,
        // borderWidth:3,
        // borderColor:colors.grey,
        // justifyContent:'center',
        alignItems:'flex-end',
        color:colors.orange,
        fontSize:34,
        fontWeight:'bold',
        padding:0




    }
})