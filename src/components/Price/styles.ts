import styled, { css } from 'styled-components'

import { inlineFlexbox, textStyle } from 'src/styles/utils'
import { PriceProps } from './index'

type StyledPriceProps = Pick<PriceProps, 'size'>

const price16 = css`
  .amount {
    font-size: 16px;
  }

  .currency {
    ${textStyle('sm')};
  }
`

const price20 = css`
  .amount {
    font-size: 20px;
  }

  .currency {
    ${textStyle('base')};
  }
`

const price32 = css`
  .amount {
    font-size: 32px;
  }

  .currency {
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -0.02em;
  }
`

function setPriceSize(size?: number) {
  switch (size) {
    case 16:
      return price16
    case 20:
      return price20
    case 32:
      return price32
    default:
      return price16
  }
}

export const StyledPrice = styled.div<StyledPriceProps>`
  ${inlineFlexbox('start')};
  color: ${({ theme }) => theme.colors.dark};

  .amount {
    font-family: ${({ theme }) => theme.fontFamilies.price};
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .currency {
    font-family: ${({ theme }) => theme.fontFamilies.main};
    font-weight: 700;
  }

  ${({ size }) => setPriceSize(size)};
`

export const StyledPriceOff = styled(StyledPrice)`
  ${inlineFlexbox('start')};
  color: ${({ theme }) => theme.colors.secondary};

  .amount {
    font-family: ${({ theme }) => theme.fontFamilies.price};
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.01em;
    text-decoration: line-through;
  }

  .currency {
    ${textStyle('xs')};
    font-family: ${({ theme }) => theme.fontFamilies.main};
    font-weight: 400;
  }
`
