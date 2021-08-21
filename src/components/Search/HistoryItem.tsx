import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { getSearchQueryUrl } from '../utils'

import { CloseIcon } from 'src/assets/images'
import { StyledSearchHistoryItem } from './styles'

interface SearchHistoryItemProps {
  history: SearchHistory
  deleteHistory: (content: string) => void
}

const SearchHistoryItem: React.FC<SearchHistoryItemProps> = ({
  history,
  deleteHistory,
}) => {
  const deleteItem = () => deleteHistory(history.content)
  const searchQueryUrl = getSearchQueryUrl(history.content)

  return (
    <StyledSearchHistoryItem>
      <Link className="word" to={searchQueryUrl}>
        {history.content}
      </Link>
      <button
        className="delete"
        type="button"
        value={history.content}
        onClick={deleteItem}
        aria-label="검색어 삭제"
      >
        <CloseIcon />
      </button>
    </StyledSearchHistoryItem>
  )
}

const MemoSearchHistoryItem = memo(SearchHistoryItem)

export { MemoSearchHistoryItem as SearchHistoryItem }
