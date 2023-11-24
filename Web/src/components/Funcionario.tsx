import axios from 'axios';
import { useEffect, useState } from 'react'

interface Funcionario {
    nome: string;
    cpf: number;
  }
  
export function FuncionarioCadastro(){

    const [funcionarioNome, setFuncionarioNome] = useState("")
    
  // POST
  const handleSubmit = async () => {
    try {
      let novoFuncionario = {
        nome: funcionarioNome,
      }

      await axios.post(`http://localhost:8090/portaria`, novoFuncionario)
      // handleClick()
      setFuncionarioNome("")
      alert("Funcionário " + funcionarioNome + " cadastrado com sucesso")

    } catch (error) {
      console.log('Erro ao criar funcionário: ', error);
    }
  }

    return(
        <>
          <div className="cadastroDiv">
                <p>
                  <span>Informe os dados do </span>
                    <span>
                    funcionário
                    </span>
                </p>
                <input
                  type="text"
                  placeholder='Nome do funcionário'
                  value={funcionarioNome}
                  onChange={(e) => setFuncionarioNome(e.target.value)}
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


export function ViewFuncionarios() {

  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([])


  useEffect(() => {
      fetchFuncionarios();
  }, []);

  // GET
  const fetchFuncionarios = async () => {
      try {
          const response = await axios.get('http://localhost:8090/portaria');
          setFuncionarios(response.data);
      } catch (error) {
          console.log(error);
      }
  }

  // DELETE
  const handleDelete = async (cpf: any) => {
      try {
          await axios.delete(`http://localhost:8090/portaria/${cpf}`);
          fetchFuncionarios();
      } catch (error) {
          console.error('Erro ao excluir funcionário:', error);
      }
  };
  return (
      <>
          <p>
              Funcionários
          </p>

          {funcionarios.map((funcionario, index) => (
              <>
                  <div key={index} className="userItem">
                      <p>{funcionario.nome}</p>
                      <div className="btns">
                          <button>Ver</button>
                          <button className='editBtn'>Editar</button>
                          <button onClick={() => handleDelete(funcionario.cpf)} className='removeBtn'>Excluir</button>
                      </div>
                  </div>
              </>
          ))}
      </>
  )
}