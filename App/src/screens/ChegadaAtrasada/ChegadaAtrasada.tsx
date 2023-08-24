import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function ChegadaAtrasada() {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Chegadas Atrasadas</Text>
            <MaterialCommunityIcons style={styles.icon} name="clock-alert-outline" size={65} color="#1C8C7D" />

            <View style={styles.historico}>
                <Text style={styles.data}>15/04/2023</Text>
                <Text style={styles.legenda}>(entrou 8:25)</Text>
            </View>
            <View style={styles.historico}>
                <Text style={styles.data}>15/04/2023</Text>
                <Text style={styles.legenda}>(entrou 8:25)</Text>
            </View>
            <View style={styles.historico}>
                <Text style={styles.data}>15/04/2023</Text>
                <Text style={styles.legenda}>(entrou 8:25)</Text>
            </View>
            <View style={styles.historico}>
                <Text style={styles.data}>26/06/2023</Text>
                <Text style={styles.legenda}>(entrou 8:50)</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
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
    data: {
        color: 'black',
        fontSize: 28
    },
    legenda: {
        color: '#FA0000',
    },
    historico: {
        marginBottom: 25,
        marginLeft: 25,
    }
})
