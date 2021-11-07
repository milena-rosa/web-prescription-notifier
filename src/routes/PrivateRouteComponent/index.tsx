import React, { FC } from 'react'

import { Header } from '../../components/Header'

export const PrivateRouteComponent: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
