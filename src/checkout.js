import React from 'react'
import styled from 'styled-components'

import CreditCard from './credit-card.js'
import Modal from './mobile-modal.js'

const Wrapper = styled.div`
  padding: 10px;
`

const Header = styled.div`
  padding: 10px;
`

const Checkout = ({ open }) => {
  return (
    <Modal open={open}>
      <Header>
        <h2>Checkout page</h2>
      </Header>
      <Wrapper>
        <CreditCard />
      </Wrapper>
    </Modal>
  )
}

export default Checkout
