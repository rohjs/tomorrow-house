import { keyframes } from 'styled-components'

export const slideFromTop = keyframes`
  from {
    transform: translate3d(0, -100%, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`

export const slideFromRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`

export const slideFromBottom = keyframes`
  from {
    transform: translate3d(0, 100%, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`

export const slideFromLeft = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const fadeIn70 = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.7;
  }
`

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`
