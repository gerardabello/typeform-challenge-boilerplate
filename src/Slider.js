import React, { Component } from 'react'
import Swiper from 'react-swipeable'
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

// const Root = styled(Swiper)`
//   display: flex;
//   background: red;
//   width: calc(100vw * 5);
// `

class Slider extends Component {
  constructor (props) {
    super(props)

    this.swiping = this.swiping.bind(this)
    this.swiped = this.swiped.bind(this)
  }

  swiping (e, deltaX, deltaY, absX, absY, velocity) {
    console.log('Swiping...', e, deltaX, deltaY, absX, absY, velocity)
  }

  swiped (e, deltaX, deltaY, isFlick, velocity) {
    console.log('Swiped...', e, deltaX, deltaY, isFlick, velocity)
  }

  render () {
    return (
      <Swiper onSwiping={this.swiping} onSwiped={this.swiped}>
        <Slide>Slide 1</Slide>
        <Slide>Slide 2</Slide>
        <Slide>Slide 3</Slide>
        <Slide>Slide 4</Slide>
        <Slide>Slide 5</Slide>
      </Swiper>
    )
  }
}

export default Slider
