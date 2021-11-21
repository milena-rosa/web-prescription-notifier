import React from 'react'

export interface IconProps {
  size?: string | number
  color?: string
}

export const Check: React.FC<IconProps> = ({ size = '1.5rem', color = '#323232', ...rest }) => (
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
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20,6.5l-11,11l-5,-5"
      ></path>
    </g>
  </svg>
)
