import React, { useEffect } from 'react'
import { ExclamationMarkCircle, CheckCircle, XCircle, X } from '../../Icon'

import { ToastMessage, useToast } from '../../../hooks/useToast'

import { Container } from './styles'

interface ToastProps {
  message: ToastMessage
  style?: Object
}

const icons = {
  info: <ExclamationMarkCircle size={24} color="var(--yellow)" />,
  error: <XCircle size={24} color="var(--red)" />,
  success: <CheckCircle size={24} color="var(--green-primary)" />
}

export function Toast({ message, style }: ToastProps) {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [message.id, removeToast])

  return (
    <Container type={message.type} hasdescription={Number(!!message.description)} style={style}>
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button
        onClick={() => {
          removeToast(message.id)
        }}
        type="button"
      >
        <X size={12} color="var(--gray)" />
      </button>
    </Container>
  )
}
