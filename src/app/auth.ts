// Dummy Auth
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import store from 'store'

import type { RootState } from './store'

interface AuthState {
  user: User | null
  accessToken: string
}

const INITIAL_STATE: AuthState = {
  user: store.get('tmrHouse.auth.user') || null,
  accessToken: store.get('tmrHouse.auth.accessToken') || '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    setAccessToken: (state: AuthState, action: PayloadAction<string>) => {
      state.accessToken = action.payload
      store.set('tmrHouse.auth.accessToken', action.payload)
    },
    setUser: (state: AuthState, action: PayloadAction<User | null>) => {
      state.user = action.payload
      store.set('tmrHouse.auth.user', action.payload)
    },
    resetUser: (state: AuthState) => {
      state.user = null
      store.remove('tmrHouse.auth.user')
    },
    resetAuth: () => INITIAL_STATE,
  },
})

export const { setUser, setAccessToken, resetUser, resetAuth } =
  authSlice.actions

export default authSlice.reducer

export const getUser = (state: RootState) => state.auth.user
