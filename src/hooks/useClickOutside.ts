import { RefObject, useEffect } from 'react'

export const useClickOutside = <T extends HTMLElement>(
  elemRef: RefObject<T>,
  onClick: () => void
) => {
  const handleClickOutside = (e: MouseEvent) => {
    if (!elemRef?.current) return
    if (!elemRef.current.contains(e.target as Node)) {
      onClick()
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  })
}
