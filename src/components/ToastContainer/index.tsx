import React from 'react'
import { useTransition } from 'react-spring'

import { ToastMessage } from '../../hooks/useToast'

import { Toast } from './Toast'

import { Container } from './styles'

interface ToastContainerProps {
  messages: ToastMessage[]
}

export function ToastContainer({ messages }: ToastContainerProps) {
  const messagesWithTransitions = useTransition(messages, {
    keys: (message) => message.id,
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 }
  })

  return (
    <Container>
      {messagesWithTransitions((_, message) => (
        <Toast key={message.id} style={{}} message={message} />
      ))}
    </Container>
  )
}
