import styled from 'styled-components'

import { flexbox, inlineFlexbox, media, textStyle } from 'src/styles/utils'

export const StyledBreadcrumb = styled.div`
  ${flexbox('start')};
  flex-wrap: wrap;
  padding: 10px 0;

  a {
    ${inlineFlexbox()};
    ${textStyle('xs')};
    color: ${({ theme }) => theme.colors.secondary};

    &:active {
      opacity: 0.4;
    }
  }

  .chevron {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 0 2px;
    color: ${({ theme }) => theme.colors.tertiary};
    transform: rotate(-90deg);
  }

  ${media.greaterThan('tablet')`
    padding: 16px 0;

    a {
      ${textStyle('sm')};
    }

    .chevron {
      margin: 0 4px;
    }
  `}

  ${media.greaterThan('desktop')`
    padding-top: 24px;
    padding-bottom: 40px;

    a:hover {
      opacity: 0.4;
    }
  `}
`
