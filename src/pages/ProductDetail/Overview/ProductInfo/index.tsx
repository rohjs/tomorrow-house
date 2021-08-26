import React from 'react'

import { ProductInfoHeader } from './Header'
import { ProductInfoPrice } from './Price'
import { ProductInfoDelivery } from './Delivery'
import { StyledProductInfo } from './styles'

const ProductInfo: React.FC = () => {
  return (
    <StyledProductInfo>
      <ProductInfoHeader />
      <ProductInfoPrice />
      <ProductInfoDelivery />
    </StyledProductInfo>
  )
}

export default ProductInfo
