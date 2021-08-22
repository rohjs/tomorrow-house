import React from 'react'
import firebase from 'firebase'

import { useAppDispatch, useDatabase, useMount } from 'src/hooks'
import { setDetailImages, setProductImages } from 'src/app/product/detail'

import { Grid } from 'src/components'
import ProductCarousel from './ProductCarousel'

const ProductDetailPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { readData } = useDatabase()

  const handleResponse = (snapshot: firebase.database.DataSnapshot) => {
    if (!snapshot.exists()) return
    const { detailImages, productImages } = snapshot.val()
    dispatch(setDetailImages(detailImages))
    dispatch(setProductImages(productImages))
  }

  const fetchProductDetail = () => {
    readData('/products/0').then(handleResponse)
  }

  useMount(fetchProductDetail)

  return (
    <main>
      <Grid sm={4}>
        <ProductCarousel />
      </Grid>
    </main>
  )
}

export default ProductDetailPage
