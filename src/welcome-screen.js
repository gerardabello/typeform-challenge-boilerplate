import React from 'react'
import styled from 'styled-components'

const Fitter = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Picture = styled.img`
  width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Description = styled.div`
  width: 90%;
  font-size: 22px;
  text-align: center;
`

const WelcomeScreen = ({ title, img, description }) => {
  return (
    <Fitter>
      <Picture src={img} />
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </Fitter>
  )
}

export default WelcomeScreen
