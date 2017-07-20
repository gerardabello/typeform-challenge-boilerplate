import React from 'react'
import styled from 'styled-components'

import CreditCard from './credit-card.js'
import Modal from './mobile-modal.js'
import ShoppingCart from './shopping-cart'

const Wrapper = styled.div`
  padding: 20px;
`

const Header = styled.div`
  padding: 20px;
`

const Checkout = ({ open }) => {
  return (
    <Modal open={open}>
      <Header>
        <h2>Checkout page</h2>
      </Header>
      <Wrapper>
        <ShoppingCart />
        <CreditCard />
      </Wrapper>
    </Modal>
  )
}

export default Checkout
