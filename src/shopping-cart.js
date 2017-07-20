import React from 'react'
import styled from 'styled-components'
import R from 'ramda'

const Cart = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`
const Title = styled.h2`
  font-size: 20px;
  color: ${p => p.theme.colors.question};
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 20px;
      margin-bottom: 12px;
`
const Total = styled.div``

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
      padding-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const Image = styled.img`
  width: 60px;
  height: 60px;
`

const Amount = styled.div`
  width: 30px;
`
const Price = styled.div``

const Name = styled.div`
  text-align: left;
  flex: 1;
  margin-left: 20px;
`

const Button = styled.button`
  outline: none;
  border: none;
  width: 100%;
  font-size: 14px;
  padding: 14px;
  border-radius: 3px;
  font-weight: 500;
  background: ${p => p.theme.colors.button};
  color: ${p => p.theme.colors.buttonText};
  margin-top: 12px;
`

const ShoppingCart = ({ cart, price, onNext }) => {
  const uniqCart = R.groupWith(R.equals, cart)
  return (
    <Cart>
      <Title>Shopping Cart</Title>
      {uniqCart.map((order, i) => {
        const { name, price, image } = R.nth(0, order)
        return (
          <Item key={i}>
            <Image src={image} alt='' />
            <Name>{name}</Name>
            <Amount>{R.length(order)}</Amount>
            <Price>{price}€</Price>
          </Item>
        )
      })}
      <Total>{price}</Total>
      <Button onClick={onNext}>Proceed to payment</Button>
    </Cart>
  )
}

export default ShoppingCart
