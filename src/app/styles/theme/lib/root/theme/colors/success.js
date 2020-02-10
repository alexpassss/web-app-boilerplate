import colors from '../colors'
import blending from '../blending'
import Color from 'color'

const success = {
  darken1: Color(colors.success)
    .darken(blending.darken1.basic)
    .hex(),
  default: colors.success,
  lighten1: Color(colors.success)
    .alpha(blending.lighten1.basic)
    .rgb()
    .string(),
  lighten2: Color(colors.success)
    .alpha(blending.lighten2.basic)
    .rgb()
    .string(),
  lighten3: Color(colors.success)
    .alpha(blending.lighten3.basic)
    .rgb()
    .string(),
  lighten4: Color(colors.success)
    .alpha(blending.lighten4.basic)
    .rgb()
    .string(),
  lighten5: Color(colors.success)
    .alpha(blending.lighten5.basic)
    .rgb()
    .string(),
  lighten6: Color(colors.success)
    .alpha(blending.lighten6.basic)
    .rgb()
    .string()
}

export default success
