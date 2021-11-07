import React, { forwardRef, InputHTMLAttributes } from 'react'

import { Label, CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon } from './styles'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
}

export const Checkbox = forwardRef(({ labelText, checked, ...rest }: CheckboxProps) => {
  return (
    <Label>
      <CheckboxContainer>
        <HiddenCheckbox type="checkbox" checked={checked} {...rest} />
        <StyledCheckbox checked={checked}>
          <Icon />
        </StyledCheckbox>
      </CheckboxContainer>
      {labelText && <span>{labelText}</span>}
    </Label>
  )
})
