import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function Login() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Main')
    }
  
    function openScreen2(){
        navigation.navigate('ForgotPassword')
    }

    function openScreen3(){
        navigation.navigate('ParentsLogin')
    }
    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={openScreen} style={styles.next}>Entrar</TouchableOpacity>
        <TouchableOpacity onPress={openScreen2} style={styles.next}>Esqueceu sua senha?</TouchableOpacity>
        <TouchableOpacity onPress={openScreen3} style={styles.next}>Clique aqui para fazer login como responsável</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFF",
        justifyContent: "center"
    },
    next: {
        color: "white",
        width: '60%',
        alignItems: 'center',
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: 'black',
        padding: 15,
        fontFamily: 'arial',
        border: 1,
        borderRadius: 10,
        marginBottom: 20,
    }
})