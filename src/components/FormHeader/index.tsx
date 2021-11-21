import React, { ReactNode } from 'react'

import { Container } from './styles'

interface FormHeaderProps {
  children: ReactNode
}

export function FormHeader({ children }: FormHeaderProps) {
  return <Container>{children}</Container>
}
