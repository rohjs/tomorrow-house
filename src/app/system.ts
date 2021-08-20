import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface SystemState {
  testMode: boolean
}

const INITIAL_STATE: SystemState = {
  testMode: false,
}

const systemSlice = createSlice({
  name: 'system',
  initialState: INITIAL_STATE,
  reducers: {
    setTestMode: (state: SystemState, action: PayloadAction<boolean>) => {
      state.testMode = action.payload
    },
  },
})

export const { setTestMode } = systemSlice.actions

export default systemSlice.reducer

export const getTestMode = (state: RootState) => state.system.testMode
