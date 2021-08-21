import React from 'react'

import { useModal, useResponsive } from 'src/hooks'
import { ModalCategory } from 'src/types/enum'

import { Button } from '../Button'
import { SearchHistory, SearchInput } from '../Search'
import { Grid } from '../Grid'
import { StyledSearchModal } from './styles'

export const SearchModal: React.FC = () => {
  const { isDesktop } = useResponsive()
  const { removeModal } = useModal()

  if (isDesktop) return null

  const closeModal = () => removeModal(ModalCategory.SearchModal)

  return (
    <StyledSearchModal>
      <Grid sm={4}>
        <header className="searchModalHeader">
          <h1 className="visuallyHidden">검색창</h1>
          <div className="formGroup">
            <SearchInput className="searchInput" />
            <Button className="close" variant="ghost" onClick={closeModal}>
              취소
            </Button>
          </div>
        </header>

        <SearchHistory />
      </Grid>
    </StyledSearchModal>
  )
}
