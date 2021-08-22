import React, { ReactNode, RefObject } from 'react'

import {
  StyledTinySliderThumbnail,
  StyledTinySliderThumbnailItem,
} from './styles'

export interface TinySliderThumbnailProps {
  children: ReactNode[]
  id: string
  className?: string
  size?: number
  tabletSize?: number
  desktopSize?: number
  thumbnailRef?: RefObject<HTMLDivElement>
}

export const TinySliderThumbnail: React.FC<TinySliderThumbnailProps> = ({
  children,
  id,
  className,
  size = 40,
  tabletSize = size,
  desktopSize = tabletSize,
  thumbnailRef,
}) => {
  return (
    <StyledTinySliderThumbnail className={className} ref={thumbnailRef}>
      {children.map((thumb, index) => {
        return (
          <StyledTinySliderThumbnailItem
            size={size}
            tabletSize={tabletSize}
            desktopSize={desktopSize}
            key={`${id}-slider-thumbnail-${index}`}
          >
            {thumb}
          </StyledTinySliderThumbnailItem>
        )
      })}
    </StyledTinySliderThumbnail>
  )
}
