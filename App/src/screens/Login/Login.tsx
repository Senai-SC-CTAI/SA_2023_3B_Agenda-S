import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Button} from 'react-native';
import CustomButton from '../../components/Button/button';
import CustomInput from '../../components/Input/input';
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
        <View style={styles.header}>
            <Image style={styles.icon} source={require('../../../assets/icon.png')}/>
        </View>
        <View style={styles.main}>
            <CustomInput placeholderText={"E-mail institucional"}/>
            <CustomButton onPress={openScreen} buttonText={"Entrar"}/>
            <CustomButton onPress={openScreen2} buttonText={"Esqueceu sua senha?"}/>
            <Text style={styles.clickHere}>Clique <span style={styles.clickHereGreen}>
                <TouchableOpacity onPress={openScreen3}>aqui</TouchableOpacity></span> para fazer seu Login como responsável</Text>
        </View>
        <View style={styles.footer}>

        </View>
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
        borderRadius: 10,
        marginBottom: 20,
    },
    header: {

    },
    footer: {

    },
    icon: {
        width: 30,
        marginTop: '20%',
        height: '30%',
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    main: {
        alignItems: 'center',
        gap: 20,
    },
    clickHere: {
        fontSize: 16,
        width: "66%",
        textAlign: "center",
    
    },
    clickHereGreen: {
        color: "#1C8C7D",
        fontWeight: "bold",
    },
})