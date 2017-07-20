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
  opacity: ${props => (props.isActive ? 1 : 0.75)};
  transition: all 300ms ease;
`

const Image = styled.img`
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px rgba(0, 0, 0, 0.28);
  width: 70vw;
  height: 70vw;
  object-fit: cover;
  object-position: center;
  max-width: 450px;
  max-height: 450px;
  user-select: none;
  user-drag: none;
`

const Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Description = styled.div`
  padding-top: 20px;
  width: 100%;
  text-align: center;
  font-size: 22px;
  color: ${p => p.theme.colors.answer};
`

const Price = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  text-align: center;
  color: ${p => p.theme.colors.question};
`

const Button = styled.button`
  text-align: center;
  background: blue;
  border-radius: 3px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 12px 30px;
  color: ${p => p.theme.colors.buttonText};
  background: ${p => p.theme.colors.button};
`

class Product extends Component {
  render () {
    const { img, price, name } = this.props
    return (
      <Root isActive={this.props.isActive}>
        <Picture><Image isActive={this.props.isActive} src={img} /></Picture>
        <Description>{name}</Description>
        <Price>{price}e</Price>
        <Button onClick={this.props.onClick}>
          Add to cart
        </Button>
      </Root>
    )
  }
}
export default Product
