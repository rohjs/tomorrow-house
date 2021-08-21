import { useAppDispatch } from '.'
import type { ModalCategory } from 'src/types/enum'
import { deleteModal, setModal } from 'src/app/modal'

export const useModals = () => {
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
  } as const
}
