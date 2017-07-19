import React, { Component } from 'react'
import Swiper from 'react-swipeable'
import R from 'ramda'
import styled from 'styled-components'

import Gallery from './gallery'

import Product from './product'

const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

    this.swipingUp = this.swipingUp.bind(this)
    this.swipingDown = this.swipingDown.bind(this)

    const fill = num => len => R.times(R.always(num), len)

    this.state = {
      galleryIndex: 0,
      itemIndex: fill(0)(R.length(this.props.galleries)),
      verticalDelta: 0,
      horitzontalDelta: 0
    }
  }

  // This isnt being called, it's just for show off
  swiping (prop, orientation) {
    return (_, delta) => {
      this.setState({
        [prop]: orientation(delta)
      })
    }
  }

  swipingRight (_, delta) {
    this.setState({
      horitzontalDelta: -delta
    })
  }

  swipingLeft (_, delta) {
    this.setState({
      horitzontalDelta: delta
    })
  }

  swipingUp (_, delta) {
    this.setState({
      verticalDelta: -delta
    })
  }

  swipingDown (_, delta) {
    this.setState({
      verticalDelta: delta
    })
  }

  goRight () {
    const galleries = R.prop('galleries', this.props)
    const galleryIndex = R.prop('galleryIndex', this.state)
    const gallery = R.nth(galleryIndex, galleries)
    const productCount = R.length(R.prop('products', gallery))
    const currentItemIndex = R.nth(galleryIndex, this.state.itemIndex)

    const nextIndex = R.inc(currentItemIndex)
    const index = R.min(nextIndex, productCount - 1)

    const { itemIndex } = this.state
    itemIndex[this.state.galleryIndex] = index

    this.setState({
      itemIndex,
      horitzontalDelta: 0
    })
  }

  goLeft () {
    const { itemIndex } = this.state

    const currentItemIndex = R.nth(
      this.state.galleryIndex,
      this.state.itemIndex
    )
    const nextIndex = R.dec(currentItemIndex)

    const index = R.max(nextIndex, 0)
    itemIndex[this.state.galleryIndex] = index

    this.setState({
      itemIndex,
      horitzontalDelta: 0
    })
  }

  goUp () {
    const MIN_ITEM_INDEX = 0
    const nextIndex = R.subtract(this.state.galleryIndex, 1)
    const index = R.max(nextIndex, MIN_ITEM_INDEX)

    this.setState({
      galleryIndex: index
    })
  }

  goDown () {
    const galleries = R.prop('galleries', this.props)
    const galleriesCount = R.length(galleries)
    const MAX_ITEM_INDEX = galleriesCount - 1

    const nextIndex = R.sum([this.state.galleryIndex, 1])
    const index = R.min(nextIndex, MAX_ITEM_INDEX)

    this.setState({
      galleryIndex: index
    })
  }

  render () {
    const { galleries } = this.props
    const { galleryIndex, horitzontalDelta } = this.state

    return (
      <Swiper
        onSwipedUp={this.goDown}
        onSwipedDown={this.goUp}
        onSwipingUp={this.swipingUp}
        onSwipingDown={this.swipingDown}
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
        <GalleryWrapper index={galleryIndex}>
          {galleries.map((gallery, i) => {
            return (
              <Gallery
                key={i}
                selectedIndex={this.state.itemIndex[i]}
                title={gallery.title}
                delta={horitzontalDelta}
                max={gallery.products.length - 1}
              >
                {gallery.products.map((product, i) => (
                  <Product
                    key={i}
                    name={product.name}
                    img={product.image}
                    price={product.price}
                  />
                ))}
              </Gallery>
            )
          })}
        </GalleryWrapper>
      </Swiper>
    )
  }
}

export default Layout
