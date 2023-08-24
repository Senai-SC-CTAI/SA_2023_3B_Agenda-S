import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomButton from '../../components/Button/button';
import CustomInput from '../../components/Input/input';

export function SolicitarSaida() {
    return (
        <View style={styles.container}>
            
            <MaterialCommunityIcons style={styles.icon} name="calendar-clock" size={65} color="#1C8C7D" />
            <Text style={styles.title}>Solicitar Saída</Text>
            <View style={styles.justificar}>
                <Text style={styles.legenda}>Justifique (Opicional):</Text>
                <CustomInput placeholderText={'Escreva'} />
            </View>
            <View style={styles.horario}>
                <Text style={styles.legenda}>Horário:</Text>
                <CustomInput placeholderText={'__:__'} />
            </View>
            <View style={styles.button}>
                <CustomButton buttonText={"Enviar"} />
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
    title: {
        color: '#1C8C7D',
        alignText: 'center',
        fontSize: 20,
        alignSelf: 'center',
        position: 'fixed',
        top: '25%'
    },
    icon: {
        alignSelf: 'center',
        position: 'fixed',
        top: '15%'
    },
    justificar: {
        marginBottom: 25
    },
    horario: {
        marginBottom: 25
    },
    legenda: {
        marginBottom: 15,
        marginLeft: 50
    },
    button: {
        marginTop: 15,
        marginBottom: 25,
        alignItems: 'center'
    }
})
