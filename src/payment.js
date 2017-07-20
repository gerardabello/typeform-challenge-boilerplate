import React, {Component} from 'react'
import styled from 'styled-components'
import FlatCreditCard from './flat-credit-card.js'

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

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px;
`
const Wrap = styled.div`
  width: 100%;
  margin-bottom: 45px;
`
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

const CardWrapper = styled.div`
  height: 44.8vw;
`

class Payment extends Component {
  constructor () {
    super()
    this.state = {
      showBack: false,
      cardDetails: null
    }
  }
  setCardDetails (cardDetails) {
    this.setState({cardDetails})
  }
  handleClickButton () {
    if (this.state.cardDetails) return this.props.onNext()
    this.setState({showBack: !this.state.showBack})
  }
  render () {
    const buttonLabel = this.state.cardDetails
      ? 'Next'
      : this.state.showBack ? 'go back' : 'add CCV'
    return (
      <Root>
        <TitleWrapper>
          <Title>Payment details</Title>
          <Steps>steps <strong>2th</strong> of 3</Steps>
        </TitleWrapper>
        <Wrap>
          <FlatCreditCard
            showBack={this.state.showBack}
            onChange={(data) => this.setCardDetails(data)}
          />
        </Wrap>
        <Button onClick={() => this.handleClickButton()}>{buttonLabel}</Button>
      </Root>
    )
  }
}

export default Payment
