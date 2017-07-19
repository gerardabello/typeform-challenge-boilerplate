import React, { Component } from 'react'
import Swiper from 'react-swipeable'
import R from 'ramda'
import styled from 'styled-components'

import Gallery from './gallery'

import Product from './product'

const GalleryWrapper = styled.div`
  display: flex;
  height: calc(100vh * ${props => props.children.length});

  transform: translateY(
    calc(
      ${props => -100 * props.index}vh
    )
  );
  transition: 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) all;
`

class Layout extends Component {
  constructor (props) {
    super(props)

    this.goRight = this.goRight.bind(this)
    this.goLeft = this.goLeft.bind(this)
    this.goUp = this.goUp.bind(this)
    this.goDown = this.goDown.bind(this)
    this.swipingRight = this.swipingRight.bind(this)
    this.swipingLeft = this.swipingLeft.bind(this)

    this.state = {
      galleryIndex: 0,
      itemIndex: R.times(R.always(0), R.length(this.props.galleries))
    }
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
    const currentItemIndex = R.nth(
      this.state.galleryIndex,
      this.state.itemIndex
    )

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

  goUp () {
    console.log('goUp')
    this.setState({
      galleryIndex: this.state.galleryIndex - 1
    })
  }
  goDown () {
    console.log('goDown')

    this.setState({
      galleryIndex: this.state.galleryIndex + 1
    })
  }

  render () {
    const { galleries } = this.props

    return (
      <Swiper
        onSwipedUp={this.goDown}
        onSwipedDown={this.goUp}
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
        <GalleryWrapper index={this.state.galleryIndex}>
          {galleries.map((gallery, i) => {
            return (
              <Gallery
                key={i}
                selectedIndex={this.state.itemIndex[i]}
                delta={this.state.delta}
                max={gallery.products.length - 1}
              >
                {gallery.products.map((product, i) =>
                  <Product
                    name={product.name}
                    img={product.image}
                    price={product.price}
                    key={i}
                  />
                )}
              </Gallery>
            )
          })}
        </GalleryWrapper>
      </Swiper>
    )
  }
}

export default Layout
