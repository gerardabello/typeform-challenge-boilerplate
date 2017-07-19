import styled from 'styled-components'

export const CardBox = styled.div`
perspective: 1000;
width: 400px;
height: 280px;
left: 50%;
position: relative;
transform: translateX(-50%);
`
export const Front = styled.div`
  width: 400px;
  height: 250px;
  border-radius: 15px;
  backface-visibility: hidden;
  background: linear-gradient(135deg, #bd6772, #53223f);
  position: absolute;
  color: #fff;
  font-family: Inconsolata;
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
    background: url('http://cdn.flaticon.com/svg/44/44386.svg') no-repeat center;
    background-size: cover;
    opacity: .05;
  }
`
export const Back = styled.div`
  width: 400px;
  height: 250px;
  border-radius: 15px;
  backface-visibility: hidden;
  background: linear-gradient(135deg, #bd6772, #53223f);
  position: absolute;
  color: #fff;
  font-family: Inconsolata;
  top: 0;
  left: 0;
  text-shadow: 0 1px 1px hsla(0, 0, 0, 0.3);
  box-shadow: 0 1px 6px hsla(0, 0, 0, 0.3);
  transform: rotateY(180deg);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url('http://cdn.flaticon.com/svg/44/44386.svg') no-repeat center;
    background-size: cover;
    opacity: .05;
  }
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

export const Chip = styled.div`
position: absolute;
width: 60px;
height: 45px;
top: 20px;
left: 20px;
background: linear-gradient(135deg, hsl(269,54%,87%) 0%,hsl(200,64%,89%) 44%,hsl(18,55%,94%) 100%);;
border-radius: 8px;

&::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border: 4px solid hsla(0, 0, 50, .1);
  width: 80%;
  height: 70%;
  border-radius: 5px;
}
`

export const Strip = styled.div`
background: linear-gradient(135deg, hsl(0, 0, 25%), hsl(0, 0, 10%));
position: absolute;
width: 100%;
height: 50px;
top: 30px;
left: 0;
`

export const CardNumber = styled.div`
position: absolute;
margin: 0 auto;
top: 103px;
left: 19px;
right: 19px;
font-size: 38px;
`

export const Label = styled.label`
font-size: 10px;
letter-spacing: 1px;
text-shadow: none;
text-transform: uppercase;
font-weight: normal;
opacity: 0.5;
display: block;
margin-bottom: 3px;
`
export const CardHolder = styled.div`
position: absolute;
margin: 0 auto;
top: 180px;
left: 19px;
font-size: 22px;
text-transform: capitalize;
`

export const ExpirationDate = styled.div`
position: absolute;
margin: 0 auto;
top: 180px;
font-size: 22px;
text-transform: capitalize;
text-align: right;
right: 20px;
width: 80px;
`

export const Ccv = styled.div`
height: 36px;
background: #fff;
width: 91%;
border-radius: 5px;
top: 110px;
left: 0;
right: 0;
position: absolute;
margin: 0 auto;
color: #000;
text-align: right;
padding: 10px;
display: flex;
align-items: center;
justify-content: flex-end;
`
