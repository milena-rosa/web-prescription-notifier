import { destroyCookie, parseCookies, setCookie } from 'nookies'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { api } from '../services/apiClient'

interface User {
  name: string
  email: string
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
  isAuthenticated: boolean
  user: User
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const isAuthenticated = !!user.email

  useEffect(() => {
    const { 'prescription_notifier.token': token } = parseCookies()

    if (token) {
      api
        .get('/users/me')
        .then((response) => {
          const { email, name } = response.data
          setUser({ email, name })
        })
        .catch((error) => {
          console.error(error)
          signOut()
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function signOut() {
    destroyCookie(undefined, 'prescription_notifier.token')
    destroyCookie(undefined, 'prescription_notifier.refreshToken')
    setUser({} as User)
  }

  async function signIn({ email, password }: SignInCredentials): Promise<void> {
    try {
      const response = await api.post('sessions', {
        email,
        password
      })

      const { token, refreshToken, name } = response.data

      const cookiesOptions = {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      }
      setCookie(undefined, 'prescription_notifier.token', token, cookiesOptions)
      setCookie(undefined, 'prescription_notifier.refreshToken', refreshToken, cookiesOptions)

      setUser({
        name,
        email
      })

      api.defaults.headers.common.Authorization = `Bearer ${token}`
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        signIn,
        signOut
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
