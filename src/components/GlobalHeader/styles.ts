import styled from 'styled-components'

import { media, stripPx } from 'src/styles/utils'
import { GNB_HEIGHT_SM, GNB_HEIGHT_LG } from './Gnb/styles'
import { LNB_HEIGHT_SM, LNB_HEIGHT_LG } from './Lnb/styles'

export const StyledGlobalHeader = styled.div`
  width: 100%;
  height: ${stripPx(GNB_HEIGHT_SM) + stripPx(LNB_HEIGHT_SM)}px;

  &.fixed {
    .gnb,
    .lnb {
      position: fixed;
      transition: top 200ms;
    }
  }

  &.scrollDown {
    .gnb {
      top: -${GNB_HEIGHT_SM};
    }

    .lnb {
      top: -${LNB_HEIGHT_SM};
    }
  }

  &.scrollUp {
    .gnb {
      position: fixed;
      top: 0;
    }

    .lnb {
      position: relative;
      top: 0;
    }
  }

  .gnbLayout,
  .lnbLayout,
  .gnb,
  .lnb {
    width: 100%;
  }

  .gnbLayout {
    height: ${GNB_HEIGHT_SM};
  }

  .lnbLayout {
    height: ${LNB_HEIGHT_SM};
  }

  .gnb {
    z-index: ${({ theme }) => theme.levels.gnb};
    transition: top 200ms;
  }

  .lnb {
    z-index: ${({ theme }) => theme.levels.lnb};
  }

  ${media.greaterThan('tablet')`
    height: ${stripPx(GNB_HEIGHT_LG) + stripPx(LNB_HEIGHT_LG)}px;

    &.scrollDown {
      .gnb {
        top: -${GNB_HEIGHT_LG};
      }

      .lnb {
        top: -${LNB_HEIGHT_LG};
      }
    }

    &.scrollUp {
      .lnb {
        position: fixed;
        top: ${GNB_HEIGHT_LG};
      }
    }

    .gnbLayout {
      height: ${GNB_HEIGHT_LG};
    }

    .lnbLayout {
      height: ${LNB_HEIGHT_LG};
    }
  `}
`
