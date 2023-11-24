import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function PChegadaAtrasada() {
    const data = [
        { date: '15/04/2023', time: '8:25' },
        { date: '15/04/2023', time: '8:25' },
        { date: '15/04/2023', time: '8:25' },
        { date: '26/06/2023', time: '8:50' },
        { date: '27/06/2023', time: '9:00' }, 
        { date: '28/06/2023', time: '8:45' }, 
        { date: '28/06/2023', time: '8:45' }, 
        { date: '28/06/2023', time: '8:45' }, 
        { date: '28/06/2023', time: '8:45' }, 
        { date: '28/06/2023', time: '8:45' }, 
       
    ];

    const renderItem = ({ item }) => (
        <View style={styles.historico}>
            <Text style={styles.data}>{item.date}</Text>
            <Text style={styles.legenda}>(entrou {item.time})</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Chegadas Atrasadas</Text>
                <MaterialCommunityIcons style={styles.icon} name="clock-alert-outline" size={65} color="#1C8C7D" />
            </View>
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
    header: {
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
        color: '#FA0000',
    },
    historico: {
        marginBottom: 25,
        marginLeft: 25,
    }
});
