import React from 'react'
import Modal from 'react-modal'
import { X } from '../Icon'

import { Button } from '../Button'

import { Container } from './styles'

interface ConfirmationModalProps {
  isOpen: boolean
  messageTitle: string
  messageDescription?: string
  confirmButtonText: string
  confirmButtonColor?: string
  cancelButtonText?: string
  onRequestClose?: () => void
  onConfirm: () => void
  onCancel?: () => void
}

export function ConfirmationModal({
  isOpen,
  messageTitle,
  messageDescription,
  confirmButtonText,
  confirmButtonColor = 'var(--green-primary)',
  cancelButtonText,
  onRequestClose,
  onConfirm,
  onCancel
}: ConfirmationModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose || onCancel}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        {onRequestClose && (
          <button type="button" onClick={onRequestClose} className="react-modal-close">
            <X color="var(--gray)" size={24} />
          </button>
        )}

        <h2>{messageTitle}</h2>
        {messageDescription && <p>{messageDescription}</p>}

        <hr />

        <div>
          {onCancel && (
            <Button type="button" onClick={onCancel}>
              {cancelButtonText}
            </Button>
          )}
          <Button
            type="button"
            onClick={onConfirm}
            buttonStyle={{ background: confirmButtonColor, borderColor: confirmButtonColor }}
          >
            {confirmButtonText}
          </Button>
        </div>
      </Container>
    </Modal>
  )
}
