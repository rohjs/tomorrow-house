import React, { memo } from 'react'

const ProductInfoDelivery: React.FC = () => {
  return (
    <div>
      <div className="product-info-delivery">
        <span>일반택배</span>
        <strong className="tag-gray"> 무료배송 </strong>
      </div>
    </div>
  )
}

const MemoProductInfoDelivery = memo(ProductInfoDelivery)
export { MemoProductInfoDelivery as ProductInfoDelivery }
