import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  background: transparent;
  border: none;
  outline: none;
  color: inherit;
  max-width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: ${(props) => props.placeholderColor};
    opacity: 0.6;
  }
`

const CardInput = ({value, onChange, placeholderColor = 'white', ...props}) => {
  return (
    <Input
      {...props}
      type='text'
      value={value}
      placeholderColor={placeholderColor}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default CardInput
