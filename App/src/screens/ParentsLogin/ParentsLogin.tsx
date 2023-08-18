import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ParentsLogin() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('MainParents')
    }
    function forgotPassword(){
        navigation.navigate('ForgotPassword')
    }

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={openScreen} style={styles.button}>Entrar</TouchableOpacity>
       
        <TouchableOpacity onPress={forgotPassword} style={styles.button}>Esqueceu a Senha?</TouchableOpacity>
       
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFF",
        justifyContent: "center"
    },
    button: {
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