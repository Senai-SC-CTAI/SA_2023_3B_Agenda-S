import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import CustomButton from '../../components/Button/button';
import CustomInput from '../../components/Input/input';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const logar = async (email:string, password:string) => {
    try {
    const response = await axios.post('http://localhost:8090/api/login', {
    email: email,
    password: password,
    });
    return response.data;
    } catch (error) {
    throw error;
    }
   };


export function Login() {

    // hide password
    // const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    // ?

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        try {
            const response = await logar(email, password);
            if (response == "/gerenciamento") {
                loginTrue()
            } else {
                alert("Verifique novamente seu login e senha.");
            }
            //da pra fazer com o navigate também

        } catch (error) {
            console.error('Erro ao se logar:', error);
        }
    };

    const navigation = useNavigation();

    function openScreen() {
        navigation.navigate('Main')
    }

    function openScreen2() {
        navigation.navigate('ForgotPassword')
    }

    function openScreen3() {
        navigation.navigate('ParentsLogin')
    }

    function loginTrue() {
        navigation.navigate('Main')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../assets/logo.png')} style={styles.logo} />
                <Text style={styles.titulo}>Faça seu Login</Text>
            </View>
            <View style={styles.main}>
                {/* <CustomInput placeholderText={"E-mail institucional"} /> */}
                <TextInput
                style={styles.input} placeholder="E-mail institucional"
                value={email} onChangeText={(text) => setEmail(text)}/>
                <View style={styles.icon}>
                    <TouchableOpacity style={styles.eyeButton}>
                        <Icon name={hidePassword ? 'eye' : 'eye-slash'} size={20} style={styles.eye} onPress={togglePasswordVisibility} />
                    </TouchableOpacity>
                    <TextInput 
                    style={styles.input} placeholder="Senha" secureTextEntry={hidePassword} 
                    value={password} onChangeText={(text) => setPassword(text)}
                    />
                </View>

                {/* <CustomButton onClick={handleLogin} buttonText={"Entrar"} /> */}
                <TouchableOpacity
                    onPress={handleLogin} style={styles.button}> 
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <Text style={styles.text}><TouchableOpacity onPress={openScreen2}>Esqueceu sua senha?</TouchableOpacity></Text>
                <Text style={styles.text2}>Clique <span style={styles.clickHereGreen}>
                    <TouchableOpacity onPress={openScreen3}>aqui</TouchableOpacity></span> para fazer seu Login como responsável</Text>
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
        position: 'absolute',
        top: '5%',
        width: '100%',
    },
    logo: {
        // width: '50%',
        // height: '70%',
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
    text2: {
        fontSize: 16,
        width: "66%",
        textAlign: "center",

    },
    clickHereGreen: {
        color: "#1C8C7D",
        fontWeight: "bold",
    },
    senai: {
        width: '80%',
        height: '15%',
        alignSelf: 'center',
        resizeMode: 'contain',
        position: 'fixed',
        bottom: '2%'
    },
    eyeButton: {
        justifyContent: 'center',
    },
    eye: {
        height: '10',
        position: 'fixed',
        right: 0,
        width: '20%',
        resizeMode: 'contain',
        color: '555',
        alignSelf: 'center',
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
})