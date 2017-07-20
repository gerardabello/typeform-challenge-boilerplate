import styled from 'styled-components'

export const CardBox = styled.div`
perspective: 1000;
${'' /* width: 400px;
height: 280px; */}
width: 80vw;
height: 44.8vw;
left: 50%;
position: relative;
transform: translateX(-50%);
`

export const Flip = styled.div`
transition: 0.6s;
transform-style: preserve-3d;
position: relative;
transform: rotateY(${props => props.turn ? '180deg' : ''});
`

export const Logo = styled.div`
position: absolute;
top: 9px;
right: 20px;
width: 60px;
`

export const LogoSvg = styled.svg`
width: 100%;
height: auto;
fill: #fff;
`

// front part
export const CardNumber = styled.div`
position: absolute;
margin: 0 auto;
top: 20.6vmin;
left: 3.8vmin;
right: 3.8vmin;
font-size: 7.6vmin;
${'' /* top: 103px;
left: 19px;
right: 19px;
font-size: 38px; */}
`

export const Label = styled.label`
font-size: 2vmin;
letter-spacing: 0.2vmin;
text-shadow: none;
text-transform: uppercase;
font-weight: normal;
opacity: 0.5;
display: block;
margin-bottom: 0.6vmin;
`
export const CardHolder = styled.div`
position: absolute;
margin: 0 auto;
top: 36vmin;
left: 3.8vmin;
font-size: 4.4vmin;
text-transform: capitalize;
`

export const ExpirationDate = styled.div`
position: absolute;
margin: 0 auto;
top: 36vmin;
font-size: 4.4vmin;
text-transform: capitalize;
text-align: right;
right: 4vmin;
width: 16vmin;
`

export const Ccv = styled.div`
font-size: 4vmin;
height: 7.2vmin;
background: #fff;
width: 91%;
border-radius: 1vmin;
top: 22vmin;
left: 0;
right: 0;
position: absolute;
margin: 0 auto;
color: #000;
text-align: right;
padding: 2vmin;
display: flex;
align-items: center;
justify-content: flex-end;
`
