import React, { Component } from 'react'
import styled from 'styled-components'
import Input from 'muicss/lib/react/input'

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
`

const Half = styled.div`
  display: flex;
  justify-content: space-around;
`
const Wrap = styled.div`
  width: 100%;
  margin-bottom: 25px;
`

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px;
`

const Imput = styled(Input)``

const Title = styled.h3`
  color: ${p => p.theme.colors.question};
`

const Steps = styled.span`
color: ${p => p.theme.colors.question};
`

const TitleWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`

class Shipment extends Component {
  render () {
    return (
      <Root>
        <TitleWrapper>
          <Title>Shipment address</Title>
          <Steps>steps <strong>1th</strong> of 3</Steps>
        </TitleWrapper>
        <Wrap>
          <Imput label='Name' floatingLabel />
          <Imput label='Address' floatingLabel />
          <Half>
            <Imput label='City' floatingLabel />
            <Imput label='Zip Code' floatingLabel />
          </Half>
        </Wrap>
        <Button onClick={this.props.onNext}>Next</Button>
      </Root>
    )
  }
}

export default Shipment
