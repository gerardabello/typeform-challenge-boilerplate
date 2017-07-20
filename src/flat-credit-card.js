import React, {Component} from 'react'
import {
  CardBox,
  Flip,
  CardNumber,
  Label,
  CardHolder,
  ExpirationDate,
  DateDivider,
  Ccv
} from './credit-card.styles'
import FrontCard from './front-card'
import BackCard from './back-card'
import CardInput from './card-input'

const MAX_FIELDS_LENGTH = {
  number: 16,
  holder: 20,
  expirationMonth: 2,
  expirationYear: 2,
  ccv: 3
}

class CreditCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      number: '',
      holder: '',
      expirationMonth: '',
      expirationYear: '',
      ccv: '',
      showBack: false
    }
  }
  showFront () {
    this.setState({showBack: false})
  }
  showBack () {
    this.setState({showBack: true})
  }
  setValue (propName, value) {
    const maxLength = MAX_FIELDS_LENGTH[propName]
    if (value.toString().length > maxLength) return
    this.setState({[propName]: value}, () => {
      this.triggerChange()
    })
  }
  triggerChange () {
    const isDone = Object.keys(MAX_FIELDS_LENGTH)
      .every((key) => key === 'holder'
        ? this.state.holder.length > 0
        : this.state[key].length === MAX_FIELDS_LENGTH[key]
      )
    if (isDone) {
      const {
        showBack, // eslint-disable-line
        ...cardDetails
      } = this.state
      this.props.onChange(cardDetails)
    }
  }
  render () {
    const {
      number,
      holder,
      expirationMonth,
      expirationYear,
      ccv
    } = this.state
    return (
      <CardBox>
        <Flip turn={this.state.showBack}>
          <FrontCard>
            <CardNumber>
              <CardInput
                placeholder='Type card number'
                value={number}
                isNumeric
                onChange={(value) => this.setValue('number', value)}
                onFocus={() => this.showFront()}
              />
            </CardNumber>
            <CardHolder>
              <Label>Card holder</Label>
              <CardInput
                placeholder='Type your name'
                value={holder}
                onChange={(value) => this.setValue('holder', value)}
                onFocus={() => this.showFront()}
              />
            </CardHolder>
            <ExpirationDate>
              <Label>Expires</Label>
              <CardInput
                style={{width: '6vmin'}}
                placeholder='MM'
                isNumeric
                value={expirationMonth}
                onChange={(value) => this.setValue('expirationMonth', value)}
                onFocus={() => this.showFront()}
              />
              <DateDivider>/</DateDivider>
              <CardInput
                style={{width: '6vmin'}}
                placeholder='YY'
                isNumeric
                value={expirationYear}
                onChange={(value) => this.setValue('expirationYear', value)}
                onFocus={() => this.showFront()}
              />
            </ExpirationDate>
          </FrontCard>
          <BackCard>
            <Ccv>
              <CardInput
                style={{textAlign: 'right'}}
                placeholder='CCV'
                placeholderColor='black'
                isNumeric
                value={ccv}
                onChange={(value) => this.setValue('ccv', value)}
                onFocus={() => this.showBack()}
              />
            </Ccv>
          </BackCard>
        </Flip>
      </CardBox>
    )
  }
}

export default CreditCard
