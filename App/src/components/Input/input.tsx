import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ placeholderText }) => {
  return (
    <View>
      <TextInput style={styles.input} placeholder={placeholderText} />
    </View>
  );
};

const styles = StyleSheet.create({
    input: {
      backgroundColor: '#D9D9D9',
      padding: 10,
      borderRadius: 7,
      alignItems: 'center',
      width: 311,
      height: 55,
      shadowColor: 'grey',
      shadowOffset: { width: 0, height: 4 }, 
      shadowOpacity: 0.2,
      shadowRadius: 4,
    }
});
export default CustomInput;
