import React, { useRef, useState } from 'react'
import cx from 'classnames'

import { useClickOutside } from 'src/hooks'

import { SearchHistory, SearchInput } from '../Search'
import { StyledGnbSearch } from './styles'

export const GnbSearch = () => {
  const [open, setOpen] = useState(false)
  const gnbSearchRef = useRef<HTMLDivElement>(null)

  const openHistory = () => setOpen(true)
  const closeHistory = () => setOpen(false)

  useClickOutside(gnbSearchRef, closeHistory)

  return (
    <StyledGnbSearch className="gnbSearch" ref={gnbSearchRef}>
      <SearchInput onFocus={openHistory} />
      <SearchHistory
        className={cx('gnbSearchHistory', { open })}
        hideWhenEmpty
      />
    </StyledGnbSearch>
  )
}
