import styled from 'styled-components'

export const PrivateRouteContainer = styled.div`
  display: flex;

  > div {
    margin-left: 16.875rem;
    min-width: 50rem;
    /* 100% - menu width */
    width: calc(100% - 16.875rem);
  }
`
