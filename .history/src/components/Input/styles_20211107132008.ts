import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

interface InputContainerProps {
  isFocused: boolean
  isInvalid: boolean
  disabled: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  background: ${(props) => (props.disabled ? 'var(--gray-20)' : 'var(--green-primary-15)')};
  border: 1px solid ${(props) => (props.disabled ? 'transparent' : 'var(--green-primary)')};
  border-radius: 0.625rem;
  color: ${(props) => (props.disabled ? 'var(--gray-60)' : 'var(--black)')};
  height: 1.76rem;
  position: relative;

  ${(props) =>
    props.isFocused &&
    css`
      border-color: var(--blue-primary);
    `}

  ${(props) =>
    props.isInvalid &&
    css`
      border-color: var(--orange);
    `}

  input {
    background: transparent;
    border: 0;
    font-size: 1rem;
    line-height: 1.25rem;
    height: 100%;
    min-height: 1.76rem;
    outline: 0;
    padding-left: 0.58rem;
    width: 100%;

    &::placeholder {
      color: var(--gray);
    }
  }
`

export const InputInformationContainer = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;

  label {
    color: var(--black);
    display: block;
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.3125rem;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }
`

export const Error = styled.p`
  color: var(--orange);
  font-size: 1rem;
  line-height: 1.25rem;
  margin-top: 0.5rem;
`