import React, { Component } from 'react'
import styled from 'styled-components'

const Fitter = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  box-shadow: inset 0 0 0 1px black;
`

class Page extends Component {
  render () {
    return (
      <Fitter>
        {this.props.children}
      </Fitter>
    )
  }
}
export default Page
