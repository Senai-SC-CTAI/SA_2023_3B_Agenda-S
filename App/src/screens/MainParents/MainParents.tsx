import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function MainParents() {
    const navigation = useNavigation();
  
    function saidaAntecipada (){
        navigation.navigate('PSaidaAntecipada')
    }
    function solicitarSaida(){
        navigation.navigate('PSolicitarSaida')
    }
    function chegadaAtrasada (){
        navigation.navigate('PChegadaAtrasada')
    }
    function requests (){
        navigation.navigate('PRequests')
    }

    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={saidaAntecipada} style={styles.button}>Saídas Antecipadas</TouchableOpacity>
        <TouchableOpacity onPress={solicitarSaida} style={styles.button}>Solicitar Saída</TouchableOpacity>
        <TouchableOpacity onPress={chegadaAtrasada} style={styles.button}>Chegadas Atrasadas</TouchableOpacity>
        <TouchableOpacity onPress={requests} style={styles.button}>Solicitações</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
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