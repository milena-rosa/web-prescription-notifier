import React from 'react'
import { Switch } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'
import { Route } from './Route'

import { SignIn } from '../views/SignIn'
import { Home } from '../views/Home'
import { Contents } from 'modules/contents/views/Contents'
import { ContentEditor } from 'modules/contents/views/Contents/ContentEditor'
import { AddContent } from 'modules/contents/views/Contents/AddContent'
import { ContentPreview } from 'modules/contents/views/Contents/ContentPreview'
import { Casting } from 'modules/casting/views/Casting'
import { JourneyCasting } from 'modules/casting/views/Casting/JourneyCasting'
import { Network } from 'modules/network/views/Network'
import { Person } from 'modules/network/views/Person'
import { ContactVerification } from 'modules/network/views/ContactVerification'
import { PortfolioClass } from 'modules/network/views/PortfolioClass'

export default function Routes() {
  const { loading } = useAuth()

  if (loading) {
    return <h1>Abrindo...</h1>
  }

  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/home" exact component={Home} isPrivate />
      <Route path="/contents" exact component={Contents} isPrivate />
      <Route path="/contents/new" exact component={AddContent} isPrivate />
      <Route path="/contents/:articleId" exact component={ContentEditor} isPrivate />
      <Route path="/contents/:articleId/:chapterIndex/preview" component={ContentPreview} isPrivate />
      <Route path="/casting" exact component={Casting} isPrivate />
      <Route path="/casting/:journeyId" component={JourneyCasting} isPrivate />
      <Route path="/network" exact component={Network} isPrivate />
      <Route path="/person" exact component={Person} isPrivate />
      <Route path="/person/add/verification" exact component={ContactVerification} isPrivate />
      <Route path="/portfolioClass/:classId?" exact component={PortfolioClass} isPrivate />
    </Switch>
  )
}
