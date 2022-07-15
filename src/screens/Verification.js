import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import colors from '../utils/colors';
import Input from './Input';
import Button from '../components/Button';

const Verification = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.title}> Verification </Text>
      <Text style={styles.description}>
        Please check your message for a six-digit security code and enter it
        below.
      </Text>
      <View style={styles.inputWrapper}>
        <Input />
        <Input />
        <Input />
        <Input />
      </View>
      <Text style={styles.codeText}>
        Don't get a code? <Text style={styles.againText}>Send again</Text>
      </Text>
      <View style={styles.btn}>
        <Button
          onPress={() => navigation.navigate('membership')}
          color={colors.white}
          bg={colors.orange}
          radius={20}
          height={60}
          width="90%"
          title="Verify"
        />
      </View>
    </SafeAreaView>
  );
};

export default Verification;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: '700',
    marginTop: 48,
    color:"black"
  },
  description: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    marginTop: 3,
  },
  inputWrapper: {
    width: '90%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 38,
    // backgroundColor:colors.green
  },
  codeText: {
    textAlign: 'center',
    color: '#888888',
    fontSize: 12,
    // lineHeight:'100%'
  },
  againText: {
    color: colors.orange,
  },
  btn: {
    width: '100%',
    // justifyContent:'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
  },
});
