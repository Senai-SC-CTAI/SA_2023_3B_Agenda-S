import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export function Main() {
    const navigation = useNavigation();

    function openScreen(routeName) {
        navigation.navigate(routeName);
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../../../assets/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Bem-Vindo
                    {'\n'}
                    <Text style={styles.agendaText}>à Agenda S</Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => openScreen('SaidaAntecipada')} style={styles.button}>
                    <View style={styles.buttonContent}>
                        <FontAwesome5 style={styles.icon} name="calendar-check" size={60} color="black" />
                        <View style={styles.textContainer}>
                            <Text style={styles.buttonText}>Saída</Text>
                            <Text style={styles.buttonText}>Antecipada</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openScreen('SolicitarSaida')} style={styles.button}>
                    <View style={styles.buttonContent}>
                        <MaterialCommunityIcons style={styles.icon} name="calendar-clock" size={60} color="black" />
                        <View style={styles.textContainer}>
                            <Text style={styles.buttonText}>Solicitar</Text>
                            <Text style={styles.buttonText}>Saída</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openScreen('ChegadaAtrasada')} style={styles.button}>
                    <View style={styles.buttonContent}>
                        <MaterialCommunityIcons style={styles.icon} name="clock-alert-outline" size={60} color="black" />
                        <View style={styles.textContainer}>
                            <Text style={styles.buttonText}>Chegadas</Text>
                            <Text style={styles.buttonText}>Atrasadas</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openScreen('Requests')} style={styles.button}>
                    <View style={styles.buttonContent}>
                        <MaterialCommunityIcons style={styles.icon} name="chat-question-outline" size={60} color="black" />
                        <View style={styles.textContainer}>
                            <Text style={styles.buttonText}>Solicitações</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => openScreen('Login')} style={styles.exitButton}>
                <Ionicons name="exit-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },
    logoContainer: {
        marginTop: '10%',
    },
    logo: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
    },
    header: {
        alignItems: 'center',
        marginTop: '5%',
    },
    headerText: {
        color: '#1C8C7D',
        fontSize: 24,
        textAlign: 'center',
    },
    agendaText: {
        color: '#D9D9D9',
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '20%'
    },
    button: {
        backgroundColor: '#D9D9D9',
        width: '100%',
        height: 110,
        borderRadius: 15,
        margin: 10,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    icon: {
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 24,
    },
    exitButton: {
        position: 'absolute',
        bottom: 15,
    },
});
