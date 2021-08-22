import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'src/hooks'
import { getTestMode, setTestMode } from 'src/app/system'

const Effects: React.FC = (): null => {
  const dispatch = useAppDispatch()
  const testMode = useAppSelector(getTestMode)

  const toggleTestMode = (e: KeyboardEvent) => {
    if (e.key === 't') dispatch(setTestMode(!testMode))
  }

  useEffect(() => {
    window.addEventListener('keydown', toggleTestMode)
    return () => window.removeEventListener('keydown', toggleTestMode)
  })

  return null
}

export default Effects
