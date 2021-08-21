import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import { useAppSelector, useModal } from 'src/hooks'
import { getModals } from 'src/app/modal'

import { ModalView } from './View'
import { StyledOverlay } from './styles'

interface ModalPortalProps {
  children: ReactNode
}

const ModalPortal = ({ children }: ModalPortalProps) =>
  createPortal(children, document.getElementById('modal')!)

export const Modal = () => {
  const modals = useAppSelector(getModals)

  const { removeModal } = useModal()

  if (!modals.length) return null

  const closeModal = () => removeModal()

  return (
    <ModalPortal>
      {modals.map((modal, index) => {
        const key = `modal-${modal.category}-${index}`
        return <ModalView key={key} modal={modal} />
      })}
      <StyledOverlay onClick={closeModal} />
    </ModalPortal>
  )
}
