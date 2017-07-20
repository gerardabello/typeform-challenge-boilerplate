import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Layout from './layout'
import R from 'ramda'

import Loader from 'halogen/SyncLoader'
import Header from './header'
import Checkout from './checkout'

import { getForm } from './services/form'
import { getNormalizedForm } from './services/galleries'

import colorateButton from './services/colors'

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
    this.state = {
      fetching: true,
      cart: [],
      checkoutOpen: false
    }

    this.addProduct = this.addProduct.bind(this)
  }

  addProduct (product) {
    return () => {
      this.setState({
        cart: R.append(product, this.state.cart)
      })
    }
  }

  onClickCart = () => {
    console.log('cart clicked')
    this.setState({ checkoutOpen: true })
  }

  onCloseCheckout = () => {
    this.setState({ checkoutOpen: true })
  }

  async fetchForm () {
    try {
      const form = await getForm('vDGGs9')

      const welcomeScreen = form.welcome_screens
        ? form.welcome_screens[0]
        : undefined

      this.setState({
        form: getNormalizedForm(form),
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

    const { form, cart, checkoutOpen } = this.state

    let theme = form.theme
    theme.colors.buttonText = colorateButton(theme.colors.button).text

    return (
      <ThemeProvider theme={theme}>
        <Root background={form.theme.colors.background} font={form.theme.font}>
          <Header
            title='foo'
            currency='€'
            amount={R.sum(R.map(R.prop('price'), cart))}
            items={R.length(cart)}
            onClickCart={this.onClickCart}
          />
          <Layout fields={form.fields} handleClick={this.addProduct} />
          <Checkout
            open={checkoutOpen}
            onCloseCheckout={this.onCloseCheckout}
          />
        </Root>
      </ThemeProvider>
    )
  }
}
// <WelcomeScreen
//   description={this.state.welcomeScreen.title}
//   img={this.state.welcomeScreen.attachment.href}
// />

export default App
