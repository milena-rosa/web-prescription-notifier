import React, { ComponentType } from 'react'
import { RouteProps as ReactDOMRouteProps, Route as ReactDOMRoute, Navigate } from 'react-router-dom'

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean
  component: ComponentType
}

export const Route: React.FC = ({ isPrivate = false, component: Component, ...rest }: RouteProps) => {
  return (
    <ReactDOMRoute
      {...rest}
      element={({ props }) => {
        console.log(props)
        return <Component />
      }}
    ></ReactDOMRoute>
  )
}
