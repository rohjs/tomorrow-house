import React from 'react'

import { StyledPrice, StyledPriceOff } from './styles'

interface PriceOffProps {
  amount: number
  className?: string
}

export interface PriceProps extends PriceOffProps {
  amount: number
  size?: 16 | 20 | 32
}

export const PriceOff: React.FC<PriceOffProps> = ({ amount, className }) => {
  return (
    <StyledPriceOff className={className}>
      <strong className="amount">
        {amount.toLocaleString('en', { maximumFractionDigits: 0 })}
      </strong>
      <span className="currency">원</span>
    </StyledPriceOff>
  )
}

export const Price: React.FC<PriceProps> = ({
  amount,
  className,
  size = 16,
}) => {
  return (
    <StyledPrice className={className} size={size}>
      <strong className="amount">
        {amount.toLocaleString('en', { maximumFractionDigits: 0 })}
      </strong>
      <span className="currency">원</span>
    </StyledPrice>
  )
}
