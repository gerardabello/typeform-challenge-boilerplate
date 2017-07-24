import React, { Component } from 'react'
import styled from 'styled-components'
import tinycolor from 'tinycolor2'

const scaleMax = 1.03
const scaleMin = 0.9

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 70vw;
  width: 70vw;
  opacity: ${props => (props.isActive ? 1 : 0.75)};
  transition: all 300ms ease;
  transform: scale(${props => (props.isActive ? scaleMax * props.delta : scaleMin)});
  transition: all ease 300ms;
`

// 0,001 * 200 + 0,9

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px ${props => (props.isActive ? '10px' : '30px')} 40px -20px rgba(0, 0, 0, 0.2), 0 0 3px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  padding-bottom: 30px;
  background: ${p => tinycolor(p.theme.colors.background).lighten().toString()};
`

const Image = styled.img`
  width: 65vw;
  height: 60vw;
  object-fit: cover;
  object-position: center;
  max-width: 450px;
  max-height: 45vh;
  user-select: none;
  user-drag: none;
`

const Picture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Description = styled.div`
  padding-top: 30px;
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
  min-width: 150px;
  text-align: center;
  background: blue;
  border-radius: 3px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 12px 30px;
  color: ${p => p.theme.colors.buttonText};
  background: ${p => p.theme.colors.button};
  font-family: '${p => p.theme.font}', sans-serif;
`

class Product extends Component {
  render () {
    const { img, price, name } = this.props
    return (
      <Root isActive={this.props.isActive} delta={this.props.delta}>
        <Wrapper isActive={this.props.isActive}>
          <Picture><Image isActive={this.props.isActive} src={img} /></Picture>
          <Description>{name}</Description>
          <Price>{Math.floor(price * 100) / 100}€</Price>
          <Button onClick={this.props.onClick}>
            Add to cart
          </Button>
        </Wrapper>
      </Root>
    )
  }
}
export default Product
