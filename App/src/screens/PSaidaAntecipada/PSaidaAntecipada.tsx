import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export function PSaidaAntecipada() {
    const data = [
        { date: '15/04/2023', time: '8:25' },
        { date: '15/04/2023', time: '8:25' },
        { date: '15/04/2023', time: '8:25' },
        { date: '26/06/2023', time: '8:50' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.historico}>
            <Text style={styles.data}>{item.date}</Text>
            <Text style={styles.legenda}>(saiu {item.time})</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <FontAwesome5 style={styles.icon} name="calendar-check" size={65} color="#1C8C7D" />
            </View>
            <Text style={styles.title}>Saídas Antecipadas</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
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
    iconContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        color: '#1C8C7D',
        textAlign: 'center',
        fontSize: 20,
    },
    icon: {
        marginTop: 10,
    },
    data: {
        color: 'black',
        fontSize: 28,
    },
    legenda: {
        color: '#008000',
    },
    historico: {
        marginBottom: 25,
        marginLeft: 25,
    }
});
