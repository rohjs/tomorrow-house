import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import store from 'store'

import type { RootState } from './store'

const MAX_ITEMS = 5

interface SearchHistoryState {
  histories: SearchHistory[]
}

const INITIAL_STATE: SearchHistoryState = {
  histories: store.get('tmrHouse.searchHistories') || [],
}

const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState: INITIAL_STATE,
  reducers: {
    setSearchHistory: (
      state: SearchHistoryState,
      action: PayloadAction<string>
    ) => {
      if (!action.payload) return

      let newHistories = [...state.histories]
      const matchIndex = state.histories.findIndex(
        (history) => history.content === action.payload
      )
      if (matchIndex > 0) newHistories.splice(matchIndex, 1)
      newHistories = [
        {
          content: action.payload,
          createdAt: Date.now(),
        },
        ...newHistories,
      ]

      state.histories = newHistories.slice(0, MAX_ITEMS)
    },
    deleteSearchHistory: (
      state: SearchHistoryState,
      action: PayloadAction<string>
    ) => {
      state.histories = state.histories.filter(
        (history) => history.content !== action.payload
      )
    },
    resetSearchHistory: (state: SearchHistoryState) => {
      state.histories = []
      store.set('tmrHouse.searchHistories', [])
    },
  },
})

export const { setSearchHistory, deleteSearchHistory, resetSearchHistory } =
  searchHistorySlice.actions

export default searchHistorySlice.reducer

export const getSearchHistory = (state: RootState) =>
  state.searchHistory.histories
