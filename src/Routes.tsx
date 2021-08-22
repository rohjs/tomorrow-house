import React from 'react'
import { Route } from 'react-router-dom'

import { useAppSelector } from 'src/hooks'
import { getModals } from 'src/app/modal'
import { getToasts } from 'src/app/toast'

import { GlobalFooter, GlobalHeader, Modal, Toast } from 'src/components'
import ProductDetailPage from './ProductDetailPage'

const Routes: React.FC = () => {
  const modals = useAppSelector(getModals)
  const toasts = useAppSelector(getToasts)

  return (
    <div className="app">
      <GlobalHeader />

      <Route exact path="/" component={ProductDetailPage} />
      {modals.length > 0 && <Modal />}
      {toasts.length > 0 && <Toast />}
      <GlobalFooter />
    </div>
  )
}

export default Routes
