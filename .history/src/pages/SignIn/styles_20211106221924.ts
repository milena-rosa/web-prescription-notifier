import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: url('src/assets/background.png') no-repeat center center fixed;
  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;

  > div {
    background: lime;
    height: 16.875rem;
    width: 28.125rem;
  }
`
