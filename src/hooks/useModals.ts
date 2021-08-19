import { useAppDispatch } from '.'
import type { ModalCategory } from 'src/types/enum'
import { deleteModal, setModal } from 'src/app/modals'

interface UseModalsReturn {
  addModal: (modal: Modal) => void
  removeModal: (category?: ModalCategory) => void
}

export const useModals = (): UseModalsReturn => {
  const dispatch = useAppDispatch()

  const addModal = (modal: Modal) => {
    dispatch(setModal(modal))
  }

  const removeModal = (category?: ModalCategory) => {
    dispatch(deleteModal(category))
  }

  return {
    addModal,
    removeModal,
  }
}
