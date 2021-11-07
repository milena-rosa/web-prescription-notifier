import styled from 'styled-components'

export const Container = styled.nav`
  align-items: center;
  background: var(--brownish-green);
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  height: 2.5rem;
  padding-left: 2rem;

  a {
    color: var(--white);
    font-size: 1.125rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`
