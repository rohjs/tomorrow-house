import styled from 'styled-components'

import { flexbox, media, positionCenter } from 'src/styles/utils'
import type { TinySliderThumbnailProps } from './Thumbnail'

export const StyledTinySliderItem = styled.div`
  figure {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }

  img {
    ${positionCenter()};
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const StyledTinySliderThumbnail = styled.div`
  ${flexbox('start')};
`

type StyledTinySliderThumbnailItemProps = Pick<
  TinySliderThumbnailProps,
  'size' | 'tabletSize' | 'desktopSize'
>

export const StyledTinySliderThumbnailItem = styled.button<StyledTinySliderThumbnailItemProps>`
  ${flexbox()};
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  overflow: hidden;
  border-radius: 4px;

  &.tns-nav-active {
    border: 3px solid ${({ theme }) => theme.colors.blue};
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  img {
    display: block;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    object-fit: cover;
    transition: transform 200ms;
  }

  ${media.greaterThan<StyledTinySliderThumbnailItemProps>('tablet')`
    width: ${({ tabletSize }) => tabletSize}px;
    height: ${({ tabletSize }) => tabletSize}px;

    img {
      width: ${({ tabletSize }) => tabletSize}px;
      height: ${({ tabletSize }) => tabletSize}px;
    }
  `}

  ${media.greaterThan<StyledTinySliderThumbnailItemProps>('desktop')`
    width: ${({ desktopSize }) => desktopSize}px;
    height: ${({ desktopSize }) => desktopSize}px;

    img {
      width: ${({ desktopSize }) => desktopSize}px;
      height: ${({ desktopSize }) => desktopSize}px;
    }
  `}
`
