import styled, { css } from 'styled-components'
import { animated as Animated } from 'react-spring'

interface ContainerProps {
  type?: 'success' | 'error' | 'info'
  hasdescription: number
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: var(--yellow);
  `,
  success: css`
    background: #e6fffa;
    color: var(--green-primary);
  `,
  error: css`
    background: #fddede;
    color: var(--red);
  `
}

export const Container = styled(Animated.div)<ContainerProps>`
  border-radius: 0.5rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 1rem 2rem 1rem 1rem;
  position: relative;
  width: 22.5rem;
  z-index: 10;
  margin-top: 3rem;

  ${(props) => toastTypeVariations[props.type || 'info']}

  & + div {
    margin-top: 1rem;
  }

  > svg {
    margin: 0.25rem 0.75rem 0 0;
  }

  div {
    flex: 1;

    p {
      font-size: 1rem;
      line-height: 1.25rem;
      margin-top: 0.25rem;
      opacity: 0.8;
    }
  }

  button {
    background: transparent;
    border: 0;
    color: inherit;
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  ${(props) =>
    !props.hasdescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`
