import React from 'react'

import { useAppSelector } from 'src/hooks'
import { getBreadcrumbLinks } from 'src/app/product/detail'

import { Breadcrumb, Column, Container, Grid, Row } from 'src/components'
import ProductCarousel from './ProductCarousel'
import ProductInfo from './ProductInfo'

const ProductDetailOverview: React.FC = () => {
  const breadcrumbLinks = useAppSelector(getBreadcrumbLinks)

  return (
    <Container>
      <Grid sm={4}>
        <Breadcrumb id="productDetailBreadcrumb" links={breadcrumbLinks} />
      </Grid>

      <Row>
        <Column sm={4} md={6} lg={7}>
          <ProductCarousel />
        </Column>
        <Column sm={4} md={6} lg={5}>
          <ProductInfo />
        </Column>
      </Row>
    </Container>
  )
}

export default ProductDetailOverview
