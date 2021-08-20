import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import authReducer from './auth'
import modalReducer from './modals'
import systemReducer from './system'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modals: modalReducer,
    system: systemReducer,
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
