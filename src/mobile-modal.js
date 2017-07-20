import styled from 'styled-components'
import tinycolor from 'tinycolor2'

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  transform: translateX(${p => (p.open ? '0' : '100vw')});
  box-shadow: 0 0 50px rgba(0,0,0,${p => (p.open ? '0.15' : '0')});
  transition: transform 0.6s ease;
  background: ${p => tinycolor(p.theme.colors.background).lighten().toString()};
`

export default Root
