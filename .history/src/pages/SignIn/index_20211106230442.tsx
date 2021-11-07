import React from 'react'

import { Container } from './styles'

import logo from '../../assets/logo.png'

export const SignIn: React.FC = () => {
  return (
    <Container>
      <header>Software de Cadastro de Notificadores de Receituários</header>
      <div>oi</div>
      <footer>
        <img src={logo} alt="Vigilância Sanitária" />
      </footer>
    </Container>
  )
}
