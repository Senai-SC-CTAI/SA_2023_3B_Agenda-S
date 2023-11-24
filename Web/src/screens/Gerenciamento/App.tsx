import './App.css'
import senaiLogo from '../../assets/sesi-senai.png'
import add from '../../assets/icons/add.svg'
import search from '../../assets/icons/search.svg'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios';

// users type 
import { ResponsavelCadastro, ViewResponsaveis } from '../../components/Responsavel'
import { ProfessorCadastro, ViewProfessores } from '../../components/Professor'
import { FuncionarioCadastro, ViewFuncionarios } from '../../components/Funcionario'

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

  /// Alunos

  const [alunos, setAlunos] = useState<Aluno[]>([])

  const [userName, setUserName] = useState("")
  const [userTurma, setUserTurma] = useState("")
  const [userResponsavel, setUserResponsavel] = useState("")
  const [userTelefone, setUserTelefone] = useState("")

  const [selectedAluno, setSelectedAluno] = useState<Aluno | null>(null);

  // Select do usuario
  const [selectedUser, setSelectedUser] = useState("aluno");
  const handleUserChange = (event: { target: { value: any } }) => {
    const selectedOption = event.target.value;
    setSelectedUser(selectedOption);
  };

  // forms de cada tipo de usuario
  const [alunoVisible, setAlunoVisible] = useState(false);
  const [professorVisible, setProfessorVisible] = useState(false);
  const [responsavelVisible, setResponsavelVisible] = useState(false);
  const [funcionarioVisible, setFuncionarioVisible] = useState(false);

  useEffect(() => {
    if (selectedUser === "aluno") {
      setProfessorVisible(false);
      setResponsavelVisible(false);
      setFuncionarioVisible(false);
      setAlunoVisible(true);
    } else if (selectedUser === "professor") {
      setAlunoVisible(false);
      setResponsavelVisible(false);
      setFuncionarioVisible(false);
      setProfessorVisible(true);
    } else if (selectedUser === "responsavel") {
      setAlunoVisible(false);
      setProfessorVisible(false);
      setFuncionarioVisible(false);
      setResponsavelVisible(true);
    } else if (selectedUser === "funcionario") {
      setAlunoVisible(false);
      setProfessorVisible(false);
      setResponsavelVisible(false);
      setFuncionarioVisible(true);
    }
  }, [selectedUser]);

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
          {!isVisible && (<span style={{ fontWeight: 600, fontSize: 20 }}>Cadastrar</span>)}
          <select name="type" className='select' value={selectedUser} onChange={handleUserChange}>
            <option value="aluno">Aluno</option>
            <option value="professor">Professor</option>
            <option value="responsavel">Responsável</option>
            <option value="funcionario">Funcionário</option>
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
            {alunoVisible && (
              <>
                <p>
                  Alunos
                </p>
                {alunos.map((aluno, index) => (
                  <>
                    <div key={index} className="userItem">
                      <p>{aluno.nome}</p>
                      <div className="btns">
                        <button>Ver</button>
                        <button onClick={() => handleEditClick(aluno)} className='editBtn'>Editar</button>
                        <button onClick={() => handleDelete(aluno.matricula)} className='removeBtn'>Excluir</button>
                      </div>
                    </div>
                  </>
                ))}
              </>
            )}
            {professorVisible && (
              <ViewProfessores />
              )}
            {responsavelVisible && (
              <p>
                <ViewResponsaveis />
              </p>
            )}
            {funcionarioVisible && (
              <p>
                <ViewFuncionarios />
              </p>
            )}
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


          </div>
        ) :
          (
            <div className="containerGerenc">
              {alunoVisible && (
                <>
                  <div className="cadastroDiv">
                    <p>
                      <span>Informe os dados do </span>
                      <span>
                        aluno
                      </span>
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
                      onClick={handleSubmit}
                      className='subBtn'
                    >
                      Cadastrar
                    </button>
                  </div>
                </>
              )}
              {professorVisible && (
                <>
                  <ProfessorCadastro />
                </>
              )}
              {responsavelVisible && (
                <>
                  <ResponsavelCadastro />
                </>
              )}
              {funcionarioVisible && (
                <>
                  <FuncionarioCadastro />
                </>
              )}
              <span onClick={handleClick} style={{ cursor: "pointer" }}>sair</span>
            </div>
          )}

      </section>
    </>
  )
}

export default Gerenciamento;
