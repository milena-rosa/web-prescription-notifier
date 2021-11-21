import React from 'react'

import { Routes } from './routes'
import { GlobalStyle } from './styles/global'
import { AppProvider } from './hooks'

export function App() {
  return (
    <AppProvider>
      <Routes />
      <GlobalStyle />
    </AppProvider>
  )
}
