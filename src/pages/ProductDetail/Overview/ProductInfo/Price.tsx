import React, { memo } from 'react'

import { useAppSelector, useResponsive } from 'src/hooks'
import { getMileage, getPrice } from 'src/app/product/detail'

import { Price, PriceOff, Tag } from 'src/components'
import {
  StyledProductInfoMileage,
  StyledProductInfoDiscount,
  StyledProductInfoPrice,
} from './styles'

const ProductInfoPrice: React.FC = () => {
  const { originalPrice, salePrice, isOnDiscount } = useAppSelector(getPrice)
  const mileage = useAppSelector(getMileage)
  const discountRate =
    100 - Math.ceil((Number(salePrice) / Number(originalPrice)) * 100)
  const { isMobile } = useResponsive()

  const discount = (
    <StyledProductInfoDiscount className="discount">
      <span className="rate">{discountRate}</span>
      <span className="percent">%</span>
    </StyledProductInfoDiscount>
  )

  const mileageGuide = (
    <StyledProductInfoMileage className="mileage">
      <strong aria-label={`${mileage} 포인트`}>{mileage}P</strong>
      적립해드립니다. (VIP 3배 혜택 적용됨)
    </StyledProductInfoMileage>
  )

  if (isMobile)
    return (
      <StyledProductInfoPrice>
        <div className="originalPriceWrapper">
          {isOnDiscount && discount}
          <PriceOff amount={originalPrice} />
        </div>

        <div className="salePriceWrapper">
          <Price className="salePrice" amount={salePrice} size={20} />
          <Tag color="red" label="특가" />
        </div>

        {mileageGuide}
      </StyledProductInfoPrice>
    )

  return (
    <StyledProductInfoPrice>
      <div className="priceWrapper">
        {isOnDiscount && discount}

        <div>
          <PriceOff amount={originalPrice} />
          <div className="salePriceWrapper">
            <Price className="salePrice" amount={salePrice} size={32} />
            <Tag color="red" label="특가" />
          </div>
        </div>
      </div>

      {mileageGuide}
    </StyledProductInfoPrice>
  )
}

const MemoProductInfoPrice = memo(ProductInfoPrice)
export { MemoProductInfoPrice as ProductInfoPrice }
