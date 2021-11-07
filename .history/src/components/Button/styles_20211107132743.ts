import styled from 'styled-components'

export const Container = styled.button`
  background: var(--green-primary);
  border: 0;
  border-radius: 3.125rem;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.8);
  color: var(--white);
  font-weight: bold;
  font-size: 1rem;
  height: 2.5rem;
  line-height: 1.1875rem;
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
