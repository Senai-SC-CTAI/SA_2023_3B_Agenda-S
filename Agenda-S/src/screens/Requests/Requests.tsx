import React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function Requests() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Login')
    }
  
    return (
    <View style={styles.container}>
        <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFF",
        justifyContent: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
      },
})
