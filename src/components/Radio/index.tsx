import React, { forwardRef, InputHTMLAttributes } from 'react'

import { Icon, RadioContainer, HiddenRadio, StyledRadio, Label } from './styles'

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
}

export const Radio = forwardRef(({ labelText, checked, id, name, ...rest }: RadioProps) => {
  return (
    <Label htmlFor={id}>
      <RadioContainer>
        <HiddenRadio type="radio" checked={checked} name={name} {...rest} />
        <StyledRadio checked={checked}>
          <Icon />
        </StyledRadio>
      </RadioContainer>
      {labelText && <span>{labelText}</span>}
    </Label>
  )
})
