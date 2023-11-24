import axios from 'axios';
import { useEffect, useState } from 'react'

interface Professor {
    nome: string;
    disciplina: string;
    cpf: number;
  }

export function ProfessorCadastro() {

    const [profNome, setProfNome] = useState("")
    const [disciplina, setDisciplina] = useState("")

    // POST
    const handleSubmit = async () => {
        try {
            let novoProfessor = {
                nome: profNome,
                disciplina: disciplina,
            }

            await axios.post(`http://localhost:8090/professor`, novoProfessor)
            // handleClick()
            setProfNome("")
            setDisciplina("")
            alert("Professor " + profNome + " cadastrado com sucesso")

        } catch (error) {
            console.log('Erro ao criar professor: ', error);
        }
    }

    return (
        <>
            <div className="cadastroDiv">
                <p>
                    <span>Informe os dados do </span>
                    <span>
                        professor
                    </span>
                </p>
                <input
                    type="text"
                    placeholder='Nome do Professor'
                    value={profNome}
                    onChange={(e) => setProfNome(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Disciplina (Unidade Curricular)'
                    value={disciplina}
                    onChange={(e) => setDisciplina(e.target.value)}
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

export function ViewProfessores() {

  const [professores, setProfessores] = useState<Professor[]>([])

  useEffect(() => {
    fetchProfessor();
  }, []);

  // GET
  const fetchProfessor = async () => {
    try {
      const response = await axios.get('http://localhost:8090/professor');
      setProfessores(response.data);
    } catch (error) {
      console.log(error);
    }
  }

    // DELETE
    const handleDelete = async (cpf: any) => {
        try {
          await axios.delete(`http://localhost:8090/professor/${cpf}`);
          fetchProfessor();
        } catch (error) {
          console.error('Erro ao excluir professor:', error);
        }
      };
    return (
        <>
            <p>
                Professores
            </p>
            
            {professores.map((professor, index) => (
                <>
                    <div key={index} className="userItem">
                        <p>{professor.nome}</p>
                        <p>{professor.disciplina}</p>
                        <div className="btns">
                            <button>Ver</button>
                            <button className='editBtn'>Editar</button>
                            <button onClick={() => handleDelete(professor.cpf)} className='removeBtn'>Excluir</button>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}