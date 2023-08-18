import React from 'react';
import { View, StyleSheet, Button} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function Main () {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('SaidaAntecipada')
    }

    function openScreen2(){
        navigation.navigate('SolicitarSaida')
    }

    function openScreen3(){
        navigation.navigate('ChegadaAtrasada')
    }
  
    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={openScreen} style={styles.next}>Saídas Antecipadas</TouchableOpacity>
        <TouchableOpacity onPress={openScreen2} style={styles.next}>Solicitar Saída</TouchableOpacity>
        <TouchableOpacity onPress={openScreen3} style={styles.next}>Chegadas Atrasadas</TouchableOpacity>
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