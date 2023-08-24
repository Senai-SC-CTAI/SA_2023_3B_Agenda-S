import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export function PSaidaAntecipada() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Saídas Antecipadas</Text>
            <FontAwesome5 style={styles.icon} name="calendar-check" size={65} color="#1C8C7D" />

            <View style={styles.historico}>
                <Text style={styles.data}>15/04/2023</Text>
                <Text style={styles.legenda}>(saiu 8:25)</Text>
            </View>
            <View style={styles.historico}>
                <Text style={styles.data}>15/04/2023</Text>
                <Text style={styles.legenda}>(saiu 8:25)</Text>
            </View>
            <View style={styles.historico}>
                <Text style={styles.data}>15/04/2023</Text>
                <Text style={styles.legenda}>(saiu 8:25)</Text>
            </View>
            <View style={styles.historico}>
                <Text style={styles.data}>26/06/2023</Text>
                <Text style={styles.legenda}>(saiu 8:50)</Text>
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
        color: '#008000',
    },
    historico: {
        marginBottom: 25,
        marginLeft: 25,
    }
})
