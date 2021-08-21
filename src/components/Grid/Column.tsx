import React, { ReactNode } from 'react'
import { StyledColumn } from './styles'

export interface ColumnProps {
  sm: number
  md?: number
  lg?: number
  children?: ReactNode
}

export const Column: React.FC<ColumnProps> = ({
  sm,
  md,
  lg = md,
  children,
}) => {
  return (
    <StyledColumn sm={sm} md={md} lg={lg}>
      {children}
    </StyledColumn>
  )
}
