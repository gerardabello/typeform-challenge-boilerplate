import React, { Component } from 'react'
import Swiper from 'react-swipeable'
import R from 'ramda'

import Slider from './slider'

class Row extends Component {
  constructor (props) {
    super(props)

    this.swiping = this.swiping.bind(this)
    this.swiped = this.swiped.bind(this)
    this.goRight = this.goRight.bind(this)
    this.goLeft = this.goLeft.bind(this)
    this.swipingRight = this.swipingRight.bind(this)
    this.swipingLeft = this.swipingLeft.bind(this)

    this.state = {
      index: 0
    }
  }

  swiping (e, deltaX, deltaY, absX, absY, velocity) {
    // console.log('Swiping...', deltaX, deltaY, absX, absY, velocity)
  }

  swiped (e, deltaX, deltaY, isFlick, velocity) {
    // console.log('Swiped...', e, deltaX, deltaY, isFlick, velocity)
  }

  swipingRight (e, delta) {
    console.log(delta)
    this.setState({
      delta: -delta
    })
  }

  swipingLeft (e, delta) {
    console.log(delta)
    this.setState({
      delta: delta
    })
  }

  goRight () {
    const index = R.min(this.state.index + 1, 4)
    this.setState({
      index,
      delta: 0
    })
  }

  goLeft () {
    const index = R.max(this.state.index - 1, 0)
    this.setState({
      index,
      delta: 0
    })
  }

  render () {
    return (
      <Swiper
        onSwiping={this.swiping}
        onSwiped={this.swiped}
        onSwipingLeft={this.swipingLeft}
        onSwipingRight={this.swipingRight}
        onSwipedRight={this.goLeft}
        onSwipedLeft={this.goRight}
        flickThreshold={0.8}
        onTap={() => {
          console.log('Click!')
        }}
      >
        <Slider selectedIndex={this.state.index} delta={this.state.delta} />
      </Swiper>
    )
  }
}

export default Row
