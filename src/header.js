import React from 'react'
import styled, { keyframes } from 'styled-components'
import CartIcon from './cart-icon'
import tinycolor from 'tinycolor2'

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 24px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  background: ${p => tinycolor(p.theme.colors.background).lighten().toString()};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  position: fixed;
`

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`

const Amount = styled.div`
  color: ${p => p.theme.colors.question};
  font-size: 12px;
  font-weight: bold;
`

const Cart = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`

const CartWrapper = styled.div`
  position: relative;
  height: 30px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const animationName = keyframes`
  0% { opacity: 1; transform: scale(1); }
  50% { opacity: 0; transform: scale(2);}
  100% { opacity: 1; transform: scale(1); }
`

const Items = styled.div`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 10px;
  text-align: center;
  background: ${p => p.theme.colors.button};
  color: ${p => p.theme.colors.buttonText};
  margin-left: 1em;
  position: absolute;
  right: 0;
  top: 0;
  animation: ${p => (p.animate ? animationName : '')} 0.3s 0s both;
`

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = { animate: false }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.amount !== this.props.amount) {
      console.log('animate')
      this.setState({ animate: true })
    }

    setTimeout(() => {
      console.log('stop animate')
      this.setState({ animate: false })
    }, 400)
  }
  render () {
    const {
      title,
      currency,
      amount,
      items,
      onClickCart,
      onClickTitle
    } = this.props
    return (
      <Wrapper>
        <Title onClick={onClickTitle}>{title}</Title>
        <Cart onClick={onClickCart}>
          <Amount>{`${amount} ${currency}`}</Amount>
          <CartWrapper>
            {items > 0 && <Items animate={this.state.animate}>{items}</Items>}
            <CartIcon />
          </CartWrapper>
        </Cart>
      </Wrapper>
    )
  }
}

export default Header
