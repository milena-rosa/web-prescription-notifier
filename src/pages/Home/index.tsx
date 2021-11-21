import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import { Container, Sidebar, MainContent } from './styles'

export function Home() {
  return (
    <Container>
      <Sidebar>
        <Link to="registration">Cadastro de Profissionais</Link>
        <Link to="authorization">Autorização</Link>
        <Link to="recordPrinting">Impressão de Registros</Link>
        <Link to="numbering">Numeração Concedida - DRS X</Link>
      </Sidebar>
      <MainContent>
        <footer>
          <img src={logo} alt="Vigilância Sanitária" />
        </footer>
      </MainContent>
    </Container>
  )
}
