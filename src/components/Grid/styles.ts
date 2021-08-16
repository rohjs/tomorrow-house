import styled from 'styled-components'

import { media } from 'src/styles/utils'

import type { ColumnProps } from './Column'
import type { RowProps } from './Row'

export const StyledContainer = styled.div`
  width: 100%;
  padding: 0 5px;
  margin: 0 auto;

  ${media.greaterThan('tablet')`
    max-width: 1020px;
    padding: 0 30px;
  `}

  ${media.greaterThan('desktop')`
    max-width: 1140px;
    padding: 0;
  `}
`

export const StyledColumn = styled.div<ColumnProps>`
  width: ${({ sm }) => `${(100 / 4) * sm}%`};
  padding: 0 ${({ theme }) => theme.gutter};

  ${({ md }) =>
    md &&
    media.greaterThan('tablet')`
    width: ${(100 / 12) * md}%;
  `}

  ${({ lg }) =>
    lg &&
    media.greaterThan('desktop')`
    width: ${(100 / 12) * lg}%;
  `}
`

export const StyledRow = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;

  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent}`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`}
`
