import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useToast } from './useToast'

interface AuthContextData {
  loading: boolean
  token?: string
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const { addToast } = useToast()
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState<string | undefined>('')
  const [user, setUser] = useState<User>({} as User)
  const { push } = useHistory()

  return (
    <AuthContext.Provider
      value={{
        loading,
        token: token || ''
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }
