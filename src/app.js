import React, { Component } from 'react'
import styled from 'styled-components'
import Page from './page'
import WelcomeScreen from './welcome-screen'

import { getForm } from './services/form'

const Root = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  async fetchForm () {
    try {
      let form = await getForm('vDGGs9')

      this.setState({ form })
    } catch (reason) {
      console.warn(reason)
    }
  }

  componentDidMount () {
    this.fetchForm()
  }

  render () {
    return (
      <Root>
        <WelcomeScreen
          title='shop foo'
          description='description foo'
          img='https://goo.gl/images/o8kxDT'
        />
        <Page color='red' />
        <Page color='green' />
        <Page color='red' />
        <Page color='green' />
      </Root>
    )
  }
}
