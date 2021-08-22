import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'

interface ProductDetailPageState {
  id: string
  detailImages: string[]
  productImages: string[]
}

const INITIAL_STATE: ProductDetailPageState = {
  id: '',
  detailImages: [],
  productImages: [],
}

const productDetailPageSlice = createSlice({
  name: 'product/detail',
  initialState: INITIAL_STATE,
  reducers: {
    setId: (state: ProductDetailPageState, action: PayloadAction<string>) => {
      state.id = action.payload
    },
    setDetailImages: (
      state: ProductDetailPageState,
      action: PayloadAction<string[]>
    ) => {
      state.detailImages = action.payload
    },
    setProductImages: (
      state: ProductDetailPageState,
      action: PayloadAction<string[]>
    ) => {
      state.productImages = action.payload
    },
  },
})

export const { setId, setDetailImages, setProductImages } =
  productDetailPageSlice.actions
export default productDetailPageSlice.reducer

export const getDetailImages = (state: RootState) =>
  state.productDetail.detailImages
export const getProductImages = (state: RootState) =>
  state.productDetail.productImages
