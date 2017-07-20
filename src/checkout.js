import React from 'react'
import styled from 'styled-components'
import R from 'ramda'

import FlatCreditCard from './flat-credit-card.js'
import Modal from './mobile-modal.js'
import ShoppingCart from './shopping-cart'
import Shipment from './shipment'

const Wrapper = styled.div`
  transform: translateX(
      ${props => -100 * props.index}vw
  );
  display: flex;
  transition: transform 0.6s ease;
`

const Section = styled.div`
  height: 100vh;
  width: 100vw;
  flex: 0 0 100vw;
  padding-top: 80px;
`

class Checkout extends React.Component {
  constructor (props) {
    super(props)

    this.state = { pageIndex: 0 }

    this.onNext = this.onNext.bind(this)
  }

  onNext () {
    this.setState({ pageIndex: R.inc(this.state.pageIndex) })
  }

  render () {
    const { open, cart } = this.props
    return (
      <Modal open={open}>
        <Wrapper index={this.state.pageIndex}>
          <Section>
            <ShoppingCart onNext={this.onNext} cart={cart} />
          </Section>
          <Section>
            <Shipment onNext={this.onNext} />
          </Section>
          <Section>
            <FlatCreditCard
              onChange={cardDetails => console.log(cardDetails)}
            />
          </Section>
        </Wrapper>
      </Modal>
    )
  }
}

export default Checkout
