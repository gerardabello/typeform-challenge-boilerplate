import React from 'react'
import styled from 'styled-components'
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

const Items = styled.div`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 10px;
  text-align: center;
  background: ${p => p.theme.colors.question};
  color: white;
  margin-left: 1em;
  position: absolute;
  right: 0;
  top: 0;
`

const Header = ({ title, currency, amount, items }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Cart>
        <Amount>{`${amount} ${currency}`}</Amount>
        <CartWrapper>
          <Items>{items}</Items>
          <CartIcon />
        </CartWrapper>
      </Cart>
    </Wrapper>
  )
}

export default Header
