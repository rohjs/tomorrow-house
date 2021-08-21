import React from 'react'
import 'normalize.css'

import { useAppSelector } from 'src/hooks'
import { getModals } from 'src/app/modal'

import { Modal } from 'src/components'

const ProductDetailPage: React.FC = () => {
  const modals = useAppSelector(getModals)

  return <div>{modals.length > 0 && <Modal />}</div>
}

export default ProductDetailPage
