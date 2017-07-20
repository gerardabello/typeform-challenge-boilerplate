import React from 'react'
import styled from 'styled-components'
import tinycolor from 'tinycolor2'

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
    color: ${(p) => tinycolor(p.theme.colors.answer).lighten().toString()};
    opacity: 0.6;
  }
`

const isValidNumber = (n) =>
  !isNaN(parseFloat(n)) &&
  isFinite(n) &&
  n.toString().indexOf('.') < 0

class CardInput extends React.Component {
  render () {
    const {
      value,
      onChange,
      placeholderColor = 'white',
      isNumeric,
      ...props
    } = this.props
    return (
      <Input
        {...props}
        // type={isNumeric ? 'number' : 'text'}
        type='text'
        value={value}
        placeholderColor={placeholderColor}
        onChange={(e) => {
          const value = e.target.value
          if (
            isNumeric && isValidNumber(value) ||
            !isNumeric ||
            value === ''
          ) {
            onChange(value)
          }
        }}
      />
    )
  }
}

export default CardInput
