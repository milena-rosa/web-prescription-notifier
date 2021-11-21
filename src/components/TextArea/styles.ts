import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

interface TextAreaContainerProps {
  isFocused: boolean
  isInvalid: boolean
  disabled: boolean
}

export const TextAreaContainer = styled.div<TextAreaContainerProps>`
  background: ${(props) => (props.disabled ? 'var(--gray-light)' : 'var(--green-primary-15)')};
  border: 1px solid ${(props) => (props.disabled ? 'transparent' : 'var(--green-primary)')};
  border-radius: 0.625rem;
  color: ${(props) => (props.disabled ? 'var(--gray)' : 'var(--black)')};
  height: 14rem;
  position: relative;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: var(--green-primary);
    `}

  ${(props) =>
    props.isInvalid &&
    css`
      border-color: var(--red);
    `}

  textarea {
    background: transparent;
    border: 0;
    font-size: 1.5rem;
    line-height: 1.75rem;
    height: 100%;
    outline: 0;
    padding: 0.75rem;
    width: 100%;

    &::placeholder {
      color: var(--gray);
    }
  }
`

export const TextAreaInformationContainer = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;

  label {
    color: var(--black);
    display: block;
    font-size: 1.25rem;
    line-height: 1.4375rem;
    margin-bottom: 0.5rem;
    padding-left: 0.625rem;
    text-transform: uppercase;
  }
`

export const Error = styled.p`
  color: var(--red);
  font-size: 1rem;
  line-height: 1.25rem;
  margin-top: 0.5rem;
`
