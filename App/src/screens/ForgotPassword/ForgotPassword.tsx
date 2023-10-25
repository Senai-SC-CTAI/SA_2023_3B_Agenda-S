import React, { useState } from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import CustomButton from '../../components/Button/button';
import CustomInput from '../../components/Input/input';
import { useNavigation } from '@react-navigation/native';


export function ForgotPassword() {
    const navigation = useNavigation();

    function openScreen() {
        navigation.navigate('Main')
    }

   

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/logo.png')} style={styles.logo} />
                <Text style={styles.titulo}>Esqueceu sua senha?</Text>
            </View>
            <View style={styles.main}>
                <CustomInput placeholderText={"E-mail de recuperação"} />
                
              
                <CustomButton onPress={openScreen} buttonText={"Enviar"} />
                
            </View>
                <Image source={require('../../../assets/sesi-senai.png')} style={styles.senai} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center"
    },
    header: {
        position: 'absolute',
        top: '5%',
        width: '100%',
    },
    logo: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: 200,
        height: 100,
    },
    main: {
        alignItems: 'center',
        gap: 20,
    },
    text: {
        fontSize: 16,
        width: "66%",
        textAlign: "center",
        marginTop: '5%',
    },
    titulo: {
        fontSize: 26,
        width: "66%",
        textAlign: "center",
        alignSelf: 'center',
        // position: 'fixed',
        top: '30%',
    },
    senai: {
        width: '80%',
        height: '15%',
        alignSelf: 'center',
        resizeMode: 'contain',
         position: 'fixed',
         bottom: '2%'
    },
    input: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 7,
        alignItems: 'center',
        width: 300,
        height: 45,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 4 }, 
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      icon: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
})