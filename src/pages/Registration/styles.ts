import styled from 'styled-components'

export const Container = styled.div``

export const FieldsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 2.5rem 2rem 0;
`

export const HorizontalContainer = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.875rem;
  width: 100%;
`

export const Label = styled.label`
  color: var(--black);
  display: block;
  font-size: 1.25rem;
  line-height: 1.4375rem;
  margin-bottom: 0.5rem;
  padding-left: 0.625rem;
  text-transform: uppercase;
`

export const CheckboxContainer = styled.div`
  min-width: 42rem;

  > div {
    display: flex;
  }
`

export const RadioContainer = styled.div`
  min-width: 23.75rem;

  > div {
    display: flex;
  }
`

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 3rem 2rem;
`
