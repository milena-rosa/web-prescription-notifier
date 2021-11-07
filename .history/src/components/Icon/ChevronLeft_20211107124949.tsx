import React from 'react'

export interface IconProps {
  name?: string
  size?: string | number
  color?: string
}

export const ChevronLeft: React.FC<IconProps> = ({ name, size = '1.5rem', color = '#323232', ...rest }) => (
  <path d="M14,8l-4,4l4,4" stroke-linecap="round" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linejoin="round"></path><path fill="none" d="M0,0h24v24h-24Z"></path>
  </svg>
)
