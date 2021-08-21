import React from 'react'
import { Route } from 'react-router-dom'

import { useAppSelector } from 'src/hooks'
import { getModals } from 'src/app/modal'

import { Gnb, Modal } from 'src/components'
import ProductDetailPage from './ProductDetailPage'

const Routes: React.FC = () => {
  const modals = useAppSelector(getModals)

  return (
    <div className="app">
      <Gnb />
      <Route exact path="/" component={ProductDetailPage} />
      {modals.length > 0 && <Modal />}
    </div>
  )
}

export default Routes
