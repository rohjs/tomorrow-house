import React from 'react'
import TinySlider, { TinySliderSettings } from 'tiny-slider-react'
import 'tiny-slider/dist/tiny-slider.css'

import { StyledSlider, StyledSliderItem } from './styles'

interface SliderProps {
  images: string[]
  id: string
  className?: string
  options?: TinySliderSettings
}

const DEFAULT_OPTIONS: TinySliderSettings = {
  arrowKeys: true,
  controls: false,
  navAsThumbnails: true,
  mouseDrag: true,
}

export const Slider: React.FC<SliderProps> = ({
  images,
  id,
  className,
  options,
}) => {
  return (
    <StyledSlider className={className} role="region">
      <TinySlider settings={{ ...DEFAULT_OPTIONS, ...options }}>
        {images.map((image, index) => {
          const key = `${id}-slider-${index}`

          return (
            <StyledSliderItem key={key}>
              <figure>
                <img src={`/samples/${image}`} data-src={image} alt="" />
              </figure>
            </StyledSliderItem>
          )
        })}
      </TinySlider>
    </StyledSlider>
  )
}
