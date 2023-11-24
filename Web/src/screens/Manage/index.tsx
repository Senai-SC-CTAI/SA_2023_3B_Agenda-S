import { useState, useEffect } from 'react';
import axios from 'axios';

const [, setUsuarios] = useState([]);
const [novoUsuario, setNovoUsuario] = useState({
    username: '',
    email: '',
    password: '',
    tarefa: {
        nome_tarefa: '',
        status: ''
    },
});

useEffect(() => {
    fetchUsuarios();
}, []);

// GET
const fetchUsuarios = async () => {
    try {
        const response = await axios.get('http://localhost:8090/usuarios');
        setUsuarios(response.data);
    } catch (error) {
        console.error('Erro ao buscar usuarios:', error);
    }
}

export function Manage() {
    return (
        <>
            <p>
                ir para Home
            </p>
        </>
    )
}

