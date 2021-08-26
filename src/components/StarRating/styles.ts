import styled from 'styled-components'

import { inlineFlexbox, media } from 'src/styles/utils'

import type { StarRatingProps } from './index'

type StyledStarRatingProps = Pick<
  StarRatingProps,
  'size' | 'tabletSize' | 'desktopSize'
>

export const StyledStarRating = styled.div<StyledStarRatingProps>`
  ${inlineFlexbox()};

  svg {
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    color: ${({ theme }) => theme.colors.border} !important;
  }

  .active {
    color: ${({ theme }) => theme.colors.blue} !important;
  }

  .masked {
    ${inlineFlexbox()};
    position: relative;

    .active {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  ${media.greaterThan<StyledStarRatingProps>('tablet')`
    svg {
      width: ${({ tabletSize }) => `${tabletSize}px`};
      height: ${({ tabletSize }) => `${tabletSize}px`};
    }
  `}

  ${media.greaterThan<StyledStarRatingProps>('desktop')`
    svg {
      width: ${({ desktopSize }) => `${desktopSize}px`};
      height: ${({ desktopSize }) => `${desktopSize}px`};
    }
  `}
`
