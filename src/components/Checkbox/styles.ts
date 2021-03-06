import styled from 'styled-components'

import { Check } from '../Icon'

export const Icon = styled(Check).attrs({
  color: 'var(--white)',
  size: '18'
})``

export const Label = styled.label`
  align-items: center;
  display: flex;

  > span {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
    margin-right: 2rem;
    text-transform: uppercase;
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
  background: ${(props) => (props.checked ? 'var(--green-primary)' : 'var(--white)')};
  border: 0.125rem solid ${(props) => (props.checked ? 'var(--green-primary)' : 'var(--gray)')};
  cursor: pointer;
  display: flex;
  height: 1.5rem;
  justify-content: center;
  transition: box-shadow visibility 150ms;
  width: 1.5rem;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 0.1rem var(--gray-light);
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }
`
