import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #ff9529;
  height: 100vh;
  width: 100vw;
  border: 5px solid white;
`

const Root = styled.div`
  display: flex;
  width: calc(100vw * 5);

  transform: translateX(
    calc(
      ${props => -100 * props.selectedIndex}vw - ${props => props.delta}px
    )
  );
  transition: 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) all;
`

class Slider extends Component {
  render () {
    return (
      <Root selectedIndex={this.props.selectedIndex} delta={this.props.delta}>
        <Slide>Slide 1</Slide>
        <Slide>Slide 2</Slide>
        <Slide>Slide 3</Slide>
        <Slide>Slide 4</Slide>
        <Slide>Slide 5</Slide>
      </Root>
    )
  }
}

Slider.propTypes = {
  selectedIndex: PropTypes.number,
  delta: PropTypes.number
}

export default Slider
