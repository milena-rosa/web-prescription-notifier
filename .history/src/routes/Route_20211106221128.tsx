import React, { ComponentType } from 'react'
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Navigate } from 'react-router-dom'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: ComponentType
}

export function Route({ isPrivate = false, component: Component, ...rest }: RouteProps) {
  const isSigned = true

  return (
    <ReactDOMRoute
      {...rest}
      children={({ location }) =>
        (isPrivate && isSigned) || (!isPrivate && !isSigned) ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/home', state: { from: location } }} />
        )
      }
    ></ReactDOMRoute>
  )
}
