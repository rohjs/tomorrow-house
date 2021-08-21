import React from 'react'

import { Container } from './Container'
import { Column, ColumnProps } from './Column'
import { Row, RowProps } from './Row'

type GridProps = ColumnProps & RowProps

export const Grid: React.FC<GridProps> = ({
  sm,
  md,
  lg = md,
  alignItems,
  justifyContent,
  children,
  className,
}) => {
  return (
    <Container className={className}>
      <Row alignItems={alignItems} justifyContent={justifyContent}>
        <Column sm={sm} md={md} lg={lg}>
          {children}
        </Column>
      </Row>
    </Container>
  )
}
