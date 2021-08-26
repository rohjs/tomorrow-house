import React, { memo } from 'react'

import { useAppSelector } from 'src/hooks'
import { formatPrice } from 'src/utils/num'
import { getDeliveryBackwoodsFee, getDeliveryFee } from 'src/app/product/detail'

import { Tag } from 'src/components'
import { StyledProductInfoDelivery } from './styles'

const ProductInfoDelivery: React.FC = () => {
  const fee = useAppSelector(getDeliveryFee)
  const backwoodsFee = useAppSelector(getDeliveryBackwoodsFee)

  return (
    <StyledProductInfoDelivery>
      {fee > 0 ? (
        <p>일반택배 {formatPrice(fee)}원</p>
      ) : (
        <p>
          일반택배
          <Tag className="tag" label="무료배송" />
        </p>
      )}
      {backwoodsFee > 0 && (
        <p className="misc">
          제주도/도서산간 지역 {formatPrice(backwoodsFee)}원
        </p>
      )}
    </StyledProductInfoDelivery>
  )
}

const MemoProductInfoDelivery = memo(ProductInfoDelivery)
export { MemoProductInfoDelivery as ProductInfoDelivery }
