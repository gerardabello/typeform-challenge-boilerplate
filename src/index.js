import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import CreditCard from './credit-card'

require('babel-polyfill')

export function mount ({ rootNode }) {
  ReactDOM.render(<CreditCard />, rootNode)
}

mount({
  rootNode: document.getElementById('root')
})
