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
const Total = styled.div`
  text-align: right;
`

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
const Price = styled.div``

const Name = styled.div`
  text-align: left;
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
const Remove = styled.div`
  flex: 1;
  padding-left: 2em;
  font-size: 0.8em;
`

const ShoppingCart = ({ cart, onNext, onRemove }) => {
  const uniqCart = R.groupWith(R.equals, cart)
  const total = cart.reduce((t, {price}) => t + price, 0)
  return (
    <Cart>
      <Title>Shopping Cart</Title>
      {uniqCart.reduce((acc, order, i) => {
        const items = order.map(({image, name, order, price}, j) =>
          <Item key={`${i}${j}`}>
            <Image src={image} alt='' />
            <Name>{name}</Name>
            <Remove onClick={() => onRemove(i)}>remove</Remove>
            <Price>{price}€</Price>
          </Item>
        )
        return acc.concat(items)
      }, [])}
      <Item>
        <span>total</span>
        <Total>{total} €</Total>
      </Item>
      <Button onClick={onNext}>Proceed to payment</Button>
    </Cart>
  )
}

export default ShoppingCart
