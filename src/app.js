import React, { Component } from 'react'
import styled from 'styled-components'
import Layout from './layout'

import Loader from 'halogen/SyncLoader'

import WelcomeScreen from './welcome-screen'

import { getForm } from './services/form'
import { getGalleries } from './services/galleries'

const Root = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${p => p.background};
  font-family: '${p => p.font}', sans-serif
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

      const welcomeScreen = form.welcome_screens
        ? form.welcome_screens[0]
        : undefined

      this.setState({
        galleries: getGalleries(form),
        form,
        welcomeScreen,
        fetching: false
      })
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
      <Root background={form.theme.colors.background} font={form.theme.font}>
        <Layout galleries={galleries} />
      </Root>
    )
  }
}
// <WelcomeScreen
//   description={this.state.welcomeScreen.title}
//   img={this.state.welcomeScreen.attachment.href}
// />

export default App
