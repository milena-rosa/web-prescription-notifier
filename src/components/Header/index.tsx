import React from 'react'
import { useAuth } from '../../hooks/useAuth'

import { Container } from './styles'

export function Header() {
  const { user, signOut } = useAuth()

  return (
    <Container>
      <p>Vigilância Sanitária</p>
      <h1>Software de Cadastro de Notificadores de Receituário</h1>
      <div>
        <p>{user.name}</p>
        <span>
          <button onClick={() => signOut()}>Sair</button>
        </span>
      </div>
    </Container>
  )
}
