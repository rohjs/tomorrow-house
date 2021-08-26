import React from 'react'
import firebase from 'firebase'

import { useAppDispatch, useDatabase, useMount } from 'src/hooks'
import { setProduct } from 'src/app/product/detail'

import ProductDetailOverview from './Overview'

const ProductDetailPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { readData } = useDatabase()

  const handleResponse = (snapshot: firebase.database.DataSnapshot) => {
    if (!snapshot.exists()) return
    const product = snapshot.val() as Product
    dispatch(setProduct(product))
  }

  const fetchProductDetail = () => {
    readData('/products/0').then(handleResponse)
  }

  useMount(fetchProductDetail)

  return (
    <main>
      <ProductDetailOverview />
    </main>
  )
}

export default ProductDetailPage
