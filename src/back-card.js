import React from 'react'
import styled from 'styled-components'

export const Back = styled.div`
  ${'' /* width: 400px;
  height: 250px;
  border-radius: 15px; */}
  border: 1px solid ${(p) => p.borderColor};
  background: ${(p) => p.background};
  width: 80vmin;
  height: ${0.625 * 80}vmin;
  border-radius: ${0.035 * 80}vmin;
  backface-visibility: hidden;
  position: absolute;
  color: #fff;
  font-family: Inconsolata, Monaco, monospace;
  top: 0;
  left: 0;
  text-shadow: 0 1px 1px hsla(0, 0, 0, 0.3);
  box-shadow: 0 1px 6px hsla(0, 0, 0, 0.3);
  transform: rotateY(180deg);
`
export const Strip = styled.div`
background: linear-gradient(135deg, hsl(0, 0, 25%), hsl(0, 0, 10%));
position: absolute;
width: 100%;
height: 10vmin;
top: 6vmin;
left: 0;
`

const BackCard = ({
  borderColor = '#333333',
  background = 'rgba(0, 0, 0, 0.2)',
  children
}) => {
  return (
    <Back background={background} borderColor={borderColor}>
      {children}
    </Back>
  )
}

export default BackCard
