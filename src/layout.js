import React, { Component } from 'react'
import Swiper from 'react-swipeable'
import R from 'ramda'
import styled from 'styled-components'

import Gallery from './gallery'
import Statement from './statement'

import Product from './product'

const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh * ${props => props.children.length});

  transform: translateY(
    calc(
      ${props => -100 * props.index}vh - ${props => props.delta}px
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
      fieldIndex: 0,
      itemIndex: fill(0)(R.length(this.props.fields)),
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
      verticalDelta: delta
    })
  }

  swipingDown (_, delta) {
    this.setState({
      verticalDelta: -delta
    })
  }

  goRight () {
    const fields = R.prop('fields', this.props)
    const fieldIndex = R.prop('fieldIndex', this.state)
    const field = R.nth(fieldIndex, fields)

    // LETS FUCKING GO BOYS!
    if (field.type !== 'picture_choice') {
      return
    }

    const productCount = R.length(R.prop('products', field))
    const currentItemIndex = R.nth(fieldIndex, this.state.itemIndex)

    const nextIndex = R.inc(currentItemIndex)
    const index = R.min(nextIndex, productCount - 1)

    const { itemIndex } = this.state
    itemIndex[this.state.fieldIndex] = index

    this.setState({
      itemIndex,
      horitzontalDelta: 0,
      verticalDelta: 0
    })
  }

  goLeft () {
    const { itemIndex } = this.state

    const currentItemIndex = R.nth(this.state.fieldIndex, this.state.itemIndex)
    const nextIndex = R.dec(currentItemIndex)

    const index = R.max(nextIndex, 0)
    itemIndex[this.state.fieldIndex] = index

    this.setState({
      itemIndex,
      horitzontalDelta: 0,
      verticalDelta: 0
    })
  }

  goUp () {
    const MIN_ITEM_INDEX = 0
    const nextIndex = R.subtract(this.state.fieldIndex, 1)
    const index = R.max(nextIndex, MIN_ITEM_INDEX)

    this.setState({
      verticalDelta: 0,
      horitzontalDelta: 0,
      fieldIndex: index
    })
  }

  goDown () {
    const fields = R.prop('fields', this.props)
    const fieldsCount = R.length(fields)
    const MAX_ITEM_INDEX = fieldsCount - 1

    const nextIndex = R.inc(this.state.fieldIndex)
    const index = R.min(nextIndex, MAX_ITEM_INDEX)

    this.setState({
      verticalDelta: 0,
      horitzontalDelta: 0,
      fieldIndex: index
    })
  }

  render () {
    const { fields } = this.props
    const { fieldIndex, horitzontalDelta } = this.state

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
        trackMouse
        style={{
          overflow: 'hidden'
        }}
      >
        <GalleryWrapper index={fieldIndex} delta={this.state.verticalDelta}>
          {fields.map((field, i) => {
            if (field.type === 'picture_choice') {
              return (
                <Gallery
                  key={i}
                  selectedIndex={this.state.itemIndex[i]}
                  title={field.title}
                  delta={horitzontalDelta}
                  max={field.products.length - 1}
                >
                  {field.products.map((product, j) => {
                    return (
                      <Product
                        key={j}
                        isActive={
                          this.state.itemIndex[i] === j &&
                            this.state.fieldIndex === i
                        }
                        name={product.name}
                        img={product.image}
                        price={product.price}
                        onClick={this.props.handleClick(product)}
                      />
                    )
                  })}
                </Gallery>
              )
            } else if (field.type === 'statement') {
              return (
                <Statement
                  key={i}
                  title={field.title}
                  description={field.properties.description}
                />
              )
            }
          })}
        </GalleryWrapper>
      </Swiper>
    )
  }
}

export default Layout
