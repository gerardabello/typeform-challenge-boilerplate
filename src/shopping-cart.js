import React from 'react'
import styled from 'styled-components'
import R from 'ramda'

const Cart = styled.div`

`
const Total = styled.div``

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
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

const ShoppingCart = ({ cart, price, onPurchase }) => {
  const uniqCart = R.groupWith(R.equals, cart)
  return (
    <Cart>
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
    </Cart>
  )
}

export default ShoppingCart
