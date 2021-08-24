import React from 'react'

import { ChevronIcon } from 'src/assets/images'
import { StyledControls, StyledControlButton } from './styles'

export interface ControlsProps {
  className: string
}

export const Controls: React.FC<ControlsProps> = ({ className }) => {
  return (
    <StyledControls className={className}>
      <StyledControlButton className="prev" aria-label="이전">
        <ChevronIcon />
      </StyledControlButton>

      <StyledControlButton className="next" aria-label="다음">
        <ChevronIcon />
      </StyledControlButton>
    </StyledControls>
  )
}
