import { useState } from 'react'
// import React from 'react'
import { Link } from 'react-router-dom';
import senaiLogo from '../../assets/sesi-senai.png'
import logo from '../../assets/logo.png'
import Footer from '../../components/Footer'
import './App.css'
import axios from 'axios';

const logar = async (email: string, password: string) => {
  try {
    const response = await axios.post('http://localhost:8090/api/login', {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export function Screen1() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const response = await logar(email, password);
      if (response == "/") {
        alert("Verifique novamente seu login e senha.");
      }
      window.location.href = response;

    } catch (error) {
      console.error('Erro ao efetuar login:', error);
    }
  };

  return (
    <div>
      <header>
        <div className="logoDiv">
          <img src={senaiLogo} alt="SESI SENAI" className='senaiLogo' />
        </div>
        <div className="agendas">
          <img src={logo} alt="Agenda S" className='logo' />
          <p className="headerText">Agenda S</p>
        </div>
      </header>

      <div className="container">
        <img src={senaiLogo} alt="SESI SENAI" className='senaiLogoMid' />
        <div className="buttonsDiv">
          <p className="divTitle">Faça seu Login</p>
          <input
            className="input"
            type="text"
            placeholder="E-mail institucional"
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
          <input
            className="input"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}

          />
          <button
            className="buttonBlue"
            onClick={handleLogin}>
            <p className="buttonText">
              Entrar
            </p>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export const Screen2 = () => (
  <>

  </>
)