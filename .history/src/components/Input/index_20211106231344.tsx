import React, { InputHTMLAttributes, ReactElement, useCallback, useState } from 'react'

import { Container, InputInformationContainer, Error, InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  errors?: string
  containerStyle?: object
  inputStyle?: object
}

export const Input = ({
  name,
  label,
  containerStyle = {},
  inputStyle = {},
  errors,
  value,
  onBlur,
  disabled = false,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
        onBlur(event)
      }
      setIsFocused(false)
    },
    [onBlur]
  )

  return (
    <Container>
      <InputInformationContainer>{!!label && <label htmlFor={name}>{label}</label>}</InputInformationContainer>
      <InputContainer style={containerStyle} isFocused={isFocused} isInvalid={!!errors} disabled={disabled}>
        <input
          {...rest}
          value={value || ''}
          id={name}
          name={name}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          style={inputStyle}
        />
      </InputContainer>
      {!!errors && <Error>{errors}</Error>}
    </Container>
  )
}
