import React from 'react'

import { Gnb } from './Gnb'
import { Lnb } from './Lnb'
import { StyledGlobalHeader } from './styles'

export const GlobalHeader: React.FC = () => {
  return (
    <StyledGlobalHeader>
      <Gnb />
      <Lnb />
    </StyledGlobalHeader>
  )
}
