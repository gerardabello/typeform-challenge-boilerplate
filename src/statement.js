import React, { Component } from 'react'
import styled from 'styled-components'

const Root = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 5vh;
`

const Title = styled.h1`
  color: ${p => p.theme.colors.question};
  width: 100%;
  font-weight: 700;
  font-size: 24px;
`

const Description = styled.h1`
  color: ${p => p.theme.colors.question};
  width: 100%;
  font-weight: 500;
  font-size: 22px;
`

class Statement extends Component {
  render () {
    return (
      <Root>
        <Title>
          {this.props.title}
        </Title>

        <Description>
          {this.props.description}
        </Description>
      </Root>
    )
  }
}

export default Statement
