import React from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector } from 'src/hooks'

import { ProductInfoHeader } from './Header'

interface ProductInfoProps {
  product?: Product
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { mileage, price, rating, seller } = useAppSelector(
    (state) => state.productDetail
  )

  return (
    <section className="product-info">
      <ProductInfoHeader seller={seller} rating={rating} />

      {/* <!-- NOTE: 모바일용 가격 --> */}
      <div className="product-info-price sm-only">
        <div className="info-original-price">
          <div className="discount-rate">
            <span className="rate">34</span>
            <span className="percent">%</span>
          </div>

          <div className="price-off">
            <strong className="amount">{price.originalPrice}</strong>
            <span className="currency sm-hidden">원</span>
          </div>
        </div>

        <div className="info-sale-price">
          <div className="price-20">
            <strong className="amount">{price.salePrice}</strong>
            <span className="currency">원</span>
          </div>

          <strong className="tag-red"> 특가 </strong>
        </div>

        <p className="info-point">
          <strong aria-label="987 포인트">{mileage}P</strong>
          적립해드립니다. (VIP 3배 혜택 적용됨)
        </p>
      </div>

      {/* <!-- NOTE: 태블릿 이후 가격 --> */}
      <div className="product-info-price sm-hidden">
        <div className="info-price-wrapper">
          <div className="discount-rate">
            <span className="rate">34</span>
            <span className="percent">%</span>
          </div>

          <div className="info-price">
            <div className="price-off">
              <strong className="amount">49,900</strong>
              <span className="currency">원</span>
            </div>

            <div className="info-sale-price">
              <div className="price-32">
                <strong className="amount">32,900</strong>
                <span className="currency">원</span>
              </div>

              <strong className="tag-red"> 특가 </strong>
            </div>
          </div>
        </div>

        <p className="info-point">
          <strong aria-label="987 포인트">987P</strong>
          적립해드립니다. (VIP 3배 혜택 적용됨)
        </p>
      </div>

      <div className="product-info-delivery">
        <span>일반택배</span>
        <strong className="tag-gray"> 무료배송 </strong>
      </div>
    </section>
  )
}

export default ProductInfo
