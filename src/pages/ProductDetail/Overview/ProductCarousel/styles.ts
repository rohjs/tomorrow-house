import styled from 'styled-components'

import {
  flexbox,
  media,
  positionCenter,
  positionCenterX,
} from 'src/styles/utils'

export const StyledProductCarousel = styled.div`
  position: relative;
  margin: 0 -15px;

  ${media.lessThan('tablet')`
    .productCarouselSlider {
      border-radius: 0;
    }

    .productCarouselThumbnail {
      ${positionCenterX()};
      bottom: 16px;

      button {
        width: 6px;
        height: 6px;
        margin: 0 4px;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 50%;
        opacity: 0.7;
        transition: transform 100ms ease-in-out, opacity 100ms ease-in-out;

        &.tns-nav-active {
          background-color: ${({ theme }) => theme.colors.white};
          border: 0;
          opacity: 1;
          transform: scale(1.333333);
        }
      }

      img {
        display: none;
      }
    }
  `}

  ${media.greaterThan('tablet')`
    padding-right: 30px;
    margin: 0;

    .productCarouselSlider {
      margin-bottom: 8px;
    }

    .productCarouselThumbnail {
      button {
        margin-right: 8px;
      }
    }
  `}

  ${media.greaterThan('desktop')`
    ${flexbox('end', 'start')};
    flex-direction: row-reverse;

    .productCarouselSlider {
      width: 500px;
      height: 500px;
      margin-bottom: 0;
    }

    .productCarouselThumbnail {
      align-self: stretch;
      flex-direction: column;
      overflow-y: auto;
      margin-right: 8px;

      &::-webkit-scrollbar {
        display: none;
      }

      button {
        margin-right: 0;
        margin-bottom: 8px;
      }
    }
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
