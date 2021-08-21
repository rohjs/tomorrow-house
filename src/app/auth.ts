// Dummy Auth
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface AuthState {
  user: User | null
  token: string
}

const INITIAL_STATE: AuthState = {
  user: null,
  token: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<User | null>) => {
      state.user = action.payload
    },
    setToken: (state: AuthState, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    resetUser: (state: AuthState) => {
      state.user = null
    },
    resetAuth: () => INITIAL_STATE,
  },
})

export const { setUser, setToken, resetUser, resetAuth } = authSlice.actions

export default authSlice.reducer

export const getUser = (state: RootState) => state.auth.user
