import React from 'react'
import 'normalize.css'

import { useAppSelector } from 'src/hooks'
import { getModals } from 'src/app/modals'

import { Gnb, Modal } from 'src/components'

const App: React.FC = () => {
  const modals = useAppSelector(getModals)
  return (
    <div>
      <Gnb />

      {modals.length > 0 && <Modal />}
    </div>
  )
}

export default App
