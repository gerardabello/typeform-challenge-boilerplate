import React, { Component } from 'react'
import styled from 'styled-components'
import Slider from './Slider'

const Root = styled.section`
  background: papayawhip;
`

export default class App extends Component {
  render () {
    return (
      <Root>
        <Slider />
      </Root>
    )
  }
}
