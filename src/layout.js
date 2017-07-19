import React, { Component } from 'react'
import Swiper from 'react-swipeable'
import R from 'ramda'
import styled from 'styled-components'

import Gallery from './gallery'

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #ff9529;
  height: 100vh;
  width: 100vw;
  border: 5px solid white;
`

class Layout extends Component {
  constructor (props) {
    super(props)

    this.swiping = this.swiping.bind(this)
    this.swiped = this.swiped.bind(this)
    this.goRight = this.goRight.bind(this)
    this.goLeft = this.goLeft.bind(this)
    this.swipingRight = this.swipingRight.bind(this)
    this.swipingLeft = this.swipingLeft.bind(this)

    this.state = {
      galleryIndex: 0,
      itemIndex: 0
    }
  }

  swiping (e, deltaX, deltaY, absX, absY, velocity) {
    // console.log('Swiping...', deltaX, deltaY, absX, absY, velocity)
  }

  swiped (e, deltaX, deltaY, isFlick, velocity) {
    // console.log('Swiped...', e, deltaX, deltaY, isFlick, velocity)
  }

  swipingRight (e, delta) {
    this.setState({
      itemDelta: -delta
    })
  }

  swipingLeft (e, delta) {
    this.setState({
      itemDelta: delta
    })
  }

  goRight () {
    const galleryLength = this.props.data[this.state.galleryIndex].length
    const nextIndex = R.sum([this.state.index, 1])
    const index = R.min(nextIndex, galleryLength)
    console.log(nextIndex)
    console.log(index)
    this.setState({
      index,
      delta: 0
    })
  }

  goLeft () {
    console.log(nextIndex)
    console.log(index)
    const nextIndex = R.subtract(this.state.index, 1)
    const index = R.max(nextIndex, 0)
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
        style={{
          overflow: 'hidden'
        }}
        onTap={() => {
          console.log('Click!')
        }}
      >
        {this.props.data.map((gallery, i) => {
          return (
            <Gallery
              key={i}
              selectedIndex={this.state.itemIndex}
              delta={this.state.itemDelta}
              max={gallery.products.length}
            >
              {gallery.products.map((product, i) => {
                return <Item key={i} />
              })}
            </Gallery>
          )
        })}
      </Swiper>
    )
  }
}

export default Layout
