import React from 'react'
import FlatCreditCard from './flat-credit-card.js'

const Payment = ({onChange}) => {
  return (
    <FlatCreditCard
      onChange={cardDetails => console.log(cardDetails)}
    />
  )
}

export default Payment
