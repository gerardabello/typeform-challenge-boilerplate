import React from 'react'
import styled from 'styled-components'
import R from 'ramda'

import Payment from './payment'
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

  componentDidUpdate (prevProps) {
    if (!this.props.open && prevProps.open) {
      setTimeout(() => this.setState({pageIndex: 0}), 500)
    }
  }

  onNext () {
    this.setState({ pageIndex: R.inc(this.state.pageIndex) })
  }

  render () {
    const { open, cart, onRemoveCartItem } = this.props
    return (
      <Modal open={open}>
        <Wrapper index={this.state.pageIndex}>
          <Section>
            <ShoppingCart onNext={this.onNext} cart={cart} onRemove={onRemoveCartItem} />
          </Section>
          <Section>
            <Shipment onNext={this.onNext} />
          </Section>
          <Section>
            <Payment onChange={(a) => console.log(a)} />
          </Section>
        </Wrapper>
      </Modal>
    )
  }
}

export default Checkout
