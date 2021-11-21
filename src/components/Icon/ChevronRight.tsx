import React from 'react'

export interface IconProps {
  size?: string | number
  color?: string
}

export const ChevronRight: React.FC<IconProps> = ({ size = '1.5rem', color = '#323232', ...rest }) => (
  <svg
    version="1.1"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    color={color}
    style={{ width: size, height: size }}
  >
    <path
      d="M10,16l4,-4l-4,-4"
      strokeLinecap="round"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinejoin="round"
    ></path>
    <path fill="none" d="M0,0h24v24h-24Z"></path>
  </svg>
)
