declare interface Product {
  id: string
  seller: ProductSeller
  title: string
  rating: ProductRating
  price: ProductPrice
  mileage: number
  delivery: ProductDelivery
  detailImages: string[]
  productImages: string[]
  soldOut: boolean
  sellingOptions: ProductSellingOption[]
  category: ProductCategory[]
}

declare interface ProductCategory {
  category: string
  url: string
}

declare interface ProductDelivery {
  fee: ProductDeliveryFee
  refundExchangeInfo: {
    refundFee: number
    exchangeFee: number
    address: string
  }
}

declare interface ProductDeliveryFee {
  fee: number
  backwoodsFee: number
}

declare interface ProductPrice {
  originalPrice: number
  salePrice: number
  isOnDiscount: boolean
  discountExpiresAt: number | null
}

declare interface ProductRating {
  averageRating: number
  count: number
  countFor1: number
  countFor2: number
  countFor3: number
  countFor4: number
  countFor5: number
}

declare interface ProductSeller {
  id: string
  company: string
  representative: string
  csPhone: string
  address: string
  email: string
  license: string
}

declare interface ProductSellingOption {
  required: boolean
  options: {
    content: string
    price: number
  }[]
}
