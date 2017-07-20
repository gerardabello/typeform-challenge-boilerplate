import React from 'react'
import styled from 'styled-components'

import CreditCard from './credit-card.js'
import Modal from './mobile-modal.js'
import ShoppingCart from './shopping-cart'

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
`

class Checkout extends React.Component {
  constructor (props) {
    super(props)

    this.state = { pageIndex: 0 }

    this.onNext = this.onNext.bind(this)
  }

  onNext () {
    console.log('next')
    this.setState({ pageIndex: this.state.pageIndex + 1 })
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
            <CreditCard />
          </Section>
        </Wrapper>
      </Modal>
    )
  }
}

export default Checkout
