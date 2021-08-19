import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import modalReducer from './modals'

export const store = configureStore({
  reducer: {
    modals: modalReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
