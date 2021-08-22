import React, { memo, useRef } from 'react'
import type { TinySliderSettings } from 'tiny-slider'

import { useAppSelector } from 'src/hooks'
import { getProductImages } from 'src/app/product/detail'

import { TinySlider, TinySliderThumbnail } from 'src/components'
import { StyledProductCarousel } from './styles'

const productCarouselOptions: TinySliderSettings = {
  autoplay: true,
  autoplayButtonOutput: false,
  controls: false,
}

const ProductCarousel: React.FC = () => {
  const productImages = useAppSelector(getProductImages)
  const thumbnailRef = useRef<HTMLDivElement>(null)
  const id = 'product-carousel'

  const children = productImages.map((image) => {
    return <img src={`/samples/${image}`} alt="" key={`${id}-${image}`} />
  })

  if (!productImages.length) return null

  return (
    <StyledProductCarousel>
      <TinySlider
        id={id}
        options={productCarouselOptions}
        thumbnailRef={thumbnailRef}
      >
        {children}
      </TinySlider>

      <TinySliderThumbnail id={id} thumbnailRef={thumbnailRef} tabletSize={56}>
        {children}
      </TinySliderThumbnail>
    </StyledProductCarousel>
  )
}

const MemoProductCarousel = memo(ProductCarousel)
export default MemoProductCarousel
