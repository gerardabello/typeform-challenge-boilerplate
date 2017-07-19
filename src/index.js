import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import ShoppingCart from './shopping-cart'

require('babel-polyfill')

export function mount ({ rootNode }) {
  ReactDOM.render(<ShoppingCart />, rootNode)
}

mount({
  rootNode: document.getElementById('root')
})
