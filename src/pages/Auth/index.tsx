import React from 'react'
import store from 'store'

import { useAuth, useMount, useRouter } from 'src/hooks'

const AuthPage: React.FC = () => {
  const { history, query } = useRouter()
  const { postLogIn } = useAuth()

  const redirectUrl = store.get('tmrHouse.redirectUrl') || '/'
  const redirect = () => history.push(redirectUrl)

  const handleMount = () => {
    const code = query.get('code')
    postLogIn(code as string, redirect, redirect)
  }

  useMount(handleMount)

  return <div />
}

export default AuthPage
