import React from 'react'

import { useResponsive } from 'src/hooks'

import { Button } from '../Button'
import { SearchHistory, SearchInput } from '../Search'

export const SearchModal: React.FC = () => {
  const { isDesktop } = useResponsive()

  if (isDesktop) return null

  return (
    <aside>
      <header className="searchModalHeader">
        <h1 className="visuallyHidden">검색창</h1>
        <SearchInput />
        <Button variant="ghost">취소</Button>
      </header>

      <SearchHistory />
    </aside>
  )
}
