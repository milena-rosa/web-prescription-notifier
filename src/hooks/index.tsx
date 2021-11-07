import React, { ReactNode } from 'react'

import { AuthProvider } from './useAuth'
import { ToastProvider } from './useToast'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  )
}
