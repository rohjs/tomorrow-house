import React, { ReactNode } from 'react'
import { StyledColumn } from './styles'

export interface ColumnProps {
  sm: number
  md?: number
  lg?: number
  children?: ReactNode
}

export const Column = ({ sm, md, lg = md, children }: ColumnProps) => {
  return (
    <StyledColumn sm={sm} md={md} lg={lg}>
      {children}
    </StyledColumn>
  )
}
