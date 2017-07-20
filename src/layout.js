import React, { Component } from 'react'
import Swiper from 'react-swipeable'
import R from 'ramda'
import styled, { keyframes } from 'styled-components'

import Gallery from './gallery'
import Statement from './statement'
import WelcomeScreen from './welcome-screen'

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

// const bounceAnimation = keyframes`
//   0%, 20%, 50%, 80%, 100% {
//     -moz-transform: translateY(0);
//     -ms-transform: translateY(0);
//     -webkit-transform: translateY(0);
//     transform: translateY(0);
//   }
//   40% {
//     -moz-transform: translateY(-30px);
//     -ms-transform: translateY(-30px);
//     -webkit-transform: translateY(-30px);
//     transform: translateY(-30px);
//   }
//   60% {
//     -moz-transform: translateY(-15px);
//     -ms-transform: translateY(-15px);
//     -webkit-transform: translateY(-15px);
//     transform: translateY(-15px);
//   }
// `

const Arrow = styled.div`
  ${(p) => p.hide ? 'display: none;' : ''}
  position: fixed;
  bottom: 10px;
  left: calc(50% - 20px);
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
  shouldHideArrow () {
    const {horitzontalDelta, verticalDelta, fieldIndex} = this.state
    return (
      this.props.fields.length - 1 === fieldIndex ||
      horitzontalDelta !== 0 ||
      verticalDelta !== 0
    )
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
            } else if (field.type === 'welcome_screen') {
              return (
                <WelcomeScreen
                  key={i}
                  description={field.title}
                  img={field.attachment && field.attachment.href}
                />
              )
            }
          })}
        </GalleryWrapper>
        <Arrow hide={this.shouldHideArrow()}>
          <img
            width='40'
            height='40'
            src='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4='
          />
        </Arrow>
      </Swiper>
    )
  }
}

export default Layout
