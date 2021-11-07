import React from 'react'

import logo from '../../assets/logo.png'
import { Button } from '../../components/Button'
import { Container, Sidebar, MainContent } from './styles'

export function Home() {
  return (
    <Container>
      <Sidebar>
        <Button buttonStyle={{ height: '3.75rem', marginBottom: '2rem' }}>Cadastro de Profissionais</Button>
        <Button buttonStyle={{ height: '3.75rem', marginBottom: '2rem' }}>Autorização</Button>
        <Button buttonStyle={{ height: '3.75rem', marginBottom: '2rem' }}>Impressão de Registros</Button>
        <Button buttonStyle={{ height: '3.75rem' }}>Numeração Concedida - DRS X</Button>
      </Sidebar>
      <MainContent>
        <footer>
          <img src={logo} alt="Vigilância Sanitária" />
        </footer>
      </MainContent>
    </Container>
  )
}
