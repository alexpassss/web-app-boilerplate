import button from '../../elements/button'
import shape from './shape'
import color from './color'

export default function stylesheets(config) {
  let shapeConfig = button.shape[config.shape]
  let colorConfig = button.color[config.color]
  let size = config.size
  let variant = config.variant

  let shapeStyles = shape(shapeConfig, size)
  let colorStyles = color(colorConfig, variant)

  return shapeStyles + colorStyles
}
