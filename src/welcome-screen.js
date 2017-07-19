import React from 'react'
import Page from './page'
import styled from 'styled-components'

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

const WelcomeScreen = ({ title, img, description }) => {
  return (
    <Page>
      <Picture><img src={img} /></Picture>
      <Description>{description}</Description>
    </Page>
  )
}

export default WelcomeScreen
