import React from 'react'
import styled from 'styled-components'

export const Front = styled.div`
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
  z-index: 2;
  transform: rotateY(0deg);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: .05;
  }
`

export const Chip = styled.div`
position: absolute;
${'' /* width: 60px;
height: 45px;
top: 20px;
left: 20px;
background: linear-gradient(135deg, hsl(269,54%,87%) 0%,hsl(200,64%,89%) 44%,hsl(18,55%,94%) 100%);;
border-radius: 8px; */}
width: 12vmin;
height: 9vmin;
top: 4vmin;
left: 4vmin;
border-radius: 1.6vmin;
background: ${(p) => p.background || 'transparent'};
border-width: 1px;
border-style: solid;
border-color: ${(p) => p.borderColor || '#333'}
`

const FrontCard = ({
  borderColor = '#333333',
  background = 'rgba(0, 0, 0, 0.2)',
  backgroundChipColor,
  borderChipColor,
  children
}) => {
  return (
    <Front background={background} borderColor={borderColor}>
      <Chip background={backgroundChipColor} borderColor={borderChipColor} />
      {children}
    </Front>
  )
}

export default FrontCard
