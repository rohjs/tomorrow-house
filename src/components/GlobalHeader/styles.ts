import styled from 'styled-components'

import { media, stripPx } from 'src/styles/utils'
import { GNB_HEIGHT_SM, GNB_HEIGHT_LG } from './Gnb/styles'
import { LNB_HEIGHT_SM, LNB_HEIGHT_LG } from './Lnb/styles'

export const StyledGlobalHeader = styled.div`
  height: ${stripPx(GNB_HEIGHT_SM) + stripPx(LNB_HEIGHT_SM)}px;

  ${media.greaterThan('tablet')`
  height: ${stripPx(GNB_HEIGHT_LG) + stripPx(LNB_HEIGHT_LG)}px;
  `}
`
