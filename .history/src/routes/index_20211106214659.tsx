import React from 'react'
import { useRoutes } from 'react-router-dom'

// import { useAuth } from '../hooks/useAuth'

import { SignIn } from '../pages/SignIn'

export function Routes() {
  // const { loading } = useAuth()

  // if (loading) {
  //   return <h1>Abrindo...</h1>
  // }

  const publicRoutes = {
    path: '/',
    element: <SignIn />
  }

  const routing = useRoutes([publicRoutes])

  return <>{routing}</>
  // return (
  //   <Switch>
  //     <Route path="/" exact component={SignIn} />
  //     <Route path="/home" exact component={Home} isPrivate />
  //   </Switch>
  // )
}
