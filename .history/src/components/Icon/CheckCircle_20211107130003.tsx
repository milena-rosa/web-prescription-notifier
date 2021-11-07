import React from 'react'

export interface IconProps {
  name?: string
  size?: string | number
  color?: string
}

export const CheckCircle: React.FC<IconProps> = ({ name, size = '1.5rem', color = '#323232', ...rest }) => (
  <svg version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g fill="none">
      <path d="M0,0h24v24h-24Z"></path>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M12,21v0c-4.971,0 -9,-4.029 -9,-9v0c0,-4.971 4.029,-9 9,-9v0c4.971,0 9,4.029 9,9v0c0,4.971 -4.029,9 -9,9Z"
      ></path>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M16,10l-5,5l-3,-3"
      ></path>
    </g>
  </svg>

  // <svg
  //   version="1.1"
  //   viewBox="0 0 24 24"
  //   xmlns="http://www.w3.org/2000/svg"
  //   {...rest}
  //   color={color}
  //   style={{ width: size, height: size }}
  // >
  //   <g fill="none">
  //     <path d="M0,0h24v24h-24Z"></path>
  //     <path
  //       stroke="currentColor"
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       stroke-width="1.5"
  //       d="M20,6.5l-11,11l-5,-5"
  //     ></path>
  //   </g>
  // </svg>
)
