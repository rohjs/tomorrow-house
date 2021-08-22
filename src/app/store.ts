import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import authReducer from './auth'
import modalReducer from './modal'
import searchHistoryReducer from './searchHistory'
import systemReducer from './system'
import toastReducer from './toast'

import productDetailReducer from './product/detail'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    searchHistory: searchHistoryReducer,
    system: systemReducer,
    toast: toastReducer,
    productDetail: productDetailReducer,
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
