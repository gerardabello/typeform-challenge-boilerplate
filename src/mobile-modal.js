import styled from 'styled-components'
import tinycolor from 'tinycolor2'

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  transform: translateY(${p => (p.open ? '0' : '100vh')});
  transition: transform 1s ease;
  background: ${p => tinycolor(p.theme.colors.background).lighten().toString()};
`

export default Root
