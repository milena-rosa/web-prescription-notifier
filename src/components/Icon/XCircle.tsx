import React from 'react'

export interface IconProps {
  size?: string | number
  color?: string
}

export const XCircle: React.FC<IconProps> = ({ size = '1.5rem', color = '#323232', ...rest }) => (
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
        d="M14.83,9.17l-5.66,5.66"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.83,14.83l-5.66,-5.66"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12,21v0c-4.971,0 -9,-4.029 -9,-9v0c0,-4.971 4.029,-9 9,-9v0c4.971,0 9,4.029 9,9v0c0,4.971 -4.029,9 -9,9Z"
      ></path>
    </g>
  </svg>
)
