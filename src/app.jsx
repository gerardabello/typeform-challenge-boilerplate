import React, { Component } from 'react'
import styled from 'styled-components'
import Page from './page'

// Create a Wrapper component that'll render a <section> tag with some styles
const Root = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`

export default class App extends Component {
  render () {
    return (
      <Root>
        <Page color='red' />
        <Page color='green' />
        <Page color='red' />
        <Page color='green' />
      </Root>
    )
  }
}
