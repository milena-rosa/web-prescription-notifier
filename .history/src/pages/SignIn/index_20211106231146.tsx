import React from 'react'

import { Container } from './styles'

import logo from '../../assets/logo.png'
import { Input } from '../../components/Input'

export const SignIn: React.FC = () => {
  return (
    <Container>
      <header>Software de Cadastro de Notificadores de Receituários</header>
      <div>
        <Input name="user" label="Usuário" type="text" />
      </div>
      <footer>
        <img src={logo} alt="Vigilância Sanitária" />
      </footer>
    </Container>
  )
}
