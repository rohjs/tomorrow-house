import React, { ReactNode } from 'react'
import { StyledRow } from './styles'

export interface RowProps {
  alignItems?: string
  children?: ReactNode
  className?: string
  justifyContent?: string
}

export const Row: React.FC<RowProps> = ({
  alignItems,
  children,
  className,
  justifyContent,
}) => {
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
