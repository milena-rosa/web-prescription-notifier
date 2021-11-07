import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: url('src/assets/background.png') no-repeat center center fixed;
  background: rgba(0, 0, 0, 0.5);
  background-size: cover;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 11;

  > div {
    background: lime;
    height: 16.875rem;
    width: 28.125rem;
  }
`
