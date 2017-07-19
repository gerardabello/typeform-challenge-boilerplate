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
      itemIndex: R.times(R.always(0), R.length(this.props.galleries))
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
      delta: -delta
    })
  }

  swipingLeft (e, delta) {
    this.setState({
      delta: delta
    })
  }

  goRight () {
    const galleries = R.prop('galleries', this.props)
    const gallery = R.nth(this.state.galleryIndex, galleries)
    const galleryLength = R.length(R.prop('products', gallery))
    const currentItemIndex = this.state.itemIndex[this.state.galleryIndex]

    const nextIndex = R.sum([currentItemIndex, 1])
    const index = R.min(nextIndex, galleryLength - 1)

    const { itemIndex } = this.state
    itemIndex[this.state.galleryIndex] = index

    this.setState({
      itemIndex,
      delta: 0
    })
  }

  goLeft () {
    const { itemIndex } = this.state

    const nextIndex = R.subtract(
      this.state.itemIndex[this.state.galleryIndex],
      1
    )

    const index = R.max(nextIndex, 0)
    itemIndex[this.state.galleryIndex] = index

    this.setState({
      itemIndex,
      delta: 0
    })
  }

  render () {
    const { galleries } = this.props

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
        {galleries.map((gallery, i) => {
          return (
            <Gallery
              key={i}
              selectedIndex={this.state.itemIndex[i]}
              delta={this.state.delta}
              max={gallery.products.length - 1}
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
