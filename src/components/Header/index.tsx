import React from 'react'
import { useAuth } from '../../hooks/useAuth'

import { Container } from './styles'

export function Header() {
  const { user } = useAuth()

  return (
    <Container>
      <p>Vigilância Sanitária</p>
      <h1>Software de Cadastro de Notificadores de Receituário</h1>
      <p>{user.name}</p>
    </Container>
  )
}
