import React, { InputHTMLAttributes, ReactElement, useCallback, useState } from 'react'

import { XCircle } from '@somostera/tera-icons'

import { Container, InputInformationContainer, Error, InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  erasable?: boolean
  icon?: () => ReactElement
  errors?: string
  containerStyle?: object
  inputStyle?: object
  onResetValue?: () => void
  characterCount?: boolean
}

export const Input = ({
  erasable = false,
  name,
  label,
  containerStyle = {},
  inputStyle = {},
  onResetValue,
  maxLength,
  errors,
  characterCount = false,
  value,
  onBlur,
  icon: Icon,
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
      <InputInformationContainer>
        {!!label && <label htmlFor={name}>{label}</label>}
        {characterCount && (
          <p>
            {String(value).length}/{maxLength}
          </p>
        )}
      </InputInformationContainer>
      <InputContainer style={containerStyle} isFocused={isFocused} isInvalid={!!errors} disabled={disabled}>
        <input
          {...rest}
          value={value || ''}
          id={name}
          name={name}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          maxLength={maxLength || 200}
          style={inputStyle}
        />
        {Icon && <Icon />}
        {erasable && onResetValue && (
          <button type="button" onClick={onResetValue}>
            <XCircle color="var(--gray-20)" height={24} width={24} />
          </button>
        )}
      </InputContainer>
      {!!errors && <Error>{errors}</Error>}
    </Container>
  )
}
