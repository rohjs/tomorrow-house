import React, { memo } from 'react'
import { TinySliderSettings } from 'tiny-slider-react'

import { useAppSelector } from 'src/hooks'
import { getProductImages } from 'src/app/product/detail'

import { Slider, Thumbnails } from 'src/components'
import { StyledProductCarousel } from './styles'

const productCarouselOptions: TinySliderSettings = {
  autoplay: true,
  autoplayButtonOutput: false,
  controls: false,
  navContainer: '.productCarouselThumbnail',
}

const ProductCarousel: React.FC = () => {
  const productImages = useAppSelector(getProductImages)
  const id = 'product-carousel'

  if (!productImages.length) return null

  return (
    <StyledProductCarousel>
      <Slider
        className="productCarouselSlider"
        id={id}
        options={productCarouselOptions}
        images={productImages}
      />
      <Thumbnails
        id={id}
        images={productImages}
        tabletSize={56}
        desktopSize={75}
        className="productCarouselThumbnail"
      />
    </StyledProductCarousel>
  )
}

const MemoProductCarousel = memo(ProductCarousel)
export default MemoProductCarousel
