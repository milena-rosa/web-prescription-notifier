import React, { ComponentType } from 'react'
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom'

import { PrivateRouteComponent } from './PrivateRouteComponent'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: ComponentType
}

export function Route({ isPrivate = false, component: Component, ...rest }: RouteProps) {
  const isSigned = true

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        isPrivate && isSigned ? (
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
      }
    />
  )
}
