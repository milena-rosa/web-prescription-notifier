import React, { useEffect } from 'react'
import { ExclamationMarkCircle, CheckCircle, XCircle, X } from '@somostera/tera-icons'

import { ToastMessage, useToast } from '../../../hooks/useToast'

import { Container } from './styles'

interface ToastProps {
  message: ToastMessage
  style?: Object
}

const icons = {
  info: <ExclamationMarkCircle size={24} color="var(--blue-primary)" />,
  error: <XCircle size={24} color="var(--orange)" />,
  success: <CheckCircle size={24} color="var(--green-80)" />
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
        <X width={12} color="var(--gray-60)" />
      </button>
    </Container>
  )
}
