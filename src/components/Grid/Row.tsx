import React, { ReactNode } from 'react'
import { StyledRow } from './styles'

export interface RowProps {
  className?: string
  justifyContent?: string
  alignItems?: string
  children?: ReactNode
}

export const Row = ({
  className,
  justifyContent,
  alignItems,
  children,
}: RowProps) => {
  return (
    <StyledRow
      className={className}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </StyledRow>
  )
}
