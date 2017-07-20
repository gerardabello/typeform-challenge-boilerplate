import React from 'react'
import tinycolor from 'tinycolor2'
import styled from 'styled-components'
// button green
// buttonText green ish
// answer yellow
// question red
export const Front = styled.div`
  border-width: 1px;
  border-style: solid;
  background: ${p => tinycolor(p.theme.colors.background).darken().toString()};
  border-color: ${p => tinycolor(p.theme.colors.background).darken().toString()};
  width: 80vmin;
  height: ${0.625 * 80}vmin;
  border-radius: ${0.035 * 80}vmin;
  backface-visibility: hidden;
  position: absolute;
  color: ${(p) => tinycolor(p.theme.colors.answer).toString()};
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
width: 12vmin;
height: 9vmin;
top: 4vmin;
left: 4vmin;
border-radius: 1.6vmin;
background: ${p => tinycolor(p.theme.colors.background).lighten().toString()};
border-color: ${(p) => p.theme.colors.background};
border-width: 1px;
border-style: solid;
`

const FrontCard = ({
  borderColor = '#333333',
  background = 'rgba(0, 0, 0, 0.2)',
  backgroundChipColor,
  borderChipColor,
  children
}) => {
  return (
    <Front>
      <Chip />
      {children}
    </Front>
  )
}

export default FrontCard
