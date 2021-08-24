import React from 'react'

import { StyledThumbnails, StyledThumbnailItem } from './styles'

export interface ThumbnailsProps {
  className: string
  id: string
  images: string[]
  size?: number
  tabletSize?: number
  desktopSize?: number
}

export const Thumbnails: React.FC<ThumbnailsProps> = ({
  className,
  id,
  images,
  size = 40,
  tabletSize = size,
  desktopSize = tabletSize,
}) => {
  return (
    <StyledThumbnails className={className}>
      {images.map((image, index) => {
        return (
          <StyledThumbnailItem
            size={size}
            tabletSize={tabletSize}
            desktopSize={desktopSize}
            key={`${id}-slider-thumbnail-${index}`}
          >
            <img src={`/samples/${image}`} alt={`${index}번 이미지 보기`} />
          </StyledThumbnailItem>
        )
      })}
    </StyledThumbnails>
  )
}
