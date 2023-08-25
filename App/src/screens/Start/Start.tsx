import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function Start() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Login')
    }
  
    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={openScreen} style={styles.next}>Continuar</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center"
    },
    next: {
        color: "white",
        width: '30%',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'black',
        padding: 15,
        fontFamily: 'arial',
        border: 1,
        borderRadius: 10
    }
})