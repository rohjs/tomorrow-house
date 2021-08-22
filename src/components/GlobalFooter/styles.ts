import styled from 'styled-components'

import { flexbox, media, textStyle } from 'src/styles/utils'

export const StyledGlobalFooter = styled.footer`
  padding-top: 32px;
  padding-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.background};

  .globalFooterTitle {
    ${textStyle('xs')};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.dark};

    .chevron {
      display: inline-block;
      width: 12px;
      height: 12px;
      transform: rotate(-90deg);
    }
  }

  .globalFooterContact {
    ${textStyle('lg')};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.dark};
  }

  .globalFooterTime {
    ${textStyle('xxs')};
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.primary};
  }

  .globalFooterDetail {
    font-size: 10px;
    line-height: 16px;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors.secondary};

    div {
      ${flexbox('start')};

      address {
        display: inline;
      }

      dt::after {
        margin: 0 2px;
        content: ':';
      }
    }
  }

  ${media.greaterThan('desktop')`
      margin-bottom: 0;

      .globalFooterTitle {
        @include text-style(14);
      }

      .globalFooterContact:hover {
        opacity: 0.5;
      }

      .globalFooterDetail {
        ${flexbox('start')};

        div {
          a:hover {
            text-decoration: underline;
          }

          &:not(:last-child)::after {
            margin: 0 8px;
            content: '|';
          }
        }
      }
    }
  `}
`
