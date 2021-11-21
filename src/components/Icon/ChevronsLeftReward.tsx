import React from 'react'

export interface IconProps {
  size?: string | number
  color?: string
}

export const ChevronsLeftReward: React.FC<IconProps> = ({ size = '1.5rem', color = '#323232', ...rest }) => (
  <svg
    version="1.1"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    color={color}
    style={{ width: size, height: size }}
  >
    <g strokeLinecap="round" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinejoin="round">
      <path d="M10.5 16L6.5 12L10.5 8"></path>
      <path d="M17.5 17L12.5 12L17.5 7"></path>
    </g>
  </svg>
)
