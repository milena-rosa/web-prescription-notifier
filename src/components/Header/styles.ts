import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: var(--green-primary);
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.5);
  color: var(--white);
  display: flex;
  justify-content: space-around;
  height: 2.5rem;

  p {
    font-weight: bold;
    font-size: 1.125rem;
    line-height: 1.3125rem;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;

    p {
      margin-right: 1rem;
    }

    button {
      background: none;
      color: var(--white);
      font-size: 1.125rem;
      line-height: 1.3125rem;
    }
  }
`
