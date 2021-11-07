import React, { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: object
}

export function Button({ children, buttonStyle = {}, ...rest }: ButtonProps) {
  return (
    <Container style={buttonStyle} {...rest}>
      {children}
    </Container>
  )
}
