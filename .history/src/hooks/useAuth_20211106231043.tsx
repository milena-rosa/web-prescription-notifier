import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth'
import { doc, getDoc, getFirestore } from '@firebase/firestore'

import { Person } from '@somostera/tera-models-ts'

import { useToast } from './useToast'

interface AuthContextData {
  loading: boolean
  userFirebase: User
  userInfoTera: Person
  token?: string
  googlePopupSignIn(): void
  googleSignOut(): void
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
  const [userInfoTera, setUserInfoTera] = useState<Person>({} as Person)
  const { push } = useHistory()

  const db = getFirestore()
  const provider = new GoogleAuthProvider()
  const auth = getAuth()

  // this opens the user data if the token is registered on firebaseLocalStorage
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setLoading(true)
      if (user?.getIdToken()) {
        const userToken = await user.getIdToken()
        setToken(userToken)
      }

      if (user) {
        setUser(user)

        const docRef = doc(db, 'people/' + user.uid)
        getDoc(docRef).then((docSnapshot) => {
          setUserInfoTera(docSnapshot.data() as Person)
        })
      }
      setLoading(false)
    })
  }, [auth, db])

  const googlePopupSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setLoading(true)

        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        setToken(credential?.accessToken)

        // The signed-in user info.
        const { user } = result
        setUser(user)

        const docRef = doc(db, 'people/' + user.uid)
        getDoc(docRef).then((docSnapshot) => {
          setUserInfoTera(docSnapshot.data() as Person)
        })
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)

        addToast({
          type: 'error',
          title: 'Erro ao fazer login',
          description: 'Aconteceu algo errado ao fazer o login. Por favor, tente novamente.'
        })

        // Handle Errors here.
        // const errorCode = error.code
        // const errorMessage = error.message
        // // The email of the user's account used.
        // const email = error.email
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error)
      })
  }

  const googleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserInfoTera({} as Person)
        setUser({} as User)
        setToken('')
        push('/')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        googlePopupSignIn,
        googleSignOut,
        userFirebase: user,
        userInfoTera,
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
