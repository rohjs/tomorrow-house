import React, { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'src/hooks'
import { setUser } from 'src/app/auth'
import { getTestMode, setTestMode } from 'src/app/system'

import { users } from './test'

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

  const pickRandomUser = () => {
    const index = Math.floor(Math.random() * users.length)
    return users[index]
  }

  useEffect(() => {
    if (testMode) dispatch(setUser(pickRandomUser()))
    else dispatch(setUser(null))
  }, [dispatch, testMode])

  return null
}

export default Effects
