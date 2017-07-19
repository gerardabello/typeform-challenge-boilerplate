import React, { Component } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 80vw;
  width: 80vw;
`

const Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    border-radius: 5px;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.28);
    width: 70vw;
  }
`

const Description = styled.div`
  width: 100%;
  text-align: center;
`

const Price = styled.div`
  width: 100%;
  text-align: center;
`

const Button = styled.button`
  text-align: center;
  background: blue;
  border-radius: 3px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 12px 20px;
  color: ${p => p.theme.colors.buttonText};
  background: ${p => p.theme.colors.button};
`

class Product extends Component {
  render () {
    const { img, price, name } = this.props
    return (
      <Root>
        <Picture><img src={img} /></Picture>
        <Description>{name}</Description>
        <Price>{price}e</Price>
        <Button>Add to cart</Button>
      </Root>
    )
  }
}
export default Product
