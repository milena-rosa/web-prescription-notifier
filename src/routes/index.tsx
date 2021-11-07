import React from 'react'
import { Switch } from 'react-router-dom'

import { Home } from '../pages/Home'
import Registration from '../pages/Registration'
import { SignIn } from '../pages/SignIn'
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
      <Route path="/registration" exact component={Registration} isPrivate />
    </Switch>
  )
}
