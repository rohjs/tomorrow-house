import React, { ReactNode, RefObject, useRef } from 'react'
import { TinySliderSettings } from 'tiny-slider'
import { tns } from 'tiny-slider/src/tiny-slider'
import 'tiny-slider/dist/tiny-slider.css'

import { useMount } from 'src/hooks'

import { StyledTinySliderItem } from './styles'

export interface TinySliderProps {
  children: ReactNode[]
  id: string
  className?: string
  options?: TinySliderSettings
  size?: number
  controlsRef?: RefObject<HTMLDivElement>
  thumbnailRef?: RefObject<HTMLDivElement>
}

const DEFAULT_OPTIONS: TinySliderSettings = {
  arrowKeys: true,
  controls: false,
  navAsThumbnails: true,
  mouseDrag: true,
  preventScrollOnTouch: 'auto',
}

export const TinySlider: React.FC<TinySliderProps> = ({
  children,
  id,
  className,
  options,
  size,
  controlsRef,
  thumbnailRef,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null)

  const initSlider = () => {
    tns({
      ...DEFAULT_OPTIONS,
      ...options,
      container: sliderRef?.current as HTMLElement,
      controlsContainer: (controlsRef?.current as HTMLElement) || undefined,
      navContainer: (thumbnailRef?.current as HTMLElement) || undefined,
    })
  }

  useMount(initSlider)

  return (
    <div className={className} ref={sliderRef}>
      {children.map((item, index) => {
        return (
          <StyledTinySliderItem key={`${id}-slider-${index}`}>
            <figure>{item}</figure>
          </StyledTinySliderItem>
        )
      })}
    </div>
  )
}
