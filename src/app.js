import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from './layout'

import WelcomeScreen from './welcome-screen'

import { getForm } from './services/form'
import { getProducts } from './services/product'

const Root = styled.section`
  width: 100vw;
  height: 100vh;
  background: ${p => p.background};
`

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { fetching: true }
  }

  async fetchForm () {
    try {
      const form = await getForm('vDGGs9')

      this.setState({ galleries: getProducts(form), form, fetching: false })
    } catch (reason) {
      console.warn(reason)
    }
  }

  componentDidMount () {
    this.fetchForm()
  }

  render () {
    if (this.state.fetching) {
      return (
        <LoaderWrapper>
          <Loader color='#444444' size='16px' />
        </LoaderWrapper>
      )
    }

    const { form, galleries } = this.state

    return (
      <Root background={form.theme.colors.background}>
        <WelcomeScreen
          description={this.state.welcomeScreen.title}
          img={this.state.welcomeScreen.attachment.href}
        />
        <Layout data={galleries} />
      </Root>
    )
  }
}

export default App
