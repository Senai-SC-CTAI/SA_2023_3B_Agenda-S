// import { useState } from 'react'
// import React from 'react'
import { Link } from 'react-router-dom';
import senaiLogo from '../../assets/sesi-senai.png'
import logo from '../../assets/logo.png'
import Footer from '../../components/Footer'
import './App.css'

export const Screen1 = () => (
  <div>
    <header>
          <div className="logoDiv">
              <img src={senaiLogo} alt="SESI SENAI" className='senaiLogo'/>
          </div>
          <div className="agendas">
              <img src={logo} alt="Agenda S" className='logo'/>
              <p className="headerText">Agenda S</p>
          </div>
      </header>

        <div className="container">
            <img src={senaiLogo} alt="SESI SENAI" className='senaiLogoMid'/>
            <div className="buttonsDiv">
                <p className="divTitle">Faça seu Login</p>
                <input className="input" type="text" placeholder="E-mail institucional"/>
                <input className="input" type="password" placeholder="Senha"/>
                <Link to="/gerenciamento"><button className="buttonBlue"><p className="buttonText">Entrar</p></button></Link>
            </div>
        </div>
    <Footer />
  </div>
);

export const Screen2 = () => (
  <>

  </>
)