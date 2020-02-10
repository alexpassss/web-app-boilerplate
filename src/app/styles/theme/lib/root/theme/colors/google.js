import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const google = {
  darken1: Color(colors.google)
    .darken(blending.darken1.basic)
    .hex(),
  default: colors.google,
  lighten1: Color(colors.google)
    .alpha(blending.lighten1.basic)
    .rgb()
    .string(),
  lighten2: Color(colors.google)
    .alpha(blending.lighten2.basic)
    .rgb()
    .string(),
  lighten3: Color(colors.google)
    .alpha(blending.lighten3.basic)
    .rgb()
    .string(),
  lighten4: Color(colors.google)
    .alpha(blending.lighten4.basic)
    .rgb()
    .string(),
  lighten5: Color(colors.google)
    .alpha(blending.lighten5.basic)
    .rgb()
    .string(),
  lighten6: Color(colors.google)
    .alpha(blending.lighten6.basic)
    .rgb()
    .string()
}

export default google
