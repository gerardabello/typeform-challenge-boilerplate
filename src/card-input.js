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
    color: rgba(125, 125, 125, 0.6);
  }
`

const CardInput = ({value, onChange, ...props}) => {
  return (
    <Input
      {...props}
      type='text'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default CardInput
