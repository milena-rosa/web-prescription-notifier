import styled from 'styled-components'
import { Check } from '@somostera/tera-icons'

export const Icon = styled(Check).attrs({
  color: 'var(--white)',
  size: '14'
})``

export const Label = styled.label`
  align-items: center;
  display: flex;

  > span {
    margin-left: 0.5rem;
  }
`

interface StyledCheckboxProps {
  checked?: boolean
}

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export const HiddenCheckbox = styled.input`
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

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  align-items: center;
  background: ${(props) => (props.checked ? 'var(--blue-primary)' : 'var(--white)')};
  border: 0.125rem solid ${(props) => (props.checked ? 'var(--blue-primary)' : 'var(--gray-40)')};
  border-radius: 0.125rem;
  cursor: pointer;
  display: flex;
  height: 1rem;
  justify-content: center;
  transition: all 150ms;
  width: 1rem;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 0.1rem var(--gray-20);
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`
