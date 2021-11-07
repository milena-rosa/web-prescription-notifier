import React, { ReactNode } from 'react'

import { AuthProvider } from './useAuth'
import { ToastProvider } from './useToast'
import { NetworkProvider } from '../../modules/network/hooks/useNetwork'
import { PortfolioProvider } from 'modules/network/hooks/usePortfolio'

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AuthProvider>
      <NetworkProvider>
        <PortfolioProvider>
          <ToastProvider>{children}</ToastProvider>
        </PortfolioProvider>
      </NetworkProvider>
    </AuthProvider>
  )
}
