import React from 'react'
import { Routes as RouterDOMRoutes } from 'react-router-dom'

// import { useAuth } from '../hooks/useAuth'

import { SignIn } from '../pages/SignIn'
import { Home } from '../pages/Home'

export function Routes() {
  // const { loading } = useAuth()

  // if (loading) {
  //   return <h1>Abrindo...</h1>
  // }

  const publicRoutes = {
    path: '/',
    element: <SignIn />
  }

  const dashboardRoutes = {
    path: '/dashboard',
    element: <Home />
  }

  return (
    <RouterDOMRoutes>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" exact component={Home} isPrivate />
    </RouterDOMRoutes>
  )
}
