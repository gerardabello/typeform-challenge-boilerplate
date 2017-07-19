import React from 'react'
import Page from './page'
import styled from 'styled-components'

const Title = styled.h1`
  position: absolute;
  top: 0;
  text-align: center;
  width: 100%;
`

const Picture = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Description = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`

const WelcomeScreen = ({title, img, description}) => {
  return (
    <Page>
      <Title>{title}</Title>
      <Picture><img src={img} /></Picture>
      <Description>{description}</Description>
    </Page>
  )
}

export default WelcomeScreen
