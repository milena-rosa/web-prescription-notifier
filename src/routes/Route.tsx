import React, { ComponentType } from 'react'
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import { PrivateRouteComponent } from './PrivateRouteComponent'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: ComponentType
}

export function Route({ isPrivate = false, component: Component, ...rest }: RouteProps) {
  const { isAuthenticated } = useAuth()

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        isPrivate && isAuthenticated ? (
          <PrivateRouteComponent>
            <Component />
          </PrivateRouteComponent>
        ) : !isPrivate && !isAuthenticated ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
