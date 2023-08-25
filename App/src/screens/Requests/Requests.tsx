import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function Requests() {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Saídas Solicitadas</Text>
            <MaterialCommunityIcons style={styles.icone} name="frequently-asked-questions" size={65} color="#1C8C7D" />
            <Text style={styles.texto1}>15/04/23 - 12:40</Text>
            <View style={styles.buttons1}>
                <TouchableOpacity style={styles.button2}>
                    <Text style={{ color: "white", fontSize: 20, textAlign: "center", marginTop: 8 }}>Cancelar</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.texto2}>26/06/23 - 12:40</Text>
            <View style={styles.buttons2}>
                <TouchableOpacity style={styles.button4}>
                    <Text style={{ color: "white", fontSize: 20, textAlign: "center", marginTop: 8 }}>Cancelar</Text>
                </TouchableOpacity>
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
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333'
    },
    titulo: {
        fontSize: 20,
        top: "15%",
    },
    icone: {
        alignSelf: "center",
        top: "25%",
    },
    texto1: {
        fontSize: 20,
        marginLeft: 10
    },
    buttons1: {
        flexDirection: "row",
    },
    button2: {
        backgroundColor: "#F00",
        borderRadius: 5,
        width: 132,
        height: 44,
        margin: 15
    },
    texto2: {
        fontSize: 20,
        marginLeft: 10
    },
    buttons2: {
        flexDirection: "row"
    },
    button4: {
        backgroundColor: "#F00",
        borderRadius: 5,
        width: 132,
        height: 44,
        margin: 15
    }
})
