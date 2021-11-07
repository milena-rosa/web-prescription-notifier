import styled from 'styled-components'

import backgroundImg from '../../assets/background-light.png'

export const Container = styled.div`
  background: url(${backgroundImg}) no-repeat center center fixed;
  background-size: cover;
  bottom: 0;
  display: flex;
  left: 0;
  position: fixed;
  right: 0;
  top: 2.5rem;
  z-index: -1;
`

export const Sidebar = styled.aside`
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5.5rem 2rem 0 2rem;
  width: 32.5rem;

  a {
    align-items: center;
    background: var(--green-primary);
    border: 0;
    border-radius: 3.125rem;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.8);
    color: var(--white);
    display: flex;
    font-weight: bold;
    font-size: 1rem;
    height: 3.75rem;
    justify-content: center;
    letter-spacing: 0.03em;
    line-height: 1.1875rem;
    min-width: 7.5rem;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;

    & + a {
      margin-top: 2rem;
    }

    &:hover {
      transform: translate(1px, 1px);
    }
  }
`

export const MainContent = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  width: calc(100% - 32.5rem);

  footer {
    align-self: flex-end;

    > img {
      margin: 1.875rem;
      width: 12.5rem;
    }
  }
`
