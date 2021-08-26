import React, { memo } from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from 'src/hooks'
import { getTotalRatingCounts } from 'src/app/product/detail'

import { StarRating } from 'src/components'
import { StyledProductInfoHeader } from './styles'

const ProductInfoHeader = () => {
  const { rating, seller } = useAppSelector((state) => state.productDetail)
  const totalRatingCounts = useAppSelector(getTotalRatingCounts)

  return (
    <StyledProductInfoHeader>
      <Link className="brand" to={`/seller/${seller.id}`}>
        {seller.company}
      </Link>
      <h1 className="title">
        캠핑/가정용 400W 미니멀 전기히터 VO-HT015 (안전장치기능탑재)
      </h1>

      <div className="review">
        <StarRating
          id="productInfoHeader"
          rating={rating.averageRating}
          size={13}
          tabletSize={16}
        />

        <p>
          <strong>{totalRatingCounts}</strong>
          <span className="sm-hidden">개 리뷰</span>
        </p>
      </div>
    </StyledProductInfoHeader>
  )
}

const MemoProductInfoHeader = memo(ProductInfoHeader)
export { MemoProductInfoHeader as ProductInfoHeader }
