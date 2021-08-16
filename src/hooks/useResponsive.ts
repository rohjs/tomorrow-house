import { useEffect, useState } from 'react'
import { theme } from 'src/styles'
import { stripPx } from 'src/styles/utils'

interface UseResponsive {
  bp: string
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

function getResponsive() {
  const { innerWidth } = window

  let bp = 'M'
  let isMobile = true
  let isTablet = false
  let isDesktop = false

  if (innerWidth > stripPx(theme.breakpoints.tablet)) {
    bp = 'T'
    isMobile = false
    isTablet = true
  }
  if (innerWidth > stripPx(theme.breakpoints.desktop)) {
    bp = 'D'
    isTablet = false
    isDesktop = true
  }

  return {
    bp,
    isMobile,
    isTablet,
    isDesktop,
  }
}

export const useResponsive = (): UseResponsive => {
  const [responsive, setResponsive] = useState(getResponsive())

  const updateResponsive = () => {
    setResponsive(getResponsive())
  }

  useEffect(() => {
    window.addEventListener('resize', updateResponsive)
    return () => window.removeEventListener('resize', updateResponsive)
  }, [])

  return {
    ...responsive,
  }
}
