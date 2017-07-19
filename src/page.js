import React, {Component} from 'react'
import styled from 'styled-components'

const Fitter = styled.div`
  width: 100vw;
  height: 100vh;
`

class Page extends Component {
  render () {
    return (
      <Fitter style={{background: this.props.color}}>
        {this.props.children}
      </Fitter>
    )
  }
}
export default Page
