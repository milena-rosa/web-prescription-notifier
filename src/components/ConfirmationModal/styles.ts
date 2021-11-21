import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 0.25rem;
  max-width: 25rem;
  width: 100%;
  padding: 2rem 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  p {
    line-height: 1.5rem;
    color: var(--gray);
    margin-bottom: 1.3rem;
    padding: 0 2rem;
  }

  hr {
    width: 100%;
    border: 0.25px solid #ebebeb;
  }

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    padding: 0 1rem;

    button {
      border-radius: 0.5rem;
      font-size: 1rem;
      font-weight: bold;
      height: 1.75rem;
      line-height: 1.25rem;
      padding: 1.3rem 0;
      text-align: center;
      width: 10.5rem;
      text-transform: uppercase;

      &:first-child {
        background: var(--white);
        border: 2px solid var(--gray);
        color: var(--gray);
        margin-right: 1rem;
      }

      &:last-child {
        background: var(--green-primary);
        border: 2px solid var(--green-primary);
        color: var(--white);
      }
    }
  }
`
