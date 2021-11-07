import React from 'react'
import { Switch } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { Home } from '../pages/Home'
import { Route } from './Route'

// import { useAuth } from '../hooks/useAuth'

export function Routes() {
  // const { loading } = useAuth()

  // if (loading) {
  //   return <h1>Abrindo...</h1>
  // }

  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" exact component={Home} isPrivate />
    </Switch>
  )
}
