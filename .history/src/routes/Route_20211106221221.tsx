import React, { ComponentType } from 'react'
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Redirect } from 'react-router-dom'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: ComponentType
}

export function Route({ isPrivate = false, component: Component, ...rest }: RouteProps) {
  const isSigned = true

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate && isSigned ? (
          <Component />
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
