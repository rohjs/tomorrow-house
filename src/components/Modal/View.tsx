import React from 'react'
import { ModalCategory } from 'src/types/enum'

import { Sidebar } from 'src/components/Sidebar'
import { SearchModal } from './SearchModal'

interface ModalViewProps {
  modal: Modal
}

export const ModalView = ({ modal }: ModalViewProps) => {
  const { category, props } = modal

  switch (category) {
    case ModalCategory.SidebarModal:
      return <Sidebar {...props} />
    case ModalCategory.SearchModal:
      return <SearchModal {...props} />
    default:
      return null
  }
}
