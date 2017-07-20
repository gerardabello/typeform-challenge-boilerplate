import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`

const Slider = styled.div`
  display: flex;

  width: calc(100vw * ${props => props.children.length});
  transform: translateX(
    calc(
      ${props => -70 * props.selectedIndex}vw - ${props => props.delta}px + 15vw
    )
  );
  transition: 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) all;
`

const Title = styled.h1`
  color: ${p => p.theme.colors.question};
  margin-top: 62px;
  font-size: 22px;
  margin-bottom: 10px;
  margin-left: 18vw;
`

class Gallery extends Component {
  render () {
    return (
      <Root>
        <Title>
          {this.props.title}
        </Title>
        <Slider
          selectedIndex={this.props.selectedIndex}
          delta={this.props.delta}
        >
          {this.props.children}
        </Slider>
      </Root>
    )
  }
}

Gallery.propTypes = {
  selectedIndex: PropTypes.number,
  delta: PropTypes.number
}

export default Gallery
