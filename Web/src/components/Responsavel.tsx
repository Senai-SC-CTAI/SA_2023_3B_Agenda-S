import axios from 'axios';
import { useEffect, useState } from 'react'

interface Responsavel {
    nome: string;
    filho: string;
    cpf: number;
}

export function ResponsavelCadastro() {

    const [filho, setFilho] = useState("")
    const [nomeRes, setNomeRes] = useState("")

    // POST
    const handleSubmit = async () => {
        try {
            let novoResponsavel = {
                nome: nomeRes,
                filho: filho,
            }

            await axios.post(`http://localhost:8090/pais`, novoResponsavel)
            // handleClick()
            setFilho("")
            setNomeRes("")
            alert("Responsável " + nomeRes + " cadastrado com sucesso")

        } catch (error) {
            console.log('Erro ao criar Responsável: ', error);
        }
    }

    return (
        <>
            <div className="cadastroDiv">
                <p>
                    <span>Informe os dados do </span>
                    <span>
                        Responsável
                    </span>
                </p>
                <input
                    type="text"
                    placeholder='Nome do Responsável'
                    value={nomeRes}
                    onChange={(e) => setNomeRes(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Nome do Filho'
                    value={filho}
                    onChange={(e) => setFilho(e.target.value)}
                />
                <button
                    type='submit'
                    onClick={handleSubmit}
                    className='subBtn'
                >
                    Cadastrar
                </button>
            </div>
        </>
    )
}


export function ViewResponsaveis() {

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
    return (
        <>
            <p>
                Responsáveis
            </p>

            {responsaveis.map((responsavel, index) => (
                <>
                    <div key={index} className="userItem">
                        <p>{responsavel.nome}</p>
                        <div className="btns">
                            <button>Ver</button>
                            <button className='editBtn'>Editar</button>
                            <button onClick={() => handleDelete(responsavel.cpf)} className='removeBtn'>Excluir</button>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}