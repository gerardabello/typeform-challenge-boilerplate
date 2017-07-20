import React from 'react'
import styled from 'styled-components'

const Fitter = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  box-shadow: inset 0 0 0 1px black;
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

const WelcomeScreen = ({ title, img, description }) => {
  return (
    <Fitter>
      <Picture><img src={img} /></Picture>
      <Description>{description}</Description>
    </Fitter>
  )
}

export default WelcomeScreen
