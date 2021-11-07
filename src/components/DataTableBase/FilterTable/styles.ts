import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  width: 100%;

  input {
    width: 22rem;
  }
`

interface MoreFiltersButtonProps {
  hasSelectedFilter: boolean
}

export const MoreFiltersButton = styled.button<MoreFiltersButtonProps>`
  align-items: center;
  background: var(--black);
  border-radius: 0.25rem;
  color: var(--white);
  display: flex;
  font-size: 0.875rem;
  font-weight: bold;
  height: 2.25rem;
  justify-content: space-between;
  line-height: 120%;
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;

  svg {
    margin-right: 0.5rem;
  }

  div {
    align-items: center;
    background: var(--orange);
    border-radius: 50%;
    color: var(--white);
    display: flex;
    font-size: 0.875rem;
    height: 1.25rem;
    justify-content: center;
    margin-right: 0.5rem;
    width: 1.25rem;
  }
`

export const ResetButton = styled.a`
  color: var(--gray-60);
  cursor: pointer;
  font-size: 0.875rem;
  line-height: 1.125rem;
  margin-left: 0.5rem;
  text-decoration-line: underline;
`
