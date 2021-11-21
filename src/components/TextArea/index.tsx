import React, { InputHTMLAttributes, useCallback, useState } from 'react'

import { Container, TextAreaContainer, Error, TextAreaInformationContainer } from './styles'

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string
  label?: string
  errors?: string
  containerStyle?: object
  textAreaStyle?: object
}

export const TextArea = ({
  name,
  label,
  containerStyle = {},
  textAreaStyle = {},
  errors,
  value,
  onBlur,
  disabled = false,
  ...rest
}: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleTextAreaFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleTextAreaBlur = useCallback(
    (event: React.FocusEvent<HTMLTextAreaElement>) => {
      if (onBlur) {
        onBlur(event)
      }
      setIsFocused(false)
    },
    [onBlur]
  )

  return (
    <Container>
      <TextAreaInformationContainer>{!!label && <label htmlFor={name}>{label}</label>}</TextAreaInformationContainer>
      <TextAreaContainer style={containerStyle} isFocused={isFocused} isInvalid={!!errors} disabled={disabled}>
        <textarea
          {...rest}
          value={value || ''}
          id={name}
          name={name}
          onBlur={handleTextAreaBlur}
          onFocus={handleTextAreaFocus}
          style={textAreaStyle}
          rows={5}
        />
        {/* <TextArea
          {...rest}
          type="tex"
          value={value || ''}
          id={name}
          name={name}
          onFocus={handleTextAreaFocus}
          onBlur={handleTextAreaBlur}
          style={TextAreaStyle}
        /> */}
      </TextAreaContainer>
      {!!errors && <Error>{errors}</Error>}
    </Container>
  )
}
