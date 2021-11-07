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
  border: 1.5px solid ${(props) => (props.disabled ? 'transparent' : 'var(--gray-40)')};
  border-radius: 0.25rem;
  color: ${(props) => (props.disabled ? 'var(--gray-60)' : 'var(--black)')};
  height: 3rem;
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
    min-height: 3rem;
    outline: 0;
    padding: 0 2.75rem 0 0.5rem;
    width: 100%;

    &::placeholder {
      color: var(--gray-60);
    }
  }

  svg {
    position: absolute;
    right: 0.625rem;
    top: calc(50% - 12px);

    &:hover {
      filter: brightness(0.8);
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
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 1.25rem;
    text-transform: uppercase;
    margin: 1.5rem 0 0.25rem;
  }

  p {
    color: var(--gray-80);
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.25rem;
  }
`

export const Error = styled.p`
  color: var(--orange);
  font-size: 1rem;
  line-height: 1.25rem;
  margin-top: 0.5rem;
`
