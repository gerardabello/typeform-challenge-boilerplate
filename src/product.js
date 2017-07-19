import React, { Component } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 80vw;
`

const Picture = styled.div`
  height: 100%;
  width: 100%;
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
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`

const Price = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`

class Product extends Component {
  render () {
    const { img, price, description } = this.props
    return (
      <Root>
        <Picture><img src={img} /></Picture>
        <Description>{description}</Description>
        <Price>{price}e</Price>
      </Root>
    )
  }
}
export default Product
