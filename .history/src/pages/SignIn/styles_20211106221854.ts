import styled from 'styled-components'

export const Container = styled.div`
  background: url('src/assets/background.png') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  width: 100vw;

  > div {
    background: black;
    display: flex;
    height: 16.875rem;
    width: 28.125rem;
  }
`