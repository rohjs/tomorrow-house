import styled from 'styled-components'

import { flexbox, inlineFlexbox, media, textStyle } from 'src/styles/utils'

export const StyledProductInfo = styled.section`
  padding: 20px 0;

  ${media.greaterThan('tablet')`
    padding: 0;
  `}

  ${media.greaterThan('desktop')`
    margin-bottom: 20px;
  `}
`

export const StyledProductInfoHeader = styled.header`
  margin-bottom: 16px;

  .brand {
    ${textStyle('xs')}
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue};

    &:active {
      opacity: 0.4;
    }
  }

  .title {
    ${textStyle('md')}
    margin-bottom: 4px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.dark};
  }

  .review {
    ${flexbox('start')};

    .starRating {
      margin-right: 8px;
    }

    p {
      ${textStyle('xs')}
      font-weight: 700;
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  ${media.greaterThan('tablet')`
    .brand {
      display: inline-block;
      margin-bottom: 8px;
    }

    .title {
      ${textStyle('lg')};
      margin-bottom: 8px;
    }
  `}

  ${media.greaterThan('desktop')`
    .brand {
      &:hover {
        opacity: 0.4;
      }
    }
  `}
`

export const StyledProductInfoPrice = styled.div`
  margin-bottom: 16px;

  .originalPriceWrapper,
  .salePriceWrapper {
    ${flexbox('start')};
  }

  .originalPriceWrapper {
    .discount {
      margin-right: 4px;
    }
  }

  .salePriceWrapper {
    margin-bottom: 12px;
  }

  .salePrice {
    margin-right: 4px;
  }

  ${media.greaterThan('tablet')`
    .priceWrapper {
      ${flexbox('start', 'end')};
      margin-bottom: 12px;
    }

    .discount {
      align-items: flex-end;
      margin-right: 16px;

      .rate {
        font-size: 44px;
        line-height: 36px;
      }

      .percent {
        line-height: 1;
      }
    }

    .salePriceWrapper {
      margin-bottom: -1px;

      .salePrice {
        margin-right: 8px;
      }
    }

    .mileage {
      margin-bottom: 20px;
    }
  `}
`

export const StyledProductInfoDiscount = styled.div`
  ${inlineFlexbox('start')};
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.blue};

  .rate {
    font-family: ${({ theme }) => theme.fontFamilies.price};
  }

  .percent {
    font-family: ${({ theme }) => theme.fontFamilies.main};
  }
`

export const StyledProductInfoMileage = styled.p`
  ${textStyle('xs')};
  color: ${({ theme }) => theme.colors.secondary};

  strong {
    margin-right: 0.3em;
    color: ${({ theme }) => theme.colors.blue};
  }
`
