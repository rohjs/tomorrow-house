import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'

interface ProductDetailPageState extends Product {}

const INITIAL_STATE: ProductDetailPageState = {
  id: '',
  seller: {
    id: '',
    company: '',
    representative: '',
    csPhone: '',
    address: '',
    email: '',
    license: '',
  },
  title: '',
  rating: {
    averageRating: 0,
    count: 0,
    countFor1: 0,
    countFor2: 0,
    countFor3: 0,
    countFor4: 0,
    countFor5: 0,
  },
  price: {
    originalPrice: 0,
    salePrice: 0,
    isOnDiscount: false,
    discountExpiresAt: null,
  },
  mileage: 0,
  delivery: {
    fee: 0,
    refundExchangeInfo: {
      refundFee: 0,
      exchangeFee: 0,
      address: '',
    },
  },
  detailImages: [],
  productImages: [],
  soldOut: false,
  sellingOptions: [],
  category: [],
}

const productDetailPageSlice = createSlice({
  name: 'product/detail',
  initialState: INITIAL_STATE,
  reducers: {
    setProduct: (
      state: ProductDetailPageState,
      action: PayloadAction<Product>
    ) => {
      state.id = action.payload.id
      state.seller = action.payload.seller
      state.title = action.payload.title
      state.rating = action.payload.rating
      state.price = action.payload.price
      state.mileage = action.payload.mileage
      state.delivery = action.payload.delivery
      state.detailImages = action.payload.detailImages
      state.productImages = action.payload.productImages
      state.soldOut = action.payload.soldOut
      state.sellingOptions = action.payload.sellingOptions
      state.category = action.payload.category
    },
  },
})

export const { setProduct } = productDetailPageSlice.actions
export default productDetailPageSlice.reducer

const getCategory = (state: RootState) => state.productDetail.category
const getRating = (state: RootState) => state.productDetail.rating

export const getDetailImages = (state: RootState) =>
  state.productDetail.detailImages
export const getProductImages = (state: RootState) =>
  state.productDetail.productImages
export const getPrice = (state: RootState) => state.productDetail.price
export const getMileage = (state: RootState) => state.productDetail.mileage
export const getSeller = (state: RootState) => state.productDetail.seller

export const getBreadcrumbLinks = createSelector([getCategory], (category) => {
  return category.map((item) => ({
    label: item.category,
    url: item.url,
  }))
})

export const getTotalRatingCounts = createSelector([getRating], (rating) => {
  const { countFor1, countFor2, countFor3, countFor4, countFor5 } = rating
  return countFor1 + countFor2 + countFor3 + countFor4 + countFor5
})
