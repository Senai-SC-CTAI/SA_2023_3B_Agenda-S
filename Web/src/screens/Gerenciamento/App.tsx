import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import senaiLogo from '../../assets/sesi-senai.png'
import add from '../../assets/icons/add.svg'
import search from '../../assets/icons/search.svg'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';

interface Aluno {
  nome: string;
  turma: string;
  responsavel: string;
  matricula: number;
}

function Gerenciamento() {

  const [isVisible, setIsVisible] = useState(true)
  const [isEditVisible, setIsEditVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }
  const handleEditClick = (aluno: Aluno) => {
    console.log('Aluno selecionado para edição:', aluno);
    setSelectedAluno(aluno);
    setIsEditVisible(!isEditVisible)
  }

  const [alunos, setAlunos] = useState<Aluno[]>([])

  const [userName, setUserName] = useState("")
  const [userTurma, setUserTurma] = useState("")
  const [userResponsavel, setUserResponsavel] = useState("")
  const [userTelefone, setUserTelefone] = useState("")

  const [selectedAluno, setSelectedAluno] = useState<Aluno | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  // GET
  const fetchUser = async () => {
    try {
      const response = await axios.get('http://localhost:8090/aluno');
      setAlunos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // POST
  const handleSubmit = async () => {
    try {
      let novoAluno = {
        nome: userName,
        turma: userTurma,
        pais: userResponsavel,
        telefone: userTelefone,
      }
     
        await axios.post(`http://localhost:8090/aluno`, novoAluno)
        fetchUser();
        // handleClick()
        setUserName("")
        setUserResponsavel("") 
        setUserTurma("")
        setUserTelefone("")
        alert(userName + " cadastrado com sucesso")
      
    } catch (error) {
      console.log('Erro ao criar alubo: ', error);
    }
  }

  // DELETE
  const handleDelete = async (matricula: any) => {
    try {
      await axios.delete(`http://localhost:8090/aluno/${matricula}`);
      fetchUser();
    } catch (error) {
      console.error('Erro ao excluir aluno:', error);
    }
  };

  // PUT
  const handleUpdate = async (matricula: number | undefined) => {
    try {
      if (!matricula) {
        console.error('Matrícula inválida para atualização.');
        return;
      }
      let aluno = {
        nome: userName,
      }
      await axios.put(`http://localhost:8090/aluno/${matricula}`, aluno)
      fetchUser();
    } catch (error) {
      console.error('Erro ao atualizar aluno:', error);
    }
  };

  return (
    <>

      <header>
        <div className="logoDiv">
          <img src={senaiLogo} alt="SESI SENAI" className='senaiLogo' />
        </div>
        <div className="agendas">
          <p className="headerText">Gerenciamento</p>
          <Link to="/">
            <p className="headerText">Sair</p>
          </Link>
        </div>
      </header>

      <section className='main'>
        <div style={{ display: "flex", alignItems: 'center', gap: 12, marginTop: "15%" }}>
          {!isVisible && (<span>Cadastrar</span>)}
          <select name="type" className='select'>
            <option value="0">Aluno</option>
            <option value="1">Professor</option>
          </select>
        </div>
        <div className="inputSearch">
          <button className='btn' onClick={handleClick}>
            <img src={add} />
          </button>
          <input type="text" />
          <img src={search} />
        </div>
        {isVisible ? (
          <div className="containerGerenc">
            <p>Alunos</p>
            {isEditVisible && selectedAluno && (
              <div className="editDiv">
                <input
                  type="text"
                  placeholder='Nome'
                  value={selectedAluno?.nome || ''}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <button
                  type='submit'
                  onClick={() => handleUpdate(selectedAluno.matricula)}>
                  Atualizar
                </button>
              </div>
            )}
            {alunos.map((aluno, index) => (
              <>
                <div key={index} className="userItem">
                  <p>{aluno.nome}</p>
                  <div className="btns">
                    <button>Ver</button>
                    <button onClick={() => handleEditClick(aluno)}>Editar</button>
                    <button onClick={() => handleDelete(aluno.matricula)}>Excluir</button>
                  </div>
                </div>
              </>
            ))}

          </div>
        ) :
          (
            <div className="containerGerenc">
              <div className="cadastroDiv">
                <p>
                  <span>Informe</span> os dados do aluno
                </p>
                <input
                  type="text"
                  placeholder='Nome'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder='Turma'
                  value={userTurma}
                  onChange={(e) => setUserTurma(e.target.value)}
                />
                <div className="input-group">
                  <input
                    type="text"
                    placeholder='Nome do Responsável' 
                    value={userResponsavel}
                    onChange={(e) => setUserResponsavel(e.target.value)}
                    />
                  <input
                    type="text"
                    placeholder='Telefone' 
                    value={userTelefone} 
                    onChange={(e) => setUserTelefone(e.target.value)}
                    />
                </div>
                <button
                  type='submit'
                  onClick={handleSubmit}>
                  Cadastrar
                </button>
              </div>
            </div>
          )}

      </section>
    </>
  )
}

export default Gerenciamento;
