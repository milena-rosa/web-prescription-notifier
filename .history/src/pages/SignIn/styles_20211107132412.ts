import styled from 'styled-components'

import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  align-items: center;
  background: url(${backgroundImg}) no-repeat center center fixed;
  background-size: cover;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 11;

  header {
    align-items: center;
    background: var(--green-primary);
    color: var(--white);
    display: flex;
    filter: drop-shadow(0px 4px 4px var(--green-primary));
    font-weight: bold;
    font-size: 2.75rem;
    height: 6.25rem;
    justify-content: center;
    line-height: 3.5rem;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }

  > div {
    align-items: center;
    background-color: var(--white);
    display: flex;
    filter: drop-shadow(15px 15px 42px rgba(0, 0, 0, 0.7));
    flex-direction: column;
    height: 16.875rem;
    padding: 2.1875rem 4.6875rem;
    width: 28.125rem;
  }

  footer {
    /* background: lime; */
    align-self: flex-end;

    > img {
      margin: 1.875rem;
      width: 12.5rem;
    }
  }
`
