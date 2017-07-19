import React from 'react'
import styled from 'styled-components'
import CartIcon from './cart-icon'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  background: ${p => p.theme.colors.background};
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
  color: #7DBB91;
  font-size: 12px;
  font-weight: bold;
`

const Cart = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`

const Items = styled.div`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  line-height: 16px;
  font-size: 10px;
  text-align: center;
  background: #7DBB91;
  color: white;
  margin-left: 1em;
`

const Header = ({title, currency, amount, items}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Cart>
        <Amount>{`${amount} ${currency}`}</Amount>
        <Items><CartIcon /></Items>
      </Cart>
    </Wrapper>
  )
}

export default Header
