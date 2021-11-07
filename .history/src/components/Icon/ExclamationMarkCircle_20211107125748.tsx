import React from 'react'

export interface IconProps {
  name?: string
  size?: string | number
  color?: string
}

export const ExclamationMarkCircle: React.FC<IconProps> = ({ name, size = '1.5rem', color = '#323232', ...rest }) => (
  <svg
    version="1.1"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    color={color}
    style={{ width: size, height: size }}
  >
    <g stroke-linecap="round" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linejoin="round">
      <path d="M13.5,16l4,-4l-4,-4"></path>
      <path d="M6.5,17l5,-5l-5,-5"></path>
    </g>
    <path fill="none" d="M0,0h24v24h-24Z"></path>
  </svg>
)
