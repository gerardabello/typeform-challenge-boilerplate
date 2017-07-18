import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Root = styled.section`
  padding: 4em;
  background: papayawhip;
`

export default class App extends Component {
  render () {
    return (
      <Root>
        <Title>Typeshop</Title>
      </Root>
    )
  }
}
