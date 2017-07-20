import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

require('babel-polyfill')

let formID = window.location.pathname.split('/').slice(-1)[0]

if (!formID) {
  formID = 'lfYifs'
}

export function mount ({ rootNode }) {
  ReactDOM.render(<App formID={formID} />, rootNode)
}

mount({
  rootNode: document.getElementById('root')
})
