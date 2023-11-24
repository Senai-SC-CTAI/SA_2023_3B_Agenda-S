import React, { useEffect, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import axios from 'axios';

interface Responsavel {
    nome: string;
    filho: string;
    cpf: number;
}

export function PRequests() {

    const [responsaveis, setResponsaveis] = useState<Responsavel[]>([])

    useEffect(() => {
        fetchResponsaveis();
    }, []);

    // GET
    const fetchResponsaveis = async () => {
        try {
            const response = await axios.get('http://localhost:8090/pais');
            setResponsaveis(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    // DELETE
    const handleDelete = async (cpf: any) => {
        try {
            await axios.delete(`http://localhost:8090/pais/${cpf}`);
            fetchResponsaveis();
        } catch (error) {
            console.error('Erro ao excluir professor:', error);
        }
    };

    // const data = [
    //     { date: '15/04/23 - 12:40' },
    //     { date: '26/06/23 - 12:40' },
    //     { date: '26/06/23 - 12:40' },
    //     { date: '26/06/23 - 12:40' },
     
    // ];

    const renderItem = ({ item }) => (
        <View style={styles.historico}>
            <View style={styles.dataContainer}>
                <Text style={styles.data}>{item.date}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.centeredContainer}>
                <View style={styles.iconContainer}>
                    <MaterialCommunityIcons style={styles.icone} name="frequently-asked-questions" size={65} color="#1C8C7D" />
                </View>
                <Text style={styles.titulo}>Saídas Solicitadas</Text>
                {/* <Text>{responsaveis.nome}</Text> */}
            </View>
            {/* <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20, 
    },
    titulo: {
        fontSize: 20,
        color: '#1C8C7D',
        marginTop: 10, 
    },
    iconContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    icone: {
        marginTop: 10,
    },
    historico: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 10,
        marginLeft: 20, 
    },
    dataContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    data: {
        fontSize: 20,
        marginLeft: 10,
    },
    button: {
        backgroundColor: '#F00',
        borderRadius: 5,
        width: 132,
        height: 44,
        marginTop: 10, 
        marginLeft: 20, 
        justifyContent: 'center', // Centralize verticalmente
        alignItems: 'center', // Centralize horizontalmente
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
});
