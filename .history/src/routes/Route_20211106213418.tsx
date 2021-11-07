import React from 'react'
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

import { PrivateRouteComponent } from 'core/routes/PrivateRouteComponent'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: React.ComponentType
}

export function Route({ isPrivate = false, component: Component, ...rest }: RouteProps) {
  const { userFirebase } = useAuth()
  const isSigned = !!userFirebase.uid

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate && isSigned ? (
          <PrivateRouteComponent>
            <Component />
          </PrivateRouteComponent>
        ) : !isPrivate && !isSigned ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location }
            }}
          />
        )
      }}
    />
  )
}
