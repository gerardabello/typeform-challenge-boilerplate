import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  width: calc(100vw * ${props => props.children.length});

  transform: translateX(
    calc(
      ${props => -80 * props.selectedIndex}vw - ${props => props.delta}px + 10vw
    )
  );
  transition: 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) all;
`

class Gallery extends Component {
  render () {
    return (
      <Root selectedIndex={this.props.selectedIndex} delta={this.props.delta}>
        {this.props.children}
      </Root>
    )
  }
}

Gallery.propTypes = {
  selectedIndex: PropTypes.number,
  delta: PropTypes.number
}

export default Gallery
