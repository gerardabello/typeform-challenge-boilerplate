import color from 'tinycolor2'

const colorateButton = buttonHex => {
  const button = color(buttonHex).toHsv()

  let textSaturation =
    1 * Math.pow(button.s, 0.1) -
    3 * Math.pow(button.s, 1) +
    2 * Math.pow(button.s, 1.3)
  let textBrightness

  if (button.v > 0.5 + Math.pow(button.s, 1.6) * 0.5) {
    textBrightness = Math.min(
      0.1 + button.v / 4 - textSaturation / 8 - button.s / 5,
      0.25
    )
    textBrightness = Math.max(0.05, textBrightness)
  } else {
    textBrightness = Math.max(
      0.9 - (1 - button.v) / 4 + textSaturation / 8 + button.s / 5,
      0.75
    )
    textBrightness = Math.min(0.95, textBrightness)
    textSaturation = textSaturation / 2
  }

  return {
    text: color(
      `hsva(${button.h},${Math.max(textSaturation, 0)},${textBrightness},0.9)`
    ).toRgbString(),
    background: color(
      `hsva(${button.h},${button.s},${button.v},1)`
    ).toRgbString(),
    border: color(
      `hsv(${button.h},${Math.min(button.s * 5, 1)},${button.v / 2})`
    ).toRgbString()
  }
}

export default colorateButton
