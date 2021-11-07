import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

export function NavigationBar() {
  return (
    <Container>
      <Link to="home">Início</Link>
    </Container>
  )
}
