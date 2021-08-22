import styled from 'styled-components'

import { media, positionCenter } from 'src/styles/utils'

export const StyledProductCarousel = styled.div`
  margin: 0 -15px;

  ${media.greaterThan('tablet')`
    margin: 0;
  `}
`

export const StyledProductCarouselItem = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 100%;

  img {
    ${positionCenter()};
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const StyledProductCarouselThumb = styled.button`
  position: relative;
  width: 40px;
  height: 40px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
