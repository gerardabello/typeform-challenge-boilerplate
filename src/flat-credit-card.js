import React, { Component } from 'react'
import {findDOMNode} from 'react-dom'

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
      ccv: ''
    }
  }
  componentDidUpdate () {
    this.props.showBack && findDOMNode(this.refs.ccv).focus()
  }
  setValue (propName, value) {
    const maxLength = MAX_FIELDS_LENGTH[propName]
    if (value.toString().length > maxLength) return
    this.setState({ [propName]: value }, () => {
      this.triggerChange()
    })
  }
  triggerChange () {
    const isDone = Object.keys(MAX_FIELDS_LENGTH).every(
      key =>
        (key === 'holder'
          ? this.state.holder.length > 0
          : this.state[key].length === MAX_FIELDS_LENGTH[key])
    )
    if (isDone) {
      this.props.onChange(this.state)
    } else {
      this.props.onChange(null)
    }
  }
  render () {
    const { number, holder, expirationMonth, expirationYear, ccv } = this.state
    return (
      <CardBox>
        <Flip turn={this.props.showBack}>
          <FrontCard>
            <CardNumber>
              <CardInput
                placeholder='Type card number'
                value={number}
                isNumeric
                onChange={(value) => this.setValue('number', value)}
              />
            </CardNumber>
            <CardHolder>
              <Label>Card holder</Label>
              <CardInput
                placeholder='Type your name'
                value={holder}
                onChange={(value) => this.setValue('holder', value)}
              />
            </CardHolder>
            <ExpirationDate>
              <Label>Expires</Label>
              <CardInput
                style={{ width: '6vmin' }}
                placeholder='MM'
                isNumeric
                value={expirationMonth}
                onChange={(value) => this.setValue('expirationMonth', value)}
              />
              <DateDivider>/</DateDivider>
              <CardInput
                style={{ width: '6vmin' }}
                placeholder='YY'
                isNumeric
                value={expirationYear}
                onChange={(value) => this.setValue('expirationYear', value)}
              />
            </ExpirationDate>
          </FrontCard>
          <BackCard>
            <Ccv>
              <CardInput
                ref='ccv'
                style={{textAlign: 'right'}}
                placeholder='CCV'
                placeholderColor='black'
                isNumeric
                value={ccv}
                onChange={(value) => this.setValue('ccv', value)}
              />
            </Ccv>
          </BackCard>
        </Flip>
      </CardBox>
    )
  }
}

export default CreditCard
