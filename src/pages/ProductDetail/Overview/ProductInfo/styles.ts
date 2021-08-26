import styled from 'styled-components'

import { flexbox, media, textStyle } from 'src/styles/utils'

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
