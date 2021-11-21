import styled from 'styled-components'

export const Icon = styled.div`
  background: var(--green-primary);
  border-radius: 50%;
  height: 0.625rem;
  margin: 0.125rem;
  width: 0.625rem;
`

export const Label = styled.label`
  align-items: center;
  display: flex;

  > span {
    font-size: 1.5rem;
    line-height: 1.75rem;
    margin: 0 0.625rem;
  }
`

interface StyledRadioProps {
  checked?: boolean
}

export const RadioContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export const HiddenRadio = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledRadio = styled.div<StyledRadioProps>`
  align-items: center;
  border: 0.125rem solid var(--green-primary);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 1.125rem;
  justify-content: center;
  transition: all 150ms;
  width: 1.125rem;

  ${HiddenRadio}:focus + & {
    box-shadow: 0 0 0 0.1rem var(--gray-light);
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`
