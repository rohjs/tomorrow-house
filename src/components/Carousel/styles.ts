import styled from 'styled-components'

import { flexbox, media, positionCenter } from 'src/styles/utils'

import type { ThumbnailsProps } from './Thumbnails'

export const StyledSlider = styled.div`
  overflow: hidden;
  border-radius: 4px;
`

export const StyledSliderItem = styled.div`
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

export const StyledThumbnails = styled.div`
  ${flexbox('start')};
`

type StyledThumbnailItemProps = Pick<
  ThumbnailsProps,
  'size' | 'tabletSize' | 'desktopSize'
>

export const StyledThumbnailItem = styled.button<StyledThumbnailItemProps>`
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

  ${media.greaterThan<StyledThumbnailItemProps>('tablet')`
    width: ${({ tabletSize }) => tabletSize}px;
    height: ${({ tabletSize }) => tabletSize}px;

    img {
      width: ${({ tabletSize }) => tabletSize}px;
      height: ${({ tabletSize }) => tabletSize}px;
    }
  `}

  ${media.greaterThan<StyledThumbnailItemProps>('desktop')`
    width: ${({ desktopSize }) => desktopSize}px;
    height: ${({ desktopSize }) => desktopSize}px;

    img {
      width: ${({ desktopSize }) => desktopSize}px;
      height: ${({ desktopSize }) => desktopSize}px;
    }
  `}
`

export const StyledControls = styled.div`
  ${flexbox('between')};
  width: 100%;
`

export const StyledControlButton = styled.button`
  ${flexbox()};
  width: 40px;
  height: 40px;
  font-size: 28px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  transition: background-color 100ms ease-in-out, color 100ms ease-in-out;

  &.prev {
    svg {
      margin-left: -2px;
      transform: rotate(90deg);
    }
  }

  &.next {
    svg {
      margin-right: -2px;
      transform: rotate(-90deg);
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blue};
  }

  &[disabled] {
    visibility: hidden;
  }
`
