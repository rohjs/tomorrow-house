import React, { useEffect, useMemo, useState } from 'react'
import cx from 'classnames'
import { throttle } from 'lodash-es'

import { useResponsive } from 'src/hooks'
import { stripPx } from 'src/styles/utils'

import { Gnb } from './Gnb'
import { Lnb } from './Lnb'

import { GNB_HEIGHT_SM, GNB_HEIGHT_LG } from './Gnb/styles'
import { LNB_HEIGHT_SM, LNB_HEIGHT_LG } from './Lnb/styles'
import { StyledGlobalHeader } from './styles'

const gnbHeightSm = stripPx(GNB_HEIGHT_SM)
const gnbHeightLg = stripPx(GNB_HEIGHT_LG)
const lnbHeightSm = stripPx(LNB_HEIGHT_SM)
const lnbHeightLg = stripPx(LNB_HEIGHT_LG)
const globalHeaderHeightSm = gnbHeightSm + lnbHeightSm
const globalHeaderHeightLg = gnbHeightLg + lnbHeightLg

export const GlobalHeader: React.FC = () => {
  const { isMobile } = useResponsive()
  const [fixed, setFixed] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(window.scrollY)
  const [scrollDirection, setScrollDirection] = useState(0)

  const toggleFixed = () => {
    const { scrollY } = window
    const globalHeaderHeight = isMobile
      ? globalHeaderHeightSm
      : globalHeaderHeightLg
    if (scrollY > globalHeaderHeight) {
      if (!fixed) setFixed(true)
    } else {
      if (fixed) setFixed(false)
    }
  }

  const toggleScrollDirection = () => {
    const { scrollY } = window
    if (scrollY > lastScrollY) {
      if (scrollDirection !== 1) setScrollDirection(1)
    } else {
      if (scrollDirection !== -1) setScrollDirection(-1)
    }
  }

  const handleScroll = throttle(() => {
    toggleFixed()
    toggleScrollDirection()
    setLastScrollY(window.scrollY)
  }, 200)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const nestedClassName = useMemo(
    () =>
      cx({
        fixed,
        scrollUp: scrollDirection === -1,
        scrollDown: scrollDirection === 1,
      }),
    [fixed, scrollDirection]
  )

  return (
    <StyledGlobalHeader className={nestedClassName}>
      <div className="gnbLayout">
        <Gnb />
      </div>

      <div className="lnbLayout">
        <Lnb />
      </div>
    </StyledGlobalHeader>
  )
}
