import React from 'react'

export interface IconProps {
  name?: string
  size?: string | number
  color?: string
}

export const ExclamationMarkCircle: React.FC<IconProps> = ({ name, size = '1.5rem', color = '#323232', ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...rest}
    color={color}
    style={{ width: size, height: size }}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4m0 4h.01" />
  </svg>
)
