import React from 'react'
import styled from 'styled-components'

const Cart = styled.div``
const Total = styled.div``

const ShoppingCart = ({cart = [], onPurchase}) => {
  const price = cart.reduce((total, order) => total + order.price, 0)
  return (
    <Cart>
      {cart.map((order) =>
        <div>
          {order.image}
          {order.title}
          {order.amount}
          {order.price}
        </div>
      )}
      <Total>{price}</Total>
    </Cart>
  )
}

export default ShoppingCart
