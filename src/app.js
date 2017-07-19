import React, { Component } from 'react'
import styled from 'styled-components'
import Page from './page'
import WelcomeScreen from './welcome-screen'

import { getForm } from './services/form'

const Root = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background: ${p => p.background};
`

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = { fetching: true }
  }

  async fetchForm () {
    try {
      let form = await getForm('vDGGs9')

      this.setState({ form, fetching: false })
    } catch (reason) {
      console.warn(reason)
    }
  }

  componentDidMount () {
    this.fetchForm()
  }

  render () {
    if (this.state.fetching) {
      return <p> Fetching form... </p>
    }

    const form = this.state.form

    return (
      <Root background={form.theme.colors.background}>
        <WelcomeScreen
          title={form.title}
          description='description foo'
          img='https://goo.gl/images/o8kxDT'
        />
        <Page />
        <Page />
        <Page />
        <Page />
      </Root>
    )
  }
}
