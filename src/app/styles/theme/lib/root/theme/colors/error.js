import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const error = {
  darken1: Color(colors.error)
    .darken(blending.darken1.basic)
    .hex(),
  default: colors.error,
  lighten1: Color(colors.error)
    .alpha(blending.lighten1.basic)
    .rgb()
    .string(),
  lighten2: Color(colors.error)
    .alpha(blending.lighten2.basic)
    .rgb()
    .string(),
  lighten3: Color(colors.error)
    .alpha(blending.lighten3.basic)
    .rgb()
    .string(),
  lighten4: Color(colors.error)
    .alpha(blending.lighten4.basic)
    .rgb()
    .string(),
  lighten5: Color(colors.error)
    .alpha(blending.lighten5.basic)
    .rgb()
    .string(),
  lighten6: Color(colors.error)
    .alpha(blending.lighten6.basic)
    .rgb()
    .string()
}

export default error
