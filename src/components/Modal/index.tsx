import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { useAppSelector, useModals } from 'src/hooks'
import { getModals } from 'src/app/modals'

import { ModalView } from './View'
import { StyledOverlay } from './styles'

interface ModalPortalProps {
  children: ReactNode
}

const ModalPortal = ({ children }: ModalPortalProps) =>
  createPortal(children, document.getElementById('modal')!)

export const Modal = () => {
  const modals = useAppSelector(getModals)
  const { removeModal } = useModals()

  if (!modals.length) return null

  const closeModal = () => removeModal()

  return (
    <ModalPortal>
      {modals.map((modal) => (
        <ModalView key={`modal-${modal}`} modal={modal} />
      ))}
      <StyledOverlay onClick={closeModal} />
    </ModalPortal>
  )
}
