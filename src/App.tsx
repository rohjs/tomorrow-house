import React from 'react'

import 'normalize.css'

import { Gnb, Column, Container, Row } from 'src/components'

const App: React.FC = () => {
  return (
    <div>
      <Gnb />
      <Container>
        <Row>
          <Column sm={2} md={4}>
            <div style={{ background: 'red' }}>hi</div>
          </Column>
        </Row>
      </Container>
    </div>
  )
}

export default App
