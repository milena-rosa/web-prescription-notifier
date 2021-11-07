import styled from 'styled-components'

export const Container = styled.button`
  background: var(--green-primary);
  border: 0;
  border-radius: 0.5rem;
  color: var(--gray-80);
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background: var(--gray-20);
    box-shadow: 0 6px 12px rgba(51, 51, 51, 0.25);
    color: var(--gray-40);
  }

  &:hover {
    transform: translate(1px, 1px);
  }
`
