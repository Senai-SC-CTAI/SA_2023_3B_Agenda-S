import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ onPress, buttonText }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1C8C7D',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 300,
    height: 45,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center'
  },
});

export default CustomButton;
