import styled from 'styled-components'

import { inlineFlexbox, media, stripPx, textStyle } from 'src/styles/utils'

const GRID_MARGIN = `15px`
const LNB_LINK_PADDING = `8px`
export const LNB_HEIGHT_SM = `40px`
export const LNB_HEIGHT_LG = `50px`

export const StyledLnb = styled.nav`
  overflow-x: auto;
  background-color: ${({ theme }) => theme.colors.white};

  &::-webkit-scrollbar {
    display: none;
  }

  ul {
    ${inlineFlexbox('start')};
    height: ${LNB_HEIGHT_SM};
    padding: 0 ${stripPx(GRID_MARGIN) - stripPx(LNB_LINK_PADDING)}px;
    margin-left: ${stripPx(GRID_MARGIN) * -1}px;
    white-space: nowrap;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  li {
    a {
      ${inlineFlexbox()};
      ${textStyle('xs')};
      height: ${LNB_HEIGHT_SM};
      padding: 0 ${LNB_LINK_PADDING};
      font-weight: 700;
      color: ${({ theme }) => theme.colors.dark};
      border-bottom: 2px solid transparent;

      &.active {
        color: ${({ theme }) => theme.colors.blue};
        border-bottom-color: ${({ theme }) => theme.colors.blue};
      }

      &:hover {
        color: $blue;
      }
    }
  }

  ${media.greaterThan('tablet')`
    height: ${LNB_HEIGHT_LG};
    overflow-x: visible;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    ul {
      height: auto;
      padding: 0;
      margin-left: 0;
      border-bottom: 0;
    }

    li {
      a {
        ${textStyle('sm')};
        height: ${LNB_HEIGHT_LG};
      }
    }
  `}
`
