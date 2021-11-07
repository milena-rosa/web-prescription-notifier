import React from 'react'

export interface IconProps {
  name?: string
  size?: string | number
  color?: string
}

export const X: React.FC<IconProps> = ({ name, size = '1.5rem', color = '#323232', ...rest }) => (
  <svg
    version="1.1"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    color={color}
    style={{ width: size, height: size }}
  >
    <g fill="none">
      <path d="M0,0h24v24h-24Z"></path>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8,8l8,8"></path>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M16,8l-8,8"
      ></path>
    </g>
  </svg>
)