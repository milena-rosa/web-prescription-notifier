import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: url('../../assets/background.png') no-repeat center center fixed;
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
    filter: drop-shadow(15px 15px 42px rgba(0, 0, 0, 0.7));
    height: 16.875rem;
    width: 28.125rem;
  }
`
