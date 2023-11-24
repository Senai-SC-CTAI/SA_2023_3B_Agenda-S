import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomButton from '../../components/Button/button';
import CustomInput from '../../components/Input/input';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export function SolicitarSaida() {

    const [descricao, setDescricao] = useState("")
    const [horario, setHorario] = useState("")
    const [status, setStatus] = useState("")
    
    // POST
    const handleSubmit = async () => {
      try {
        let novaSolicitacao = {
          descricao: descricao,
          horario: horario,
        }
  
        await axios.post(`http://localhost:8090/solicitacao`, novaSolicitacao)
        // handleClick()
        setDescricao("")
        setHorario("")
        alert("Solicitacao enviada")
  
      } catch (error) {
        console.log('Erro ao criar soliciatacao: ', error);
      }
    }

    return (
        <View style={styles.container}>
            
            <MaterialCommunityIcons style={styles.icon} name="calendar-clock" size={65} color="#1C8C7D" />
            <Text style={styles.title}>Solicitar Saída</Text>
            <View style={styles.justificar}>
                <Text style={styles.legenda}>Justifique (Opcional):</Text>
                <TextInput placeholder={'Escreva'} value={descricao} onChangeText={(e) => setDescricao(e)} />
            </View>
            <View style={styles.horario}>
                <Text style={styles.legenda}>Horário:</Text>
                <TextInput placeholder={'__:__'} value={horario} onChangeText={(e) => setHorario(e)} />
            </View>
            <View style={styles.button}>
                <TouchableOpacity 
                 onPress={handleSubmit}>
                    Enviar
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
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
